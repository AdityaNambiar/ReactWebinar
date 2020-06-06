import React from "react";

// Stateless component
export default class EventListItem extends React.Component {
  render() {
    const { eventList, deleteEventHandler } = this.props;
    const { eventName, eventSchedule, eventVenue, eventDescription } = eventList;
    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-header m-1 row justify-content-between">
            <h5 className="card-title">{ eventName }</h5>
            <span className="text-dark" onClick={() => deleteEventHandler(eventName)}>&#x2715;</span>
          </div>
          <div className="card-body bg bg-dark">
            <div className="card-text text-white">
              <p>Date and time: { eventSchedule }</p>
              <p>Venue: { eventVenue }</p>
              <p>Description: { eventDescription }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
