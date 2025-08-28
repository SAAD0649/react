import React from "react";
import "./Products.css";

const items = [
  {
    tag: "SALE",
    img: "https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/prod8.png",
    title: "Workout Powder Fruit",
    old: "$56.00",
    price: "$38.00",
  },
  {
    tag: "SALE",
    img: "https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/prod16.png",
    title: "Night Time Recovery",
    old: "$56.00",
    price: "$38.00",
  },
  {
    tag: "SALE",
    img: "https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/prod6.png",
    title: "Fitness Nitric Pre-Shock",
    old: "$56.00",
    price: "$38.00",
  },
  {
    tag: "SALE",
    img: "https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/prod10.png",
    title: "Workout Powder Fruit",
    old: "$56.00",
    price: "$38.00",
  },
  {
    tag: "SALE",
    img: "https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/prod14-570x600.png",
    title: "Workout Powder Fruit",
    old: "$56.00",
    price: "$38.00",
  },
  {
    tag: "SALE",
    img: "https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/prod5.png",
    title: "Night Time Recovery",
    old: "$56.00",
    price: "$38.00",
  },
  {
    tag: "SALE",
    img: "https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/prod3.png",
    title: "Energy Boost Shake",
    old: "$56.00",
    price: "$38.00",
  },
  {
    tag: "SALE",
    img: "https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/prod11.png",
    title: "Daily Protein Mix",
    old: "$56.00",
    price: "$38.00",
  },
];

export default function Products() {
  return (
    <section className="product">
      <h1>Recent products</h1>
      <p>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure
      </p>

      <div className="photo">
        {items.map((it, i) => (
          <div className="img" key={i}>
            <a href="/">
              <p>{it.tag}</p>
              <img src={it.img} alt={it.title} />
              <h3>{it.title}</h3>
              <div className="price">
                <div className="ancien">{it.old}</div>
                <div className="new">{it.price}</div>
              </div>
            </a>
          </div>
        ))}

        {/* Bloc promo */}
        <div className="result">
          <p className="p1">
            Eat <span className="one">Right!</span>
          </p>
          <p className="p2">
            Move <span className="one">More!</span>
          </p>
          <a href="/">SHOP NOW</a>
        </div>
      </div>
    </section>
  );
}

