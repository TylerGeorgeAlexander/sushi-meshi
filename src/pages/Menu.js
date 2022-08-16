import React from "react";
const data = [
  {
    name: "Rainbow Roll",
    price: 11.99,
    img: "./assets/horizontal-pictures/rainbow-roll.jpg",
  },
];
const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
      {data &&
        data.map((item) => {
          return (
            <>
              <p>
                {item.name} {item.price}
              </p>
              <img src={item.img} />
              {item.img}
            </>
          );
        })}
    </div>
  );
};

export default Menu;
