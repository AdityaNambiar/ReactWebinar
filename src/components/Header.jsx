import React from 'react';
import '../styles/main.css';
import '../styles/header.css';

export default class Header extends React.Component{
	render() {
		const { noOfEventsVal } = this.props;
		//const { noOfEvents } = this.state; // Object destructing (Benefit of this syntax is you get to avoid writing "this.state" if you have multiple states)
		return(
			<header>
				<nav className="nav">
					<span>React Webinar Demo</span>
					<span>{ noOfEventsVal } events listed</span>
				</nav>
			</header>
		);
	}
}