import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ComponentSampleProps } from './SharedInterfaces';


export function ComponentWithLocalState(props:ComponentSampleProps) {
    const [count, setCount] = useState(props.initialCount);

    useEffect(() => {
        //do stuff to syncronize state
    }, []);

    return (
        <div>
            <div>---------</div>
            <div>React Local State Example</div>
            <div className="text-4xl">{props.text}</div>
            <div className="py-4 text-3xl">{count}</div>
            <Button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click Here To Increment The Count
            </Button>
			<div>---------</div>
        </div>
    );
}