import React, { useState } from "react";
import { ComponentWithLocalState } from "~/components/react/ComponentWithLocalState";
import { ComponentWithPreactSignalsState } from "~/components/react/ComponentWithPreactSignalsState";
import { ComponentWithSignalsRenderStore } from "~/components/react/ComponentWithSignalsRenderStore";
import { ComponentWithMobxState } from "~/components/react/ComponentWithMobxState";
import { ComponentWithMobxRenderStore } from "~/components/react/ComponentWithMobxRenderStore";
import { ApiCallExample } from "~/components/react/ApiCallExample";

const countStoreOne = new ComponentWithSignalsRenderStore();
const countStoreMobx = new ComponentWithMobxRenderStore();

export default function AppIsland() {

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

			<ComponentWithMobxState
				initialCount={0}
				text="Hello there General Kenobi."
			/>

			<br />

			<countStoreMobx.render text="Hello there General Kenobi. (Two)" />

			<br />

			<ApiCallExample />

		</div>
	);
}
