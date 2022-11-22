import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Routing from './Routing';



function App() {
  return (
    <div className="App">
      <Nav />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
