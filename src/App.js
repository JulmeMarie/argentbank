import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Routing from './Routing';

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from './redux/reducer';
import UserService from './services/UserService';

function App(props) {

  /**
   * To avoid losing the user when refresh (with the browser)
   */
  if (!props.token) {
    let service = new UserService();
    props.setToken(service.getTokenFromBrowser());
  }

  return (
    <div className="App">
      <Nav />
      <Routing />
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
