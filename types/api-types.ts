import react from 'react';

export interface SensorData {
    temp:number,
    humidity:number,
    co2:number,
    pm1:number,
    pm10:number,
    pm2_5:number,
    dateTime:string,
    saqi:number,
}

export interface PredictionData {
    trend:string,
    pred_saqi:number,
    pred_class:string,
    current_class:string,
    current_datetime:string

}