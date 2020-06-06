import React from 'react';
import Header from './Header';
import EventListGroup from './EventListGroup';
import '../styles/main.css';
import '../styles/form.css';
//import puzzle from '../assets/puzzle.png';

//console.log(puzzle);

/* An example of using images: */
// const bgstyle = {
// 	backgroundImage: `url('${puzzle}')`,
// 	backgroundRepeat: 'repeat'
// }
export default class MainPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			eventName: '',
			eventList: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	saveEventName(event) {
		const eventName = event.target.value;
		//console.log(this);
		this.setState({ eventName })	
	}
	handleDeleteEvent = (eventName) => { // A method that is in the arrow function format.
		const { eventList } = this.state;
		const newEventList = eventList.filter( event => event.eventName !== eventName )
		console.log(newEventList);
		this.setState((prevState) => ({ 
			eventList: newEventList
		}));
	}
	handleSubmit(event){ // A method that uses .bind(this);
		event.preventDefault();
		//console.log(this);
		const { eventName }= this.state;
		const eventObj = {
			eventName: eventName
		}
		this.setState((prevState) => ({ 
				eventList: [...prevState.eventList, eventObj]
		}));
		// 1. It first brings in the other eventobjs
		// 2. creates a new array with the new eventObj
		// 3. Updates the state with new array
	}
	render() {
		const events = this.state.eventList;
		//const { noOfEvents, events } = this.state; // Object destructing (Benefit of this syntax is you get to avoid writing "this.state" if you have multiple states)
		return(
			//<div className="container" style={ bgstyle }> { /* If you want to try out the background image example uncomment this by remove /* * / and curly braces */ } 
			<div className="container" >
				<Header noOfEventsVal={ events.length }/>
				<hr style={{
						width: '85%',
						margin: '0px auto'
					}}
				/>
				<form 
					className="form-control"
					onSubmit={this.handleSubmit}
				>
					<input type="text" placeholder="Enter an event name..." onChange={(event) => this.saveEventName(event)}/>
					<input type="submit" style={{
						backgroundColor: 'lightgreen',
						fontWeight: 'bold'
					}} value="Add a new event"/>
				</form>
				<EventListGroup deleteEventHandler={this.handleDeleteEvent} eventList={ events }/>
			</div>
		);
	}
}
