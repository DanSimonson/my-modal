import React from "react";
import "./App.css";
import Modal from "./Components/Modal";
import useModal from "./Components/useModal";
import axios from "axios";

function App() {
  const { isShowing, toggle } = useModal();
  const { data, setData } = [];
  React.useEffect(() => {
    axios
      .get("./JsonData.json")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
}

export default App;
