import { Provider } from "react-redux";
import { Routes } from "routes/Routes";
import store from "store";
import "styles/global.scss";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
