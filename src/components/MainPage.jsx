import React from "react";
import Header from "./Header";
import EventListGroup from "./EventListGroup";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "A1",
      eventSchedule: "null",
      eventDescription: "123",
      eventVenue: "Mumbai",
      eventList: [
        {
          eventName: "A1",
          eventSchedule: "null",
          eventDescription: "123",
          eventVenue: "Mumbai",
        },
        {
          eventName: "A2",
          eventSchedule: "null",
          eventDescription: "12345 test",
          eventVenue: "Delhi",
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit(e) {
    // A method that uses .bind(this);
    e.preventDefault();
    //console.log(this);
    const {
      eventName,
      eventSchedule,
      eventVenue,
      eventDescription,
    } = this.state;
    const eventObj = {
      eventName: eventName,
      eventSchedule: eventSchedule,
      eventVenue: eventVenue,
      eventDescription: eventDescription,
    };
    this.setState((prevState) => ({
      eventList: [...prevState.eventList, eventObj],
    }));
    // 1. It first brings in the other eventobjs
    // 2. creates a new array with the new eventObj
    // 3. Updates the state with new array
  }
  handleDeleteEvent = (eventName) => {
    // A method that is in the arrow function format.
    const { eventList } = this.state;
    const newEventList = eventList.filter(
      (event) => event.eventName !== eventName
    );
    console.log(newEventList);
    this.setState((prevState) => ({
      eventList: newEventList,
    }));
  };
  render() {
    const events = this.state.eventList;
    //const { eventList } = this.state; // Object destructing (Benefit of this syntax is you get to avoid writing "this.state" if you have multiple states)
    return (
      <div className="container">
        <Header noOfEventsVal={events.length} />
        <div>
          <button
            type="button"
            className="btn btn-primary m-2"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Create Event
          </button>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Event Details
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                      <label
                        for="eventName"
                        className="col-sm-3 col-form-label"
                      >
                        Event Name:
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="eventName"
                          name="eventName"
                          placeholder="Enter event name"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="eventSchedule"
                        className="col-sm-3 col-form-label"
                      >
                        Date & time:
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="datetime-local"
                          className="form-control"
                          id="eventSchedule"
                          name="eventSchedule"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="eventvenue"
                        className="col-sm-3 col-form-label"
                      >
                        Venue:
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="eventVenue"
                          name="eventVenue"
                          placeholder="Enter event venue"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="eventdescription"
                        className="col-sm-3 col-form-label"
                      >
                        Description:
                      </label>
                      <div className="col-sm-9">
                        <textarea
                          className="form-control"
                          id="eventDescription"
                          name="eventDescription"
                          rows="3"
                          placeholder="Enter event description"
                          onChange={this.onChange}
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success float-right"
                    >
                      Add Event
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <EventListGroup
            deleteEventHandler={this.handleDeleteEvent}
            eventList={events}
          />
        </div>
      </div>
    );
  }
}
