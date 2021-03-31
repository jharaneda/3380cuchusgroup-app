import React from 'react'
import '../../index.css'

const WeatherWidgetJar86 = ({apiWeather}) => {
    

    return (
        <div className="main-container">
            {apiWeather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{apiWeather.name}</span>
                        <sup>{apiWeather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(apiWeather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${apiWeather.weather[0].icon}@2x.png`} alt={apiWeather.weather[0].description} />
                        <p>{apiWeather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default WeatherWidgetJar86
