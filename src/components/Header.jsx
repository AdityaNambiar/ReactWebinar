import React from "react";

export default class Header extends React.Component {
  render() {
    const noOfEvents = this.props.noOfEventsVal;
    //const { noOfEventsVal } = this.props;
    // Object destructing (Benefit of this syntax is you get to avoid writing "this.props" or "this.state" if you have multiple props / states)
    return (
      <h5
        className="bg bg-warning"
        style={{ height: "50px", fontSize: "25px" }}
      >
        <span className=" m-2 p-3">Event List</span>
        <span className="badge badge-pill badge-secondary m-2 float-right px-2">
          Total Events:{" "}
          <span className="badge badge-pill badge-light p-1 ">
            {" "}
            { noOfEvents }
          </span>
        </span>
      </h5>
    );
  }
}
