import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [merchantID, setMerchantID] = useState("");

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("merchant");

    axios.get(`http://localhost:3000/merchant/${id}`)
      .then(response => {
        const merchantID = response.data[0].merchant_id;

        document.title = merchantID;
        setMerchantID(merchantID);
      })
      .catch(error => {
        setMerchantID("");
      });
  }, [])

  return (
    <div className="App">
      <pay-engine
        id="onboarding"
        type="boarding"
        merchant-id={merchantID}
      >
      </pay-engine>
    </div>
  );
}

export default App;
