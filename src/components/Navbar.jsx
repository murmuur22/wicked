import React, { useState, useRef } from 'react';
import { siteVersion, email, resume, logoRef } from '../data/sitevalues';


function Navbar(props){
    
    const left = useRef([])
    const right = useRef([])
    const byLine = useRef(true)
    const key = useRef('')

    if (typeof props.left !== 'undefined') {left.current = props.left}
    if (typeof props.right !== 'undefined') {right.current = props.right}
    if (typeof props.byLine !== 'undefined') {byLine.current = props.byLine}
    if (typeof props.key !== 'undefined') {key.current = props.key}

    const getEventHandler = (event) => {
        switch(event){
            case 'instagram': // opens my instagram in a new window
                return (
                    () => (window.open('https://www.instagram.com/murmuur_', '_blank'))
                );
            case 'youtube': // opens my youtube channel in a new window
                return (
                    () => (window.open('https://www.youtube.com/@murmuur_', '_blank'))
                );
            case 'resume': // opens resume as pdf in new window
                return (
                    () => (window.open(resume, '_blank'))
                );
            case 'contact': // opens email client set to email me
                return (
                        () => (window.open(email, '_self'))
                    );
            case 'signout': // goes back to the start of the app
                return (
                    () => (window.open('/', '_self'))
                );
        }

        return (
            event
        );

    }

    const renderByLine = () => {
        if (byLine.current == true){
            return(
                <div className='flex items-center justify-center flex-col text-center'>
                    <p className="fixed left-2 lg:inset-x-0 bottom-0 text-sm mb-3 font-terminal">
                        <span>{siteVersion}</span> <span>by robbie dyson</span>
                    </p>
                </div>
            )
        }
    }

    const renderNavbar = () => {
        return (
            <div className='text-lg md:text-xl font-display' key={key}>
                {renderByLine()}
                <div className='fixed flex flex-col md:flex-row bottom-2 left-2 md:gap-1'>
                    {left.current.map(button => (
                        <button
                            onClick={getEventHandler(button.event)}
                            className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-start"
                        >
                            [ {button.name} ] 
                        </button>
                    ))}
                </div>
                
                <div className='fixed flex flex-col md:flex-row bottom-2 right-2 md:gap-1'>
                    {right.current.map(button => (
                        <button
                            onClick={getEventHandler(button.event)}
                            className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-end"
                        >
                            [ {button.name} ] 
                        </button>
                    ))}
                </div>
            </div>
        )    
    }

    return (
        <>
            {renderNavbar()}
        </>
    )
    
}

export default Navbar