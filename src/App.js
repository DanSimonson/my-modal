import React from "react";
import "./App.css";
import Modal from "./Components/Modal";
import useModal from "./Components/useModal";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  data: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        data: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

function App() {
  const { isShowing, toggle } = useModal();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    axios
      .get(`./JsonData.json`)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  const { data } = state;

  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal isShowing={isShowing} hide={toggle} data={data} />
    </div>
  );
}

export default App;
