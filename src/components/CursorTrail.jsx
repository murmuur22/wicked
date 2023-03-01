import React,  { useEffect, useState, useRef } from 'react';

function CursorTrail() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        window.onmousemove = (e) => { 
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }
    });

    console.log(mousePosition)


    return (
        <>
            <div className='w-full h-full absolute bg-yellow-400' id='bkg' />
            <div id='trailer' />
        </>
    )



}

        


export default CursorTrail;