import React from "react";
import EventListItem from './EventListItem';

function EventListGroup(props) {
  const { eventList, deleteEventHandler } = props;
  return (
    <div>
      {
      	eventList.length === 0 ? (
	        <div className="card">
	          <div className="card-header bg bg-danger text-white">
	            Oops! No event found.
	          </div>
	          <div className="card-body bg bg-dark text-white">
	            <p>Please click "Create Event" button above to add an event!</p>
	          </div>
	        </div>
      	) : (
	        eventList.map((ev, index) => (
	          <div className="row mt-2">
	            <EventListItem
	              key={index}
	              deleteEventHandler={deleteEventHandler}
	              eventList={ev}
	            />
	          </div>
	        ))
      	)
      }
    </div>
  );
}

/*class EventListItem extends React.Component {
  render() {
    const { eventList, deleteEventHandler } = this.props;
    const { eventName, eventSchedule, eventVenue, eventDescription } = eventList;
    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{ eventName }</h5>
            <span className="col-sm-6" onClick={() => deleteEventHandler(eventName)}>&#x2715;</span>
            <div className="card-text">
              <p>Date and time: { eventSchedule }</p>
              <p>Venue: { eventVenue }</p>
              <p>Description: { eventDescription }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}*/ 

export default EventListGroup;
