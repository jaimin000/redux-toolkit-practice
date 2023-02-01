import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const { c } = useSelector((state) => state.custom);

  const addbtn = () => {
    dispatch({ type: "increment" });
  };
  const subbtn = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div className="App">
      <h3>{c}</h3>
      <button onClick={addbtn}>Increment</button>
      <button onClick={subbtn}>Decrement</button>
    </div>
  );
}

export default App;
