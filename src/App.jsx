import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./style/App.css";

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then(data => {
        setData(data);
        setDataLoaded(true);
      })
  }, []);

  if (dataLoaded) {
    return <Card json={data} />
  } else {
    return "LOADING"
  }
}

const getData = async () => {
  return fetch("./list.json")
    .then(data => data.json())
}

export default App;