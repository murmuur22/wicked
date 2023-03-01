import React,  { useEffect, useState, useRef } from 'react';

function CursorTrail() {
    const trailer = useRef(null)

    window.onmousemove = (e) => { 

        const x = e.clientX - trailer.current.offsetWidth / 2, 
              y = e.clientY - trailer.current.offsetHeight / 2;

        trailer.current.style.transform = `translate(${x}px, ${y}px)`;
    }

    return (
        <>
            <div className='w-full h-full absolute z-[-1]' id='bkg' />
            <div ref={trailer} id='trailer' />
        </>
    )



}

        


export default CursorTrail;