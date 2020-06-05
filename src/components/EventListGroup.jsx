import React from 'react';
import EventListItem from './EventListItem';

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

export default EventListGroup;
