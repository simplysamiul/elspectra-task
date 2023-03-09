import { Provider } from "react-redux";
import store from "./redux/stores/Store";
import TheLayout from "./views/layout/TheLayout";

function App() {
  return (
    <Provider store={store}>
      <TheLayout />
    </Provider>
  );
}

export default App;
