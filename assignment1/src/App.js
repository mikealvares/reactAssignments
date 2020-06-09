import React, { Component } from 'react';
import './App.css';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    username: 'alvamic22'
  }

  changeUserNameHandler = (event) =>{
    this.setState(
      {username: event.target.value}
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Assignment - 1</h1>
        </header>
        <p className="App-intro">
          1. Create TWO new components: UserInput and UserOutput<br />
          2. UserInput should hold an input element, UserOutput two paragraphs<br />
          3. Output multiple UserOutput components in the App component (any paragraph texts of your choice)<br />
          4. Pass a username (of your choice) to UserOutput via props and display it there<br />
          5. Add state to the App component (=> the username) and pass the username to the UserOutput component<br />
          6. Add a method to manipulate the state (=> an event-handler method)<br />
          7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event<br />
          8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput<br />
          9. Add two-way-binding to your input (in UserInput) to also display the starting username<br />
          10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets<br />
        </p>
        <hr />
        <UserInput  change={this.changeUserNameHandler} value={this.state.username}/>
        <UserOutput name={this.state.username} />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
