import React from 'react';

interface ButtonProps {
    onClick:()=>void;
    children?:Element;
}

export function Button(props:ButtonProps){
    return (
        <button className='btn btn-outline' onClick={props.onClick}>
            {props.children}
        </button>
    )
}