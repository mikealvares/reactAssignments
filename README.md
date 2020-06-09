reactSamples<br />
Assignments based on Udemy course: react-the-complete-guide-incl-redux<br />
https://www.udemy.com/course/react-the-complete-guide-incl-redux<br /><br />

Assignment - 1<br /><br />

Create TWO new components: UserInput and UserOutput<br />
UserInput should hold an input element, UserOutput two paragraphs<br />
Output multiple UserOutput components in the App component (any paragraph texts of your choice)<br />
Pass a username (of your choice) to UserOutput via props and display it there<br />
Add state to the App component (=> the username) and pass the username to the UserOutput component<br />
Add a method to manipulate the state (=> an event-handler method)<br />
Pass the event-handler method reference to the UserInput component and bind it to the input-change event<br />
Ensure that the new input entered by the user overwrites the old username passed to UserOutput<br />
Add two-way-binding to your input (in UserInput) to also display the starting username<br />
Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets<br /><br />

Assignment - 2<br /><br />
Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).<br />
Create a new component (=> ValidationComponent) which receives the text length as a prop<br />
Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)<br />
Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).<br />
Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.<br />
When you click a CharComponent, it should be removed from the entered text.<br />
<strong>Hint: Keep in mind that JavaScript strings are basically arrays!</strong><br /><br />      
