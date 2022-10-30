import React, { useState, useEffect } from 'react';
import axios from "axios";

export function ApiCallExample() {

	const [loading, setLoading] = useState(false);
	const [apiResult, setApiResult] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((result) => {
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

	if (!loading && apiResult?.species?.name) {
		content = (
			<div>
				<div>---------</div>
				<div>Api Example</div>
				done loading {apiResult.species.name}
				<br />
				<br />
				<br />
				<pre>
					<code>
						{JSON.stringify(apiResult, null, ' ')}
					</code>
				</pre>
				<div>---------</div>
			</div>
		)
	}

	return (
		<div>
			{content}
		</div>
	)
}