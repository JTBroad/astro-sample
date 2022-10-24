import React, { useState, useEffect } from "react";
import { ComponentWithLocalState } from "../components/react/ComponentWithLocalState";
import { ComponentWithPreactSignalsState } from "../components/react/ComponentWithPreactSignalsState";
import { ComponentWithSignalsRenderStore } from "../components/react/ComponentWithSignalsRenderStore";
import { ApiCallExample } from "../components/react/ApiCallExample";

const countStoreOne = new ComponentWithSignalsRenderStore();

export default function App() {

	let [countStoreTwo] = useState(new ComponentWithSignalsRenderStore());

	return (
		<div
			className="w-full h-full p-4 absolute top-0 left-0 overflow-y-auto"
			data-theme="business"
		>
			<ComponentWithLocalState
				initialCount={5}
				text="Hello there General Kenobi."
			/>

			<br />

			<ComponentWithPreactSignalsState
				initialCount={15}
				text="Hello there General Kenobi."
			/>

			<br />

			<countStoreOne.render text="Hello there General Kenobi. (One)" />

			<br />

			<countStoreTwo.render text="Hello there General Kenobi. (Two)" />

			<br />

			{/* mobx example */}

			<br />

			{/* mobx renderstore example */}

			<br />

			<ApiCallExample />

		</div>
	);
}
