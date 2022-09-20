import React from "react";
import Map from "./components/Map/Map";
import UseState from "./components/Use state";
// import Cards from "./components/Cards/Cards";
// import { Home } from "./components/Table/home";
import { data } from "./mock/data";

function App() {
  return (
    <div>
      <Map values={data} />
      {/* <br />
      <br />
      {/* <Cards/>

      <Home name="SHAXZODA" familya="SODIQOVA" age="15" manzil="Toshkent sh" /> */}
      {/* <main>
        <UseState />
      </main>{" "} */}
    </div>
  );
}

export default App;
