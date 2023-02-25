import React from 'react';
import LoginItem from './LoginItem';
import portfolio from '../data/portfolio';

class Profiles extends React.Component{
    constructor(props) {
        super(props);
      }

    render() {
        return (
        <div className='inset-0 flex flex-col md:flex-row items-center justify-center absolute'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 lg:gap-40 '>
                {portfolio.map(profile => (
                    <LoginItem 
                        userName = {profile.userName}
                        pfpUrl = {profile.pfpUrl}
                        enabled = {profile.enabled}
                        dest = {profile.dest}
                    />
                ))}
            </div>
        </div>
        )
    }

}

export default Profiles;

//my-20 md:mt-72