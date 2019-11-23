import React from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import Forecast from '../components/organisms/Forecast';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';
import './Page.css';


const WeatherPage = ({ city, temperature, changeCity, forecast, linkType, ...props }) => {
    return (
      <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
        <Forecast forecast={forecast} />
        <p class="complaintblurb">Don't like the weather?</p>
        <Link to="/complain">
          <TextLink linkType="complaintlink">Complain to the weather person!</TextLink>
        </Link>
      </PageTemplate>
    );
  };


export default WeatherPage;
