import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import "bootswatch/dist/flatly/bootstrap.min.css";

function App() {

  //TODO: eventually have authentication in here

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isUser={true}/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;


