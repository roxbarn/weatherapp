import React from 'react';
import PropTypes from 'prop-types';
import './WPAvatar.css';

const WPAvatar = ({avatar, ...props}) => {
    return (
        <div className="image-cropper">
        <img src={avatar} className="profile-pic" alt="weather person profile"/>
        </div>
    )
}

WPAvatar.propTypes = {
    image: PropTypes.string.isRequired
};

export default WPAvatar;
