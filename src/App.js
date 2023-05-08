import "./App.css";
import Cart from "./Components/Cart/Cart";
import { useEffect, useState } from "react";
import api from "./API/axios";
//Styling variables
export const BLUE = "#172162"; //"rgb(23, 33, 98)";
export const LIGHT_GREY = "#6e7484";
export const BLACK = "#000000";
//First part given
export const ESTIMATED_DELIVERY = "Nov 24, 2021";

const SUBTOTAL = 2094.97;
const HST = 272.3461;
const TOTAL = 2382.3161;

export const CartObject = {
  SUBTOTAL: SUBTOTAL,
  HST: HST,
  TOTAL: TOTAL,
};

function App() {
  const [lineItems, setLineItems] = useState([]);
  const [postal, setPostal] = useState();

  const apiCall = async (route) => {
    try {
      const response = await api.get(route);
      const json = response.data.data;
      console.log(json);
      setLineItems(json);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    apiCall("/getAllLineItems");
  }, []);

  useEffect(() => {
    if (postal) {
      apiCall(`/getPostalLineItems/${postal}`);
    }
  }, [postal]);

  return (
    <>
      <Cart lineItems={lineItems} postal={postal} setPostal={setPostal} />
    </>
  );
}

export default App;
