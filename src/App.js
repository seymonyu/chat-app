import React from "react";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Contact
        name="Seyma Firat"
        status="online"
        avatar="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      />
      <Contact
        name="Joan Griffin"
        status="offline"
        avatar="https://randomuser.me/api/portraits/men/66.jpg"
      />
      <Contact
        name="Jessie Martinez"
        status="online"
        avatar="https://randomuser.me/api/portraits/women/2.jpg"
      />
    </div>
  );
}

export default App;
