import React from 'react';
import { siteVersion, email, resume, logoRef } from '../data/sitevalues';
import Profiles from './Profiles';


class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            dismissed : false,
        };
      }

    handleSignin = () => {
        console.log('signing in');
        this.setState({ dismissed: !this.state.dismissed })
    }

    render() {
        return (
        <>
            {this.state.dismissed ? (
                <div>
                    <Profiles />
                    <div className='text-sm md:text-lg lg:text-xl font-display'>
                        <div className='invisible lg:visible flex items-center justify-center flex-col text-center'>
                            <p className="fixed inset-x-0 bottom-0 text-xs md:text-sm mb-3 font-terminal">
                                <span>{siteVersion}</span> <span>by robbie dyson</span>
                            </p>
                        </div>
                        <div className='fixed bottom-2 left-2'>
                            {/* <button 
                                className="cursor-pointer hover:underline underline-offset-1 decoration-2"
                            >
                                [ DARK MODE ] 
                            </button> */}
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
                            <button 
                                onClick={this.handleSignin}
                                className="cursor-pointer hover:underline underline-offset-1 decoration-2"
                            >
                                [ BACK ] 
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center py-20">
                <img 
                    src={logoRef}
                    alt='wicked logo'
                    className='w-24 md:w-48'
                />
                <h1 className="text-4xl md:text-7xl pb-0 mb-0 md:mb-0 font-bold">wicked</h1>
                <h1 className="text-4xl md:text-7xl pt-0 mb-1 md:mb-3 font-light">.earth</h1>
                <p className="text-xs md:text-sm mb-3 font-terminal">
                    <span>{siteVersion}</span> <span>by robbie dyson</span>
                </p>
                <p className='text-base md:text-2xl font-display'>
                <span className='animate-blink'>&gt;</span>{' '}
                    <button 
                        onClick={this.handleSignin}
                        className="cursor-pointer hover:underline underline-offset-1 decoration-2"
                    >
                        SIGN IN
                    </button>
                {' '}<span className='animate-blink'>&lt;</span>
                
                </p>
            </div>
            )
            }
        </>
        )
    }

}

export default Signin;