import React, { useState } from 'react';
import Nav from 'src/components/Nav';
import Banner from 'src/components/Banner';
import Search from 'src/components/Search';
import URLResults from 'src/components/URLResults';
// import Aside from 'src/components/Aside';
// import Footer from 'src/components/Footer';
const axios = require('axios');

const URLShorten = () => {
  const [form, setForm] = useState([]);
  const [value, setValue] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.shrtco.de/v2/shorten?url=${value}`).then((res) => res).then((data) => {
      if (form.length === 0) setForm([...[data.data.result]]);
      else setForm([...form, ...[data.data.result]]);
      setValue('');
    });
  };
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const copyLinkClick = (event) => {
    const copyText = event.taget.value;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
  };

  return (
    <>
      <Nav />
      <Banner />
      <Search
        value={value}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        copyLinkClick={copyLinkClick}
      />
      <URLResults data={form} />
      {/* <Aside />
      <Footer /> */}
    </>
  );
};

export default URLShorten;
