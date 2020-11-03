import React from "react";
import "./App.css";
import Header from "./components/Header";
import Logo from "./logo.png";
import data from "./movies.json";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header image={Logo} />

      <Content data={data} />
      <Footer />
    </div>
  );
}

export default App;
