import { useState } from "react";
import "./App.css";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import CurrQuery from "./Components/CurrQuery";
import BanList from "./Components/BanList";
import PreviousData from "./Components/PreviousData";

function App() {
  const [currData, setCurrData] = useState({});
  const [banList, setBanList] = useState([]);
  const [prevData, setPrevData] = useState([]);

  function onSubmit() {
    let query = `https://api.nasa.gov/planetary/apod?api_key=${ACCESS_KEY}&count=1`;
    callAPI(query).catch(console.error);
  }

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();

    if (banList.length === 0) {
      setCurrData(json[0]);
    } else {
      banList.map((val) => {
        if (
          json[0].date !== val &&
          json[0].media_type !== val &&
          json[0].copyright !== val
        ) {
          setCurrData(json[0]);
        } else {
          onSubmit();
          console.log("Discover");
        }
      });
    }
    setPrevData([...prevData, json[0]]);
  };

  const handleBanList = (value) => {
    setBanList([...banList, value]);
  };

  return (
    <div className="App">
      <div className="previous">
        <PreviousData prevData={prevData}/>
      </div>

      <div className="currData">
        <h1>NASA's Astronomy Picture of the Day</h1>
        <h2>Discover New Astronomy Images</h2>
        {Object.keys(currData).length === 0 ? (
          <div> </div>
        ) : (
          <CurrQuery currData={currData} handleBanList={handleBanList} />
        )}
        <button className="queryNextButton" onClick={onSubmit}>
          Discover
        </button>
      </div>

      <div className="ban">
        <BanList banList={banList} />
      </div>
    </div>
  );
}

export default App;
