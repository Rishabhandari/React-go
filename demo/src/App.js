import "./App.css";
import HookCounter from "./Hooks/HookCounter";

// import CounterClick from "./HigherOrderComponents/CounterClick";
// import CounterMouseHover from "./HigherOrderComponents/CounterMouseHover";
// import ParentHeroComponent from "./ErroBoundaries/ParentHeroComponent";
// import Form from "./FormHandling/Form";
// import LifeCycleComponentA from "./Lifecycle/LifeCycleComponentA";
// import Example from "./ConditionalOperators/Example";
// import ExampleForEach from "./Loops/ExampleForEach";
// import Parent from "./PropsExample/Parent.js";
// import { UserProvider } from "./PropsExample/useContext";
// import Greet from "./Greet.js";
// import Welcome from "./Welcome.js";
function App() {
  return (
    <div className="App">
      {/* <Greet name="risha"></Greet>
      <Welcome name="amit"> </Welcome> */}
      {/* for higher order components */}


      {/* <UserProvider value="Risha">
        <Parent />
      </UserProvider> */}


      Learn React
      {/* <Example /> */}
      {/* <ExampleForEach /> */}
      {/* <Form />
      <LifeCycleComponentA /> */}
      {/* <ParentHeroComponent /> */}
      {/* <CounterClick /> */}
      {/* <CounterMouseHover/> */}
      {/* for hooks  */}
      <HookCounter />
    </div>
  );
}

export default App;
