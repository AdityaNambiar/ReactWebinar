import React from 'react';
import '../styles/main.css';
import '../styles/header.css';

export default class Header extends React.Component{
	constructor(props){
		super(props);
		//console.log(props);
		const { noOfEventsVal } = this.props;
		this.state = {
			noOfEvents: noOfEventsVal 
		}
	}

	render() {
		const noOfEvents = this.state.noOfEvents;
		//const { noOfEvents } = this.state; // Object destructing (Benefit of this syntax is you get to avoid writing "this.state" if you have multiple states)
		return(
			<header>
				<nav className="nav">
					<span>React Webinar Demo</span>
					<span>{ noOfEvents }</span>
				</nav>
			</header>
		);
	}
}