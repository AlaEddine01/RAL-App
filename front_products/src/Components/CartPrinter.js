import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Cart from "./Cart";
import { FaPrint } from "react-icons/fa";
import Timer from "./Timer";
import searchDate from "./TimeOfOperation";

function CartPrinter({ ...rest }) {
  const [clientName, setClientName] = useState("");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => {
      console.log(searchDate());
      document.title = `${clientName} ${searchDate()}`;
    },
  });

  const handleClientName = (e) => {
    e.preventDefault();
    setClientName(e.target.value);
  };

  return (
    <div>
      <Cart
        ref={componentRef}
        dateForNow={<Timer />}
        {...rest}
        clientName={clientName}
        handleClientName={handleClientName}
      />
      <button
        disabled={!!(clientName === "")}
        onClick={() => {
          handlePrint();
          searchDate();
        }}
      >
        Imprimer <FaPrint />
      </button>
    </div>
  );
}

export default CartPrinter;
