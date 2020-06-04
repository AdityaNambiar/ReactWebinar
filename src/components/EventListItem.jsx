import React from 'react';

export default class EventListItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			eventName: ''
		}
		//this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	render() {
		const eventName = this.state.eventName;
		//const { eventName } = this.state; // Object destructing (Benefit of this syntax is you get to avoid writing "this.state" if you have multiple states)
		return(
			<div className="container">
				
			</div>
		);
	}
}