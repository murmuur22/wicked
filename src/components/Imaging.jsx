import React from 'react';
import { siteVersion, logoRef, randInt } from '../data/sitevalues';
import photoPortfolio from '../data/photoPortfolio';
import ImagingItems from './ImagingItems';
import VerifyingClient from './VerifyingClient.jsx';
import Navbar from './Navbar';




class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            view : 'loading',
        };
      }

    renderView = () => {
        switch (this.state.view) {
            case 'loading': // loading screen
                return (
                    <>
                        <VerifyingClient />
                        {
                            setTimeout(() => {
                                this.setState({view: 'verified'});
                            }, randInt(100, 2000))  
                        }
                    </>
                );
            case 'verified': // verified screen
                return (
                    <>
                        <div className="fixed inset-0 flex items-center justify-center flex-col text-center">
                            <h1 className="text-2xl md:text-4xl pb-0 mb-0 font-display">verification complete!</h1>
                            <p className="fixed inset-x-0 bottom-0 text-sm mb-3 font-terminal">
                                <span>{siteVersion}</span> <span>by robbie dyson</span>
                            </p>
                        </div>
                        {
                            setTimeout(() => {
                                this.setState({view: 'images'});
                            }, 700)
                        }
                    </>
                );
            case 'images': // display images
                return (
                    <div className='animate-fadeIn'>
                        <div className='mb-24 md:mb-10'>
                            <div className='columns-1 md:columns-2 gap-0'>
                                <div className=''>
                                    {photoPortfolio.map(image => (
                                        <ImagingItems 
                                            alt = {image.alt}
                                            imgRef = {image.imgRef}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='text-lg md:text-xl font-display'>
                            <div className='fixed inset-0 flex items-center justify-center flex-col text-center'>
                                <img 
                                    src={logoRef}
                                    alt='wicked logo'
                                    className='w-24 md:w-48'
                                />
                                <h1 className="text-4xl md:text-7xl pb-0 mb-0 md:mb-0 font-sans font-bold">wicked</h1>
                                <h1 className="text-4xl md:text-7xl pt-0 mb-1 md:mb-3 font-light">.imaging</h1>
                                <p className="text-xs md:text-sm mb-3 font-terminal">
                                    <span>{siteVersion}</span> <span>by robbie dyson</span>
                                </p>
                            </div>
                            <Navbar 
                                key='images'

                                byLine={false}

                                left={[
                                    { name : 'INSTAGRAM', event : 'instagram'},
                                    { name : 'YOUTUBE', event : 'youtube'},
                                ]}

                                right={[
                                    { name : 'RESUME', event : 'resume'},
                                    { name : 'CONTACT', event : 'contact'},
                                    { name : 'SIGN OUT', event : 'signout'},
                                ]}
                            />
                        </div>
                    </div>
                );
        }
    }

    render() {
        return (
        <>
            {this.renderView()}
        </>
        
        )
    }

}

export default Signin;