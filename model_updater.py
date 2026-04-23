from __future__ import annotations

import hashlib
import json
from pathlib import Path

import requests


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def update_model_if_needed(base_url: str, model_dir: str | Path) -> bool:
    model_dir = Path(model_dir)
    model_dir.mkdir(parents=True, exist_ok=True)

    manifest_url = f"{base_url.rstrip('/')}/model/latest"
    download_url = f"{base_url.rstrip('/')}/model/download"

    manifest = requests.get(manifest_url, timeout=30).json()
    version = manifest["model_version"]

    local_meta_path = model_dir / "model_metadata.json"
    local_version = None
    if local_meta_path.exists():
        local_version = json.loads(local_meta_path.read_text(encoding="utf-8")).get("model_version")

    if local_version == version:
        return False

    model_bytes = requests.get(download_url, timeout=60).content
    metadata = requests.get(manifest_url, timeout=30).json()

    (model_dir / "air_quality_model.tflite").write_bytes(model_bytes)
    local_meta_path.write_text(json.dumps(metadata, indent=2), encoding="utf-8")
    return True


if __name__ == "__main__":
    changed = update_model_if_needed("http://127.0.0.1:8000", "./models")
    print("updated" if changed else "no update")
