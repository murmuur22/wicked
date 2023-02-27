import React from 'react';
import { siteVersion, email, resume, logoRef } from '../data/sitevalues';
import photoPortfolio from '../data/photoPortfolio';
import ImagingItems from './ImagingItems';
import VerifyingClient from './VerifyingClient.jsx';



class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            verified : false,
            dismissed : false,
        };
      }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    timeVerification = () => {
        setInterval(() => {
            console.log('finished intro sequence');
            this.setState({ verified: true })
        }, this.randomIntFromInterval(100, 1000))
    }
    timeIntro = () => {
        setInterval(() => {
            console.log('verified');
            this.setState({ dismissed: true })
        }, 700)
    }

    render() {
        return (
        <>
            {this.state.dismissed ? (
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
                        <div className='invisible lg:visible flex items-center justify-center flex-col text-center'>
                            <p className="fixed inset-x-0 bottom-0 text-sm mb-3 font-terminal">
                                <span>{siteVersion}</span> <span>by robbie dyson</span>
                            </p>
                        </div>
                        <div className='fixed inset-0 flex items-center justify-center flex-col text-center'>
                            <img 
                                src={logoRef}
                                alt='wicked logo'
                                className='w-24 md:w-48'
                            />
                            <h1 className="text-4xl md:text-7xl pb-0 mb-0 md:mb-0 font-sans font-bold">wicked</h1>
                            <h1 className="text-4xl md:text-7xl pt-0 mb-1 md:mb-3 font-light">.imaging</h1>
                            <p className="text-xs md:text-sm mb-3 font-terminal visible lg:invisible">
                                <span>{siteVersion}</span> <span>by robbie dyson</span>
                            </p>
                        </div>
                        <div className='fixed flex flex-col md:flex-row bottom-2 left-2 md:gap-1'>
                            <button
                                onClick={() => (window.open('https://www.instagram.com/murmuur_', '_blank'))}
                                className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-start"
                            >
                                [ INSTAGRAM ] 
                            </button>
                            <button
                                onClick={() => (window.open('https://www.youtube.com/@murmuur_', '_blank'))}
                                className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-start"
                            >
                                [ YOUTUBE ] 
                            </button>
                        </div>
                        <div className='fixed flex flex-col md:flex-row bottom-2 right-2 md:gap-1'>
                            <button 
                                onClick={() => (window.open(resume, '_blank'))}
                                className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-end"
                            >
                                [ RESUME ] 
                            </button>
                            <button 
                                onClick={() => (window.open(email, '_self'))}
                                className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-end"
                            >
                                [ CONTACT ] 
                            </button>
                            <button
                                onClick={() => (window.open('/', '_self'))}
                                className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-end"
                            >
                                [ SIGN OUT ] 
                            </button>
                        </div>
                    </div>
                </div> 
            ) : (
            <>
            {this.state.verified ? (
                <div className="fixed inset-0 flex items-center justify-center flex-col text-center">
                    <h1 className="text-2xl md:text-4xl pb-0 mb-0 font-display">verification complete!</h1>
                    <p className="fixed inset-x-0 bottom-0 text-sm mb-3 font-terminal">
                        <span>{siteVersion}</span> <span>by robbie dyson</span>
                    </p>
                    {this.timeIntro()}
                </div>
            ):(
                <>
                    <VerifyingClient />
                    {this.timeVerification()}
                </>
            )}
            </>
            
            ) }
        </>
        
        )
    }

}

export default Signin;