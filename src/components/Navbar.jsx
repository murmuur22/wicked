import React from 'react';
import { siteVersion, email, resume, logoRef } from '../data/sitevalues';


class Navbar extends React.Component{
    constructor(props) {
        super(props);

        (typeof props.left !== 'undefined') ? (this.left = props.left):(this.left = []);
        (typeof props.right !== 'undefined') ? (this.right = props.right):(this.right = []);
        (typeof props.byLine !== 'undefined') ? (this.byLine = props.byLine):(this.byLine = true);
        (typeof props.key !== 'undefined') ? (this.key = props.key):(this.key = '');


 
    }

    getEventHandler = (event) => {
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

    renderByLine = () => {
        console.log(this.byLine)
        if (this.byLine == true){
            return(
                <div className='flex items-center justify-center flex-col text-center'>
                    <p className="fixed left-2 lg:inset-x-0 bottom-0 text-sm mb-3 font-terminal">
                        <span>{siteVersion}</span> <span>by robbie dyson</span>
                    </p>
                </div>
            )
        }
        else {
            return(
                <>
                    
                </>
            )
        }
    }

    renderNavbar = () => {

        return (
            <div className='text-lg md:text-xl font-display' key={this.key}>
                {this.renderByLine()}
                <div className='fixed bottom-2 left-2'>
                    {this.left.map(button => (
                        <button
                            onClick={this.getEventHandler(button.event)}
                            className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-end"
                        >
                            [ {button.name} ] 
                        </button>
                    ))}
                </div>
                
                <div className='fixed flex flex-col md:flex-row bottom-2 right-2 md:gap-1'>
                    {this.right.map(button => (
                        <button
                            onClick={this.getEventHandler(button.event)}
                            className="cursor-pointer hover:underline underline-offset-1 decoration-2 text-end"
                        >
                            [ {button.name} ] 
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    render() {
        return ( 
            <>
                {this.renderNavbar()}
            </>

        )
    }
}

export default Navbar