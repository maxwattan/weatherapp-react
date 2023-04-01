import Nav from './Components/Nav';
import Container from "./Components/Container"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
     <main>
        <Container />
     </main>
      
    </div>
  );
}

export default App;
