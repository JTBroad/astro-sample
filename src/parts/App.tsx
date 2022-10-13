import React from 'react';
import { signal } from '@preact/signals-react';
import { Button } from '../components/react/Button';
import { CountStore } from '../models/CountStore';

const store = new CountStore();

export function App(){
    return (
        <div className='w-full h-full p-4 absolute top-0 left-0' data-theme='business'>
            <div className='text-4xl'>Hello there General Kenobi.</div>
            <div className='py-4 text-3xl'>
                { store.count }
            </div>
            <Button onClick={()=>{
                store.increment()
            }}>
                Click Here To Increment The Count
            </Button>
        </div>
    )
}