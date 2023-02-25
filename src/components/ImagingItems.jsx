import React from 'react';

function LoginItem ({alt, imgRef}){

    return(
        <>
            <img 
                src={imgRef} 
                alt={alt} 
                className=''
            />
        </>
    )
}

export default LoginItem