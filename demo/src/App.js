import "./App.css";

// import CounterClick from "./HigherOrderComponents/CounterClick";
// import CounterMouseHover from "./HigherOrderComponents/CounterMouseHover";
// import ParentHeroComponent from "./ErroBoundaries/ParentHeroComponent";
// import Form from "./FormHandling/Form";
// import LifeCycleComponentA from "./Lifecycle/LifeCycleComponentA";
// import Example from "./ConditionalOperators/Example";
// import ExampleForEach from "./Loops/ExampleForEach";
import Parent from "./PropsExample/Parent.js";
import { UserProvider } from "./PropsExample/useContext";
// import Greet from "./Greet.js";
// import Welcome from "./Welcome.js";
function App() {
  return (
    <div className="App">
      {/* <Greet name="risha"></Greet>
      <Welcome name="amit"> </Welcome> */}
      <UserProvider value="Risha">
       <Parent/>
      </UserProvider>
      Learn React
      {/* <Example /> */}
      {/* <ExampleForEach /> */}
      {/* <Form />
      <LifeCycleComponentA /> */}
      {/* <ParentHeroComponent /> */}
      {/* <CounterClick /> */}
      {/* <CounterMouseHover/> */}
    </div>
  );
}

export default App;
