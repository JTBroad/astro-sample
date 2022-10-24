import React from 'react';
import { signal } from "@preact/signals-react";
import Button from './Button';

export class ComponentWithSignalsRenderStore {
    count = signal(0);

    increment = () => {
        this.count.value = this.count.value + 1;
    };

    render = (props: { text: string }) => {

        return (
            <div>
                <div className="text-4xl">{props.text}</div>
                <div className="py-4 text-3xl">{this.count.value}</div>
                <Button
                    onClick={() => {
                        this.increment();
                    }}
                >
                    Click Here To Increment The Count
                </Button>
            </div>
        );
    };
}