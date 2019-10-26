import React from 'react'
import Icon from '../atoms/Icon';
import HourlyWeather from './HourlyWeather';

const DailyWeatherItem = ({ date, icon, list, maxTemp, minTemp, ...props }) => {
    return (
      <div>
        <h3>{date}</h3>
        <Icon icon={icon} />
        <div>{maxTemp}</div>
        <div>{minTemp}</div>
        <HourlyWeather list={list} />
      </div>
    );
  };

export default DailyWeatherItem

