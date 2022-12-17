import React from 'react';

interface ButtonProps {
    onClick:()=>void;
    children?:JSX.Element | JSX.Element[] | string;
}

export default function Button(props:ButtonProps){

    function onClick(){
        //code to click the button
        console.log('Button was clicked');
        //forward onto the props onClick function
        props.onClick();
    }

    return (
        <button className='btn btn-outline' onClick={onClick}>
            {props.children}
        </button>
    )
}