import React, { useState, useEffect } from "react";
import { Button } from "../components/react/Button";
import { CountStore } from "../models/CountStore";
import { signal } from "@preact/signals-react";

const store = new CountStore();



interface ReactComponentWithLocalStateProps {
	initialCount:number,
	text:string
}

function ReactComponentWithLocalState(props) {

	const [ count, setCount ] = useState(props.initialCount);

	useEffect(()=>{
		//do stuff to syncronize state

	}, [])

	return (
		<div>
			<div className="text-4xl">{props.text}</div>
			<div className="py-4 text-3xl">{count}</div>
			<Button
				onClick={() => {
					setCount(count+1);
				}}
			>
				Click Here To Increment The Count
			</Button>
		</div>
	)
}


function ReactComponentWithPreactSignalsState(props) {

	const count = signal(0);

	useEffect(()=>{
		//do stuff to syncronize state

	}, [])

	return (
		<div>
			<div className="text-4xl">{props.text}</div>
			<div className="py-4 text-3xl">{count.value}</div>
			<Button
				onClick={() => {
					count.value = count.value + 1;
				}}
			>
				Click Here To Increment The Count
			</Button>
		</div>
	)
}


export function App() {
	return (
		<div
			className="w-full h-full p-4 absolute top-0 left-0"
			data-theme="business"
		>
			<ReactComponentWithLocalState 
				initialCount={5}
				text='Hello there General Kenobi.' 
			/>

			<br/>

			<ReactComponentWithPreactSignalsState
				initialCount={15}
				text='Hello there General Kenobi.' 
			/>
			
		</div>
	);
}