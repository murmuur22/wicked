import React,  { useEffect, useState, useRef } from 'react';

function CursorParticle(props) {
    let x = props.x;
    let y = props.y
    const particle = useRef(null);

    const moveParticle = () => {
        particle.current.style.transform = `translate(${x}px, ${y}px)`;
        particle.current.x = x;
        particle.current.y = y;
    }

    moveParticle()

    return (
        <>
            <div ref={particle} id='trailer' />
        </>
    )
}

        


export default CursorParticle;