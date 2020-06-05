import React from 'react';
//import EventListItem from './EventListItem';
import '../styles/eventlisting.css';

const divStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	flexDirection: 'column',
	border: '0.5em inset skyblue',
	backgroundColor: 'skyblue'
}
const h3Style = {
	fontWeight: 'lighter',
	fontSize: '2em',
	padding: '2.5em'
}
function EventListGroup(props){
	const { eventList, deleteEventHandler } = props;
	return(
		<div style={ divStyle } >
			{
			  eventList.length === 0?
			  <h3 style={ h3Style }>No events generated</h3>:
			  eventList.map((ev, index) => 
					<EventListItem key={index} deleteEventHandler={deleteEventHandler} eventName={ ev.eventName } />
			  )
			}
		</div>
	);
}

class EventListItem extends React.Component {
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

export default EventListGroup;
