import React from 'react';
import Node from './Node';

const NodeList = ({ num_nodes }) => {
	// get window height and width (dont want to call window object multiple times)
	var winHeight = window.innerHeight;
	var winWidth = window.innerWidth;
	var sizeOfWindow = Math.min(winHeight, winWidth);

	// set big circle properties
	var centerX = sizeOfWindow/1.5;
    var centerY = sizeOfWindow/3;
    var radius = 150;

	// returns center coordinates for nodes given a specific number of nodes
	function coordinates(num_nodes, cX, cY, rad){
	    var coords = [];

    	for(var i = 0; i<num_nodes ; i++) {
		// multiplied with 1.5PI makes sure the first circle starts at highest point
        	var coordX = cX + Math.cos((2 * Math.PI * i / num_nodes) + (1.5*Math.PI))*rad;
        	var coordY = cY + Math.sin((2 * Math.PI * i / num_nodes) + (1.5*Math.PI))*rad;
        	coords.push({coordX,coordY});
    	}
		return coords;
	}

	var serverCoords = coordinates(num_nodes, centerX, centerY, radius);
	// a list of node tags that is returned fomr this NodeList function
	const list = []
	for (var i=0; i<num_nodes; i++) {
		list.push(<Node key={i+1} 
						centX = {serverCoords[i].coordX} 
						centY = {serverCoords[i].coordY} />)
	}

	return (
		<div>			
			<svg width= {winHeight} height= {winWidth}>
				<circle cx={centerX} cy={centerY} r={radius} fill="#eeeeee" />
				{list}
    		</svg>
		</div>
	);
}

export default NodeList;


	/*// hardcoded centers for 5 circles
	var serverCoords = [{ coordX: 300 , coordY: 100 }, 
						{ coordX: 500 , coordY: 100 },
						{ coordX: 400 , coordY: 100 },
						{ coordX: 200 , coordY: 100 },
						{ coordX: 100 , coordY: 100 }];*/
