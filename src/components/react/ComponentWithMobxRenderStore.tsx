import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import Button from './Button';

export class ComponentWithMobxRenderStore {
    count:number = 0;

    constructor(){
        makeAutoObservable(this);
    }

    increment = () => {
        this.count++;
    };

    render = observer((props: { text: string }) => {

        return (
            <div>
                <div>---------</div>
                <div>RenderStore pattern with Mobx Example</div>
                <div className="text-4xl">{props.text}</div>
                <div className="py-4 text-3xl">{this.count}</div>
                <Button
                    onClick={() => {
                        this.increment();
                    }}
                >
                    Click Here To Increment The Count
                </Button>
                <div>---------</div>
            </div>
        );
    });
}
