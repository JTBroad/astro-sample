import React, { useState, useEffect } from "react";
import Button from "../components/react/Button";
import { signal, useSignal } from "@preact/signals-react";
import axios from "axios";

interface ReactComponentSampleProps {
  initialCount: number;
  text: string;
}


function ReactComponentWithLocalState(props) {
  const [count, setCount] = useState(props.initialCount);

  useEffect(() => {
    //do stuff to syncronize state
  }, []);

  return (
    <div>
      <div className="text-4xl">{props.text}</div>
      <div className="py-4 text-3xl">{count}</div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Here To Increment The Count
      </Button>
    </div>
  );
}




const globalCount = signal(0);

function ReactComponentWithPreactSignalsState(props) {
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



export class CountRenderStore {
  count = signal(0);

  increment = () => {
    this.count.value = this.count.value + 1;
  };

  render = (props: {text:string}) => {

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


function ApiCallExample(){
	
	const [ loading, setLoading ] = useState(false);
	const [ apiResult, setApiResult ] = useState(null);

	useEffect(()=>{
		setLoading(false);
		axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((result)=>{
			console.log(result);
			const data = result.data;
			delete data.game_indices;
			delete data.held_items;
			delete data.moves;
			setApiResult(data);
			setLoading(false);
		})	
	}, [])

	let content = <div>Loading...</div>

	if(!loading && apiResult?.species?.name){
		content = (
			<div>
				done loading {apiResult.species.name}
				<br/>
				<br/>
				<br/>
				<pre>
					<code>
						{ JSON.stringify(apiResult, null, ' ') }
					</code>
				</pre>
			</div>
		)
	}

	return (
		<div>
			{content}
		</div>
	)
}


/////////////////////////////////////////


const countRenderStore = new CountRenderStore();

export default function App() {
  return (
    <div
      className="w-full h-full p-4 absolute top-0 left-0 overflow-y-auto"
      data-theme="business"
    >
      <ReactComponentWithLocalState
        initialCount={5}
        text="Hello there General Kenobi."
      />

      <br />

      <ReactComponentWithPreactSignalsState
        initialCount={15}
        text="Hello there General Kenobi."
      />

	  <br/>

	  <countRenderStore.render text="Hello there General Kenobi." />

	  <br />
	  
	  <ApiCallExample />

    </div>
  );
}
