import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$99",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
  },
  {
    id: 3,
    name: "Laptop",
    price: "$799",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
  },
  {
    id: 4,
    name: "Camera",
    price: "$499",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
  }
];

function App() {
  return (
    <>
      <nav>
        <h2>ShopEasy</h2>

        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Offers</li>
          <li>Contact</li>
        </ul>

        <button>Login</button>
      </nav>

      <section className="hero">
        <div>
          <h1>Big Sale is Live!</h1>

          <p>
            Shop premium gadgets and accessories at unbelievable prices.
          </p>

          <button>Shop Now</button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=700"
          alt="Shopping"
        />
      </section>

      <section className="products">
        <h2>Featured Products</h2>

        <div className="card-container">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>{item.price}</p>

              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 ShopEasy. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;