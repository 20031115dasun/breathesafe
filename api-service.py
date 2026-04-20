import argparse
import datetime
import json
from pathlib import Path
from pydantic import BaseModel
from sqlalchemy import create_engine , text


from fastapi import FastAPI,HTTPException
from fastapi.responses import FileResponse

app = FastAPI(title="Air Quality model server")


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--config",default=str("config.json"))

    return parser.parse_args()

args = parse_args()
config = json.loads(Path(args.config).read_text(encoding="utf-8"))

def connect_DB(userName:str,password:str,port:str,database:str):
    try:
        engine = create_engine(f"postgresql://{userName}:{password}@localhost:{port}/{database}")
        connection = engine.connect()
        return connection
    except RuntimeError as e:
        print("failed to connect DB "+e)

class SensorData(BaseModel):
    timeStamp: datetime.datetime
    temperatue:float
    humidity:float
    co2: float
    pm1: float
    pm10:float
    pm2_5: float
    currentSaqi: float
    currentClass:str
    predSaqi: float
    predClass:str
    trend:str




class Login(BaseModel):
    username:str
    password:str

class Signup(BaseModel):
    username:str
    password:str



@app.get("/")
def root():
    return {"ststus":"ok"}


@app.post("/uploadSensor")
def uploadSensor(data: SensorData):
    connection = connect_DB(
        config["postgres"]["username"],
        config["postgres"]["password"],
        config["postgres"]["port"],
        config["postgres"]["database"]
    )
    try:
        table_name = config["postgres"]["tableName"]

        query = text(f"""INSERT INTO {table_name} (\"dateTime\", temp, humidity, co2, pm1, pm10, pm2_5, saqi) VALUES (:ts, :temp, :hum, :co2, :pm1, :pm10, :pm25, :saqi)""")

        connection.execute(query, {
            "ts": data.timeStamp,
            "temp": data.temperatue,
            "hum": data.humidity,
            "co2": data.co2,
            "pm1": data.pm1,
            "pm10": data.pm10,
            "pm25": data.pm2_5,
            "saqi": data.currentSaqi,
        })
        connection.commit()
        return {"Status": "data Uploaded successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        connection.close()

@app.post("/login")
def login(data:Login):
    connection = connect_DB(data["username"],data["password"],data["port"],data["database"])

@app.post("/signup")
def signup(data:Signup):
    connection = connect_DB(data["username"],data["password"],data["port"],data["database"])

if __name__ == "__main__":
    import uvicorn
    # This mimics the command line call
    uvicorn.run("api-service:app", host="0.0.0.0", port=8000, reload=True)

