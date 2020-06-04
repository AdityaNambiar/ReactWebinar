import React from 'react';
import Header from './Header';
import '../styles/main.css';
import '../styles/form.css';

export default class MainPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			eventName: '',
			noOfEvents: 0
		}
		//this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event){
		console.log("handleSubmit: ",this.state.noOfEvents);
	}
	saveEventName(event) {
		const eventName = event.target.value;
		this.setState({ eventName })
	}
	render() {
		const noOfEvents = this.state.noOfEvents;
		//const { noOfEvents } = this.state; // Object destructing (Benefit of this syntax is you get to avoid writing "this.state" if you have multiple states)
		return(
			<div className="container">
				<Header noOfEventsVal={ noOfEvents }/>
				<hr style={{
						width: '85%',
						margin: '0px auto'
					}}
				/>
				<form 
					className="form-control"
					onSubmit={this.handleSubmit}
				>
					<input type="text" placeholder="Enter an event name..." onChange={ (event) => this.saveEventName(event) } />
					<input type="submit" value="Add a new event"/>
				</form>
			</div>
		);
	}
}