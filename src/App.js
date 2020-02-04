import React from "react";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Contact
        name="Seyma Firat"
        status="online"
        avatar="https://avatars2.githubusercontent.com/u/59199817?s=460&v=4"
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
