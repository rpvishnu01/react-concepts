import { useState } from "react";
import Header from "./Components/Header/Header";
import TabButton from "./Components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./Components/CoreConcept";
import CoreConcepts from "./Components/CoreConcepts";
import Examples from "./Components/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
