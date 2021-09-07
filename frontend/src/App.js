import './App.css';
import {Module0} from './module0/Module0'
import {Module1} from './module1/Module1'
import {LeftNav} from "./left navigation bar/LeftNav"
import {RightNav} from "./right navigation bar/RightNav"
import {Module2} from "./module2/Module2"

function App() {
  return (
    <div className="App">
      <div className="subApp">
        <LeftNav />
        <RightNav />
        <Module0/>      
        <Module1/>
        <Module2/>
      </div>
    </div>
  );
}

export default App;
