import React from 'react';
import { siteVersion, email, resume, logoRef } from '../data/sitevalues';
import Profiles from './Profiles';


class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            currentView : "welcome",
        };
    }

    renderSwitch = () => {
        switch(this.state.currentView){
            case "welcome":
                return(
                    <>
                    <div className="absolute inset-0 flex items-center justify-center flex-col text-center py-20">
                        <img 
                            src={logoRef}
                            alt='wicked logo'
                            className='w-48'
                        />
                        <h1 className="text-7xl pb-0 mb-0 font-bold">wicked</h1>
                        <h1 className="text-7xl pt-0 mb-3 font-light">.earth</h1>
                        <p className="text-sm mb-3 font-terminal">
                            <span>{siteVersion}</span> <span>by robbie dyson</span>
                        </p>
                        <p className='text-2xl font-display'>
                        <span className='animate-blink pr-4'>&gt;</span>
                            <button 
                                onClick={() => this.setState({ currentView: "select" })}
                                className="cursor-pointer hover:underline underline-offset-1 decoration-2"
                            >
                                SIGN IN
                            </button>
                        <span className='animate-blink pl-4'>&lt;</span>
                        
                        </p>
                    </div>
                    </>
                );
            case "select":
                return(
                    <>
                        <div>
                            <div className='inset-0 flex flex-col items-center justify-center absolute gap-12 md:gap-20 lg:gap-24'>
                                <Profiles />
                                <div className='flex flex-col gap-2'>
                                    <button
                                        onClick={() => this.setState({ currentView: "admin" })}
                                        className='cursor-pointer transition duration-300 hover:scale-125 group border-black border-2 rounded-full'
                                    >
                                    <p className='px-4 py-1 font-body text-sm'>administrator</p>
                                    </button>
                                    <button
                                        onClick={() => this.setState({ currentView: "other" })}
                                        className='cursor-pointer transition duration-300 hover:scale-125 group border-black border-2 rounded-full'
                                    >
                                    <p className='px-3 py-1 font-body text-sm'>other...</p>
                                    </button>
                                </div>
                            </div>
                            <div className='text-lg md:text-xl font-display'>
                                <div className='flex items-center justify-center flex-col text-center'>
                                    <p className="fixed left-2 lg:inset-x-0 bottom-0 text-sm mb-3 font-terminal">
                                        <span>{siteVersion}</span> <span>by robbie dyson</span>
                                    </p>
                                </div>
                                <div className='fixed bottom-2 left-2'>

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
                                        onClick={() => this.setState({ currentView: "welcome" })}
                                        className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-end"
                                    >
                                        [ BACK ] 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case "admin":
                return (
                    <>
                        <div>
                            <form className='font-body text-xl flex flex-col inset-0 items-center justify-center absolute'>
                                <label className='flex flex-col md:flex-row gap-2'>
                                    <span>password</span>
                                    <input 
                                        type = "password"
                                        className='
                                            border-2 border-r-white border-t-white border-b-black border-l-black px-2
                                            focus:outline-none
                                            '
                                        placeholder="enter password"
                                    />
                                </label>
                            </form>
                            <div className='text-lg md:text-xl font-display'>
                                <div className='flex items-center justify-center flex-col text-center'>
                                    <p className="fixed left-2 lg:inset-x-0 bottom-0 text-sm mb-3 font-terminal">
                                        <span>{siteVersion}</span> <span>by robbie dyson</span>
                                    </p>
                                </div>
                                <div className='fixed bottom-2 left-2'>

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
                                        onClick={() => this.setState({ currentView: "select" })}
                                        className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-end"
                                    >
                                        [ BACK ] 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case "other":
                return (
                    <>
                        <div>
                            <form className='
                                inset-0 flex flex-col items-center justify-center absolute gap-6
                                font-body text-xl
                                '
                            >
                                <label className='flex flex-col md:flex-row gap-2'>
                                    <span>username</span>
                                    <input 
                                        type = "text"
                                        className='
                                            border-2 border-r-white border-t-white border-b-black border-l-black px-2
                                            focus:outline-none
                                            '
                                        placeholder="enter username"
                                    />
                                </label>
                                <label className='flex flex-col md:flex-row gap-2 md:ml-1'>
                                    <span>password</span>
                                    <input 
                                        type = "password"
                                        className='
                                            border-2 border-r-white border-t-white border-b-black border-l-black px-2
                                            focus:outline-none
                                            '
                                        placeholder="enter password"
                                    />
                                </label>
                            </form>
                            <div className='text-lg md:text-xl font-display'>
                                <div className='flex items-center justify-center flex-col text-center'>
                                    <p className="fixed left-2 lg:inset-x-0 bottom-0 text-sm mb-3 font-terminal">
                                        <span>{siteVersion}</span> <span>by robbie dyson</span>
                                    </p>
                                </div>
                                <div className='fixed bottom-2 left-2'>

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
                                        onClick={() => this.setState({ currentView: "select" })}
                                        className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-end"
                                    >
                                        [ BACK ] 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                );
    
        }
    }

    render() {
        return (
            <>
                {this.renderSwitch()}
            </>
        );
    }
}

export default Signin;