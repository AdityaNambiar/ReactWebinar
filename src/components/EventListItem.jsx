import React from 'react';
import '../styles/eventlisting.css';

// Stateless component
export default class EventListItem extends React.Component {
	render() {
		const eventName = this.props.eventName;
		const { deleteEventHandler } = this.props;
		//const { eventName } = this.state; // Object destructing (Benefit of this syntax is you get to avoid writing "this.state" if you have multiple states)
		return(
			<div className="itemCont">
			  <span>{ eventName }</span>
			  <span onClick={() => deleteEventHandler(eventName)}>&#x2715;</span>
			</div>
		);
	}
}