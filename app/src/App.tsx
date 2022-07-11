import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import ErrorToast from "./components/ErrorToast/ErrorToast";
import { getListItems, createItem, upVote } from "./utils/calls";
import { ItemType } from "./utils/types";
import { login, logout } from "./utils/near";
import { v4 as uuid4 } from "uuid";
import "./App.css";

function App() {
  const [items, setItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const account = window.walletConnection.account();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getListItems();
      setItems(resp);
      setLoading(false);
    };
    if (!loading) {
      setLoading(true);
      fetchData();
    }
  }, []);

  const addItemAction = async ({
    name,
    title,
    url,
    nearAmount,
  }: {
    name: string;
    title: string;
    url: string;
    nearAmount: number;
  }) => {
    try {
      setLoading(true);
      const id = uuid4();
      await createItem(name, title, url, id, nearAmount);
      const resp = await getListItems();
      setItems(resp);
    } catch (error) {
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const upVodeAction = async ({
    itemId,
    nearAmount,
  }: {
    itemId: string;
    nearAmount: number;
  }) => {
    try {
      setLoading(true);
      await upVote(itemId, nearAmount);
      const resp = await getListItems();
      setItems(resp);
    } catch (error) {
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header
        loginAction={login}
        logoutAction={logout}
        accountId={account?.accountId}
      />
      {loading && <Loading />}
      {!loading && (
        <Main
          items={items}
          addItemAction={addItemAction}
          upVodeAction={upVodeAction}
          accountId={account?.accountId}
          loginAction={login}
        />
      )}
      <Footer />
      {showError && (
        <ErrorToast
          closeAction={() => {
            setShowError(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
