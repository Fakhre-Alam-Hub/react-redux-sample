import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksDynamicCakeContainer from "./components/HooksDynamicCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <HooksDynamicCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
