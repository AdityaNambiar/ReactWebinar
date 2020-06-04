import React from 'react';
import EventListItem from './EventListItem';

export default EventListGroup = (props) {
	const { eventNameVal, eventList } = this.props;
	return(
		<div>
			{ 
			  eventList.map((ev) => {
				<EventListItem eventName={ eventNameVal } />
			  })
			}
		</div>
	)
}