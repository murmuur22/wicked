import React from 'react';
import LoginItem from './LoginItem';
import portfolio from '../data/portfolio';

function Profiles() {

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 lg:gap-40'>
            {portfolio.map(profile => (
                <LoginItem 
                    userName = {profile.userName}
                    pfpUrl = {profile.pfpUrl}
                    enabled = {profile.enabled}
                    dest = {profile.dest}
                />
            ))}
        </div>
    ) 

}

export default Profiles;