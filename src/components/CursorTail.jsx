import React,  { useEffect, useState, useRef } from 'react';
import CursorParticle from './CursorParticle';

function CursorTrail(props) {
    const trailer = Array(props.length).fill('');
    const coords = {x: 0, y: 0};

    const particle = useRef(null);

    const moveParticle = (x, y) => {
        particle.current.style.transform = `translate(${x}px, ${y}px)`;
        particle.current.x = x;
        particle.current.y = y;
    }

    window.onmousemove = (e) => { 

        coords.x = e.clientX;
        coords.y = e.clientY;

        moveParticle(coords.x, coords.y)

    }


    return (
        <>
            <div className='w-full h-full absolute z-[-1]' id='bkg' />
            <div ref={particle} id='trailer' />
        </>
    )
}

        
export default CursorTrail;