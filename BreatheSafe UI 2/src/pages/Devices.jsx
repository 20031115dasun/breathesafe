import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNav from '../components/BottomNav';
import { Trash2, Settings, Cpu, Plus, ScanSearch } from 'lucide-react';

const STORAGE_KEY = 'local_devices';

function getStoredDevices() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error('Failed to read devices from localStorage:', error);
    return [];
  }
}

function saveStoredDevices(devices) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(devices));
  } catch (error) {
    console.error('Failed to save devices to localStorage:', error);
  }
}

export default function Devices() {
  const [showAdd, setShowAdd] = useState(false);
  const [devices, setDevices] = useState([]);
  const [newDevice, setNewDevice] = useState({ name: '', device_id: '' });

  useEffect(() => {
    setDevices(getStoredDevices());
  }, []);

  const handleAddDevice = () => {
    const trimmedName = newDevice.name.trim();
    const trimmedDeviceId = newDevice.device_id.trim();

    if (!trimmedName || !trimmedDeviceId) {
      alert('Please enter both device name and device ID.');
      return;
    }

    const device = {
      id: crypto.randomUUID(),
      name: trimmedName,
      device_id: trimmedDeviceId,
      created_at: new Date().toISOString(),
    };

    const updatedDevices = [...devices, device];
    setDevices(updatedDevices);
    saveStoredDevices(updatedDevices);

    setNewDevice({ name: '', device_id: '' });
    setShowAdd(false);
  };

  const handleRemoveDevice = (id) => {
    const updatedDevices = devices.filter((device) => device.id !== id);
    setDevices(updatedDevices);
    saveStoredDevices(updatedDevices);
  };

  const handleRemoveAll = () => {
    if (devices.length === 0) {
      alert('No devices to remove.');
      return;
    }

    const confirmed = window.confirm('Do you want to remove all devices?');

    if (confirmed) {
      setDevices([]);
      saveStoredDevices([]);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden pb-28"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(56, 189, 248, 0.12) 0%, transparent 28%),
          radial-gradient(circle at top right, rgba(76, 175, 80, 0.12) 0%, transparent 30%),
          radial-gradient(circle at center, rgba(15, 118, 110, 0.08) 0%, transparent 38%),
          linear-gradient(135deg, #F4FBFA 0%, #F5F7F6 42%, #EEF8F1 100%)
        `,
      }}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-[#38BDF8]/10 blur-3xl" />
        <div className="absolute top-20 -right-16 h-80 w-80 rounded-full bg-[#4CAF50]/12 blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0F766E]/10 blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70"
            style={{
              background:
                'linear-gradient(135deg, rgba(224,247,250,0.92) 0%, rgba(232,245,233,0.88) 100%)',
              boxShadow: '0 10px 28px rgba(15,118,110,0.08)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Cpu size={22} color="#0F766E" />
          </div>

          <div>
            <p className="text-sm text-[#5E9F9A]">Manage your edge devices</p>
            <h1 className="text-3xl font-bold text-[#0B5D3B]">Devices</h1>
          </div>
        </motion.div>


        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-6 grid grid-cols-2 gap-3"
        >
          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #E0F7FA 0%, #D1FAF5 100%)',
              color: '#0F766E',
              border: '2px solid #4CAF50',
              boxShadow: '0 10px 25px rgba(15,118,110,0.12)',
            }}
          >
            <Plus size={16} />
            Add device
          </button>

          <button
            onClick={handleRemoveAll}
            className="flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F4FBFA 100%)',
              color: '#0B5D3B',
              border: '2px solid rgba(76,175,80,0.35)',
              boxShadow: '0 10px 25px rgba(76,175,80,0.08)',
            }}
          >
            <Trash2 size={16} />
            Remove all
          </button>
        </motion.div>

        {/* Add device form */}
        <AnimatePresence>
          {showAdd && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/70 p-5 shadow-[0_12px_30px_rgba(15,118,110,0.08)]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(232,245,233,0.72) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #E0F7FA 0%, #E8F5E9 100%)',
                  }}
                >
                  <ScanSearch size={18} color="#0F766E" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B5D3B]">Add New Device</h3>
                  <p className="text-xs text-[#5E9F9A]">
                    Register a new Raspberry Pi edge node
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Device name (e.g. Living Room)"
                  value={newDevice.name}
                  onChange={(e) =>
                    setNewDevice({ ...newDevice, name: e.target.value })
                  }
                  className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                  style={{
                    background: 'linear-gradient(135deg, #E0F7FA 0%, #E8F5E9 100%)',
                    color: '#0F766E',
                    boxShadow: '0 5px 15px rgba(56,189,248,0.08)',
                  }}
                />

                <input
                  type="text"
                  placeholder="Device ID"
                  value={newDevice.device_id}
                  onChange={(e) =>
                    setNewDevice({ ...newDevice, device_id: e.target.value })
                  }
                  className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                  style={{
                    background: 'linear-gradient(135deg, #E0F7FA 0%, #E8F5E9 100%)',
                    color: '#0F766E',
                    boxShadow: '0 5px 15px rgba(56,189,248,0.08)',
                  }}
                />
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => setShowAdd(false)}
                  className="flex-1 rounded-2xl px-4 py-3 text-sm font-medium transition active:scale-95"
                  style={{
                    background: 'rgba(255,255,255,0.72)',
                    color: '#4F8E89',
                    border: '1.5px solid rgba(76,175,80,0.25)',
                  }}
                >
                  Cancel
                </button>

                <button
                  onClick={handleAddDevice}
                  className="flex-1 rounded-2xl px-4 py-3 text-sm font-semibold transition active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #E0F7FA 0%, #D1FAF5 100%)',
                    color: '#0F766E',
                    border: '2px solid #4CAF50',
                    boxShadow: '0 10px 25px rgba(15,118,110,0.12)',
                  }}
                >
                  Add
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Devices list */}
        <div className="mt-5 flex flex-col gap-4">
          {devices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[1.75rem] border border-white/70 px-5 py-10 text-center shadow-[0_12px_30px_rgba(15,118,110,0.07)]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.84) 0%, rgba(232,245,233,0.70) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p className="text-base font-semibold text-[#0B5D3B]">
                No devices added yet
              </p>
            </motion.div>
          )}

          {devices.map((device, i) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-[1.75rem] border border-white/70 p-5 shadow-[0_12px_30px_rgba(15,118,110,0.08)]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(232,245,233,0.72) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-[#0B5D3B]">
                    {device.name}
                  </p>
                  <p className="mt-1 break-all font-mono text-xs text-[#5E9F9A]">
                    {device.device_id}
                  </p>
                  <p className="mt-2 text-xs text-[#6FA8A3]">
                    Added {new Date(device.created_at).toLocaleDateString()}
                  </p>
                </div>

                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #E0F7FA 0%, #E8F5E9 100%)',
                    boxShadow: '0 8px 20px rgba(15,118,110,0.08)',
                  }}
                >
                  <Cpu size={20} color="#0F766E" />
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition active:scale-95"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    color: '#0F766E',
                    border: '1.5px solid rgba(76,175,80,0.25)',
                    boxShadow: '0 8px 20px rgba(15,118,110,0.06)',
                  }}
                >
                  <Settings size={15} />
                  Manage
                </button>

                <button
                  onClick={() => handleRemoveDevice(device.id)}
                  className="flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #FFF1F1 0%, #FDECEC 100%)',
                    color: '#C0392B',
                    border: '1.5px solid #F5B7B1',
                  }}
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}