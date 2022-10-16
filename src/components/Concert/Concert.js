import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Singer from "../Singer/Singer";
import "./Concert.css";

const Concert = () => {
  const [singers, setSingers] = useState([]);
  const [cart, setCart] = useState([]);

  // collect data to the json filessss
  useEffect(() => {
    fetch("./singerData.JSON")
      .then((res) => res.json())
      .then((data) => setSingers(data));
  }, []);

  // handle click handerlar
  const handleAddToCart = (allSinger) => {
    if (cart.indexOf(allSinger) === -1) {
      const newSinger = [...cart, allSinger];
      setCart(newSinger);
    } else {
      alert("you can not hire one singer 2 times");
    }
  };

  return (
    <div className="concert-container">
      <div className="row">
        {/* singer part import */}
        <div className="col-md-9 singer-container">
          <div className="row row-cols-1 row-cols-md-3 g-4 ms-3">
            {singers.map((singer) => (
              <Singer
                key={singer.id}
                singers={singer}
                handleAddToCart={handleAddToCart}
              ></Singer>
            ))}
          </div>
        </div>
        {/* cart part import */}
        <div className="col-md-3 cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};
export default Concert;
