import React, { useEffect } from 'react';
import { signal, useSignal } from "@preact/signals-react";
import { ComponentSampleProps } from './SharedInterfaces';
import Button from './Button';


const globalCount = signal(0);

export function ComponentWithPreactSignalsState(props: ComponentSampleProps) {
    const count = useSignal(props.initialCount);

    useEffect(() => {
        //do stuff to syncronize state
    }, []);

    return (
        <div>
            <div className="text-4xl">{props.text}</div>
            <div className="py-4 text-3xl">
                Local: {count.value} - Global: {globalCount.value}
            </div>
            <Button
                onClick={() => {
                    count.value = count.value + 1;
                    globalCount.value = globalCount.value + 1;
                }}
            >
                Click Here To Increment The Count
            </Button>
        </div>
    );
}