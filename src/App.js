import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  return (
    <div className="App">
       <h1>Basics of React</h1>
       {/* <ClassComponent name="Vidhya"/> //comment: //See constructor() in FirstComponent file */}
       <FunctionComponent name="Vidhya"/>
    </div>
  );
}

export default App;
