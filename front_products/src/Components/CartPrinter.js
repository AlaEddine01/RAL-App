import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Cart from "./Cart";
import {FaPrint} from 'react-icons/fa'

function CartPrinter({ ...rest }) {
  const [clientName, setClientName] = useState("");

  const [dateForNow, setDateForNow] = useState("");

  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => {
      document.title = `${clientName} ${dateForNow}`;
    },
  });
  
  const handleClientName = (e) => {
    e.preventDefault();
    setClientName(e.target.value);
  };

  const searchDate = () => {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var secondes = today.getSeconds();
    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (secondes < 10) {
      secondes = "0" + secondes;
    }

    today = day + "/" + month + "/" + year + "-" + hours + ":" + minutes + ":" + secondes;

    setDateForNow(today);
  };
  setInterval(searchDate, 1000)
  
useEffect(() => {
  searchDate()
  return () => {
    console.log('cleanup Cart Printer')
  }
},[])
  return (
    <div>
      <Cart
        ref={componentRef}
        dateForNow={dateForNow}
        {...rest}
        clientName={clientName}
        handleClientName={handleClientName}
      />
      <button disabled={!!(clientName === "")} onClick={handlePrint}>
        Print this out! <FaPrint/>
      </button>
    </div>
  );
}

export default CartPrinter;
