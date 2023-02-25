import React from 'react';
import { siteVersion, email, resume, logoRef } from '../data/sitevalues';
import photoPortfolio from '../data/photoPortfolio';
import ImagingItems from './ImagingItems';


class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            
        };
      }

    render() {
        return (
        <div>
            <div className='mb-8 md:mb-10'>
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
            <div className='text-sm md:text-lg lg:text-xl font-display'>
                <div className='invisible lg:visible flex items-center justify-center flex-col text-center'>
                    <p className="fixed inset-x-0 bottom-0 text-xs md:text-sm mb-3 font-terminal">
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
                </div>
                <div className='fixed bottom-2 left-2'>
                    <button
                        onClick={() => (window.open('https://www.instagram.com/murmuur_', '_blank'))}
                        className="cursor-pointer hover:underline underline-offset-1 decoration-2"
                    >
                        [ INSTAGRAM ] 
                    </button> {' '}
                    <button
                        onClick={() => (window.open('https://www.youtube.com/@murmuur_', '_blank'))}
                        className="cursor-pointer hover:underline underline-offset-1 decoration-2"
                    >
                        [ YOUTUBE ] 
                    </button>
                </div>
                <div className='fixed bottom-2 right-2'>
                    <button 
                        onClick={() => (window.open(resume, '_blank'))}
                        className="cursor-pointer hover:underline underline-offset-1 decoration-2"
                    >
                        [ RESUME ] 
                    </button> {' '}
                    <button 
                        onClick={() => (window.open(email, '_self'))}
                        className="cursor-pointer hover:underline underline-offset-1 decoration-2"
                    >
                        [ CONTACT ] 
                    </button> {' '}
                    <a href='/'>
                        <button 
                            className="cursor-pointer hover:underline underline-offset-1 decoration-2"
                        >
                            [ SIGN OUT ] 
                        </button>
                    </a>
                </div>
            </div>
        </div>
        )
    }

}

export default Signin;