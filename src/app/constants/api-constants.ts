import { environment } from "src/environments/environment";

const WEATHER_MAIN = `api/weather`;
const CURRENT_WEATHER = `current`;

const API_CURRENT_WEATHER = `${environment.API_BASE_URL}/${WEATHER_MAIN}/${CURRENT_WEATHER}`;

export {
    API_CURRENT_WEATHER
};