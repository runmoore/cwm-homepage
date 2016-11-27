import React, { Component } from 'react';
import './Links.css';

class Links extends Component {

	constructor(props){
		super(props);
		this.links = [{
			name: "twitter",
			link: "https://twitter.com/runmoore",
		},
		{
			name: "instagram",
			link: "https://www.instagram.com/runmoore",
		},
		{
			name: "linkedin",
			link: "https://uk.linkedin.com/in/christopherwesleymoore",
		},
		{
			name: "github",
			link: "https://github.com/runmoore",
		},
		];
		
	}

    render(){
    	var links = [];
    	for (var i = 0; i< this.links.length; i++){
    		links.push(
    			<a key={i} className={this.links[i].name} href={this.links[i].link} target="_blank"></a>
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