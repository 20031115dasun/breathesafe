export const SENSOR_CONFIG = {
    BASE_URL: 'http://192.168.1.7:8080'
}

export const getSensorData = async () => {
    const endpoint = `${SENSOR_CONFIG.BASE_URL}/ingest`
}
