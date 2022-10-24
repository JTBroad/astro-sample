import React, { useState, useEffect } from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import Button from './Button';
import { ComponentSampleProps } from './SharedInterfaces';


class Store {
    count:number = 0;

    incrementCount = (newValue:number)=>{
        this.count++;
    }

    constructor(){
        makeAutoObservable(this);
    }
}

export const ComponentWithMobxState = observer((props:ComponentSampleProps) => {
    const [store] = useState(new Store());

    return (
        <div>
            <div>---------</div>
            <div>Mobx Example</div>
            <div className="text-4xl">{props.text}</div>
            <div className="py-4 text-3xl">{store.count}</div>
            <Button
                onClick={store.incrementCount}
            >
                Click Here To Increment The Count
            </Button>
            <div>---------</div>
        </div>
    );
});

