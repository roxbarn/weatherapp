import React from 'react';
import WPName from '../atoms/WPName';
import WPBio from '../atoms/WPBio';
import WPAvatar from '../atoms/WPAvatar';

const WeatherPerson = ({firstname, lastname, bio, avatar, ...props}) => {
    return (
        <div>
            <div class="profile-pic"><WPAvatar  avatar={avatar}/></div>
            <WPName firstname={firstname} lastname={lastname}/>
            <WPBio  bio={bio}/>
            
        </div>
    )
}

export default WeatherPerson;
