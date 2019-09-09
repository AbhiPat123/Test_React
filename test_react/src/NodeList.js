import React from 'react';
import Node from './Node';

const NodeList = ({ num_nodes }) => {

	// do computations here to get the centers of Node
	// for now it just uses iterator i in the for loop
	
	const list = []
	for (var i=1; i<=num_nodes; i++) {
		console.log(i);
		list.push(<Node key={i} centX = {100*i} centY = {100*i} />)
	}

	return (
		<div>
			{list}
		</div>
	);
}

export default NodeList;

