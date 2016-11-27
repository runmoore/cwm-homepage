import React, { Component } from 'react';

import './Links.css';


class Links extends Component {

	constructor(props){
		super(props);
		this.socialMedia = [{
			name: "Twitter",
			link: "https://twitter.com/runmoore",
			label: "T"
		},
		{
			name: "Instagram",
			link: "https://www.instagram.com/runmoore",
			label: "I"
		},
		{
			name: "LinkedIn",
			link: "https://uk.linkedin.com/in/christopherwesleymoore",
			label: "L"
		},
		];
		
	}

    render(){
    	var links = [];
    	for (var i = 0; i< this.socialMedia.length; i++){
    		links.push(
    			<a key={i} href={this.socialMedia[i].link}>
    				{this.socialMedia[i].label}
    			</a>
    			
    		);
    	}

        return (
            <div id="links">
           		{ links }
            </div>
        )
    }
}

export default Links;