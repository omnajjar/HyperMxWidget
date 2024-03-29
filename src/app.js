import { h, app } from 'hyperapp';

const state = {
	count: 0
};

const actions = {
	down: (value) => (state) => ({ count: state.count - value }),
	up: (value) => (state) => ({ count: state.count + value })
};

const view = (state, actions) => (
	<div>
		<h1 className="text">{state.count}</h1>
		<button onclick={() => actions.down(1)}>-</button>
		<button onclick={() => actions.up(1)}>+</button>
	</div>
);

export default function(mountingDomNode) {
	app(state, actions, view, mountingDomNode);
}
