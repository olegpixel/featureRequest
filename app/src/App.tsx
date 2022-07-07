import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { getListItems } from "./utils/calls";
import { ItemType } from "./utils/types";
import "./App.css";

function App() {
  // const account = window.walletConnection.account();
  const [items, setItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch");
      const resp = await getListItems();
      setItems(resp);
      setLoading(false);
    };
    if (!loading && !error) {
      setLoading(true);
      fetchData();
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Main items={items} />
      <Footer />
    </div>
  );
}

export default App;
