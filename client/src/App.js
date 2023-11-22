import Routers from "./routes/Routers";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <Routers/>
    </Provider>
  );
}

export default App;