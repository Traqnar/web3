import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Peter'
  const age = 10
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Hello name={name} age = {age}/>
          <Footer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old !</p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

export default App;
