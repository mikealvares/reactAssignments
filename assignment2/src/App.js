import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {
  
  state = {
    inputText : ''
  }

  inputChangeHandler = (event) => {
    this.setState({
      inputText : event.target.value
    })
  }

  deleteCharHandler = (index) =>{
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({inputText: updatedText})
  }

  render() {
    const charList = this.state.inputText.split('').map((ch, index) => {
      return <CharComponent 
        value={ch} 
        key={index}
        click={() => this.deleteCharHandler(index)} />;
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Assignment - 1</h1>
        </header>
        <p className="App-intro">
          1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).<br />
          2. Create a new component (=> ValidationComponent) which receives the text length as a prop<br />
          3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)<br />
          4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).<br />
          5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.<br />
          6. When you click a CharComponent, it should be removed from the entered text.<br />
          <strong>Hint: Keep in mind that JavaScript strings are basically arrays!</strong>          
        </p>
        <hr />
        <div className="content">
          <input type="text" value={this.state.inputText} onChange={this.inputChangeHandler}/><br />
          <ValidationComponent value={this.state.inputText.length}/>
        </div>
        <hr />
        {charList}
      </div>
    );
  }
}

export default App;
