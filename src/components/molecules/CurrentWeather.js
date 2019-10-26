import React from 'react'
import City from '../atoms/City';
import TextLink from '../atoms/TextLink';
import Temperature from '../atoms/Temperature';

const CurrentWeather = ({ city, temperature, onTextLinkClick, ...props }) => {
    return (
        <div>
            <City city={city} />
            <TextLink onButtonClick={onTextLinkClick}>Change City</TextLink>
            <Temperature temperature={temperature} />
        </div>
    )
}

export default CurrentWeather


