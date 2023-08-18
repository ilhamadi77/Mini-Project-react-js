import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Input from "./components/Input";
import Empty from "./components/Empty";

import Emojis from "./components/Emojis";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSeacrhText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const title = "icon search and copy";
  document.title = title;
  // useEffect( () =>{
  //   async function fetchEmojis(){
  //     setLoading(true)
  //     try {
  //       const res= await axios.get('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28')
  //       console.log(res)
  //       setEmojisData(res.data)
  //       setLoading(false)

  //     } catch(e) {
  //       console.error(e)

  //       setError(true)
  //       setLoading(true)
  //     }
  //   }
  //   fetchEmojis()
  // }, [])

  useEffect(() => {
    async function fetchEmojiss() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }

    fetchEmojiss();
  }, []);

  const handleSearchEmojis = (e) => {
    setSeacrhText(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Input onChange={handleSearchEmojis} value={searchText} />
        {loading && <Empty text="Loading..." />}
        {error && <Empty text="Error!!!" />}
        {emojisData.length > 0 && (
          <Emojis emojisData={emojisData} searchText={searchText} />
        )}
      </Container>
    </>
  );
}

export default App;
