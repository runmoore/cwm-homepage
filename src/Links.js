import React, { Component } from 'react';
import './Links.css';

class Links extends Component {

	constructor(props){
		super(props);
		this.links = [{
			name: "fa fa-twitter",
			link: "https://twitter.com/runmoore",
		},
		{
			name: "fa fa-instagram",
			link: "https://www.instagram.com/runmoore",
		},
		{
			name: "fa fa-linkedin-square",
			link: "https://uk.linkedin.com/in/christopherwesleymoore",
		},
		{
			name: "fa fa-github",
			link: "https://github.com/runmoore",
		},
		{
			name: "fa fa-stack-overflow",
			link: "http://stackoverflow.com/users/6806381/christopher-moore",
		},
		];
		
	}

    render(){
    	var links = [];
    	this.links.forEach((link, i) =>     	
    		links.push(
    			<a key={i} className={link.name}  href={link.link} target="_blank" aria-hidden="true" ></a>
    		));

        return (
            <div id="links">
           		{ links }
            </div>
        )
    }
}

export default Links;