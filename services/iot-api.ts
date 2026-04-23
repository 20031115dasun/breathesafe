import {log} from "@expo/fingerprint/cli/build/utils/log";

export const SENSOR_CONFIG = {
    BASE_URL: `http://${process.env.EXPO_PUBLIC_SERVER_IP}:${process.env.EXPO_PUBLIC_SERVER_PORT}/api/`
}

export const getSensorData = async () => {
    const endpoint = `${SENSOR_CONFIG.BASE_URL}getSensorData`
    console.log(endpoint)
    const response = await fetch(endpoint,{
        method: 'POST',
    })


    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const data = await response.json()
    console.log(data)
    return data
}

export const getPredictionData = async () => {
    const endpoint = `${SENSOR_CONFIG.BASE_URL}getPredData`
    const response = await fetch(endpoint,{
        method: 'POST',
    })

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const data = await response.json()
    return data
}
