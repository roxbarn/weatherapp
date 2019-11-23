import React from 'react';
import PropTypes from 'prop-types';
import './WPName.css';

const WPName = ({firstname, lastname, ...props}) => {
    return (
        <>
        <br></br>
        <p className="WPFirstName">{firstname}</p>
        <p className="WPLastName"> {lastname}</p>
        </>
    )
}

WPName.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}

export default WPName;
