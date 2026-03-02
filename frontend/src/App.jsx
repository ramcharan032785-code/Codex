import { useEffect, useState } from 'react';

const fallbackProducts = [
  {
    id: 1,
    name: 'Lunar Running Shoes',
    price: 129.0,
    description: 'Lightweight sneakers with responsive cushioning.'
  },
  {
    id: 2,
    name: 'Aurora Smartwatch',
    price: 249.0,
    description: 'Track workouts, sleep, and notifications in style.'
  },
  {
    id: 3,
    name: 'Nebula Backpack',
    price: 89.0,
    description: 'Weather-resistant backpack with laptop sleeve.'
  }
];

export default function App() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('Loading products...');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to load products');
        }
        const data = await response.json();
        setProducts(data);
        setStatus('');
      } catch (error) {
        setProducts(fallbackProducts);
        setStatus('Showing demo products. Connect the Spring Boot API for live data.');
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">NovaCart</p>
          <h1>Space-grade gear for everyday adventures.</h1>
          <p className="subtitle">
            Explore curated essentials across tech, travel, and lifestyle. Fast delivery,
            flexible returns, and a seamless checkout experience.
          </p>
          <div className="cta-row">
            <button className="primary">Shop new arrivals</button>
            <button className="ghost">View categories</button>
          </div>
        </div>
        <div className="hero-card">
          <h2>Weekly spotlight</h2>
          <p>Save 15% on bundles with code ORBIT.</p>
          <ul>
            <li>Free shipping over $75</li>
            <li>2-year warranty included</li>
            <li>24/7 concierge support</li>
          </ul>
        </div>
      </header>

      <section className="section">
        <div className="section-header">
          <h2>Featured products</h2>
          {status ? <span className="status">{status}</span> : null}
        </div>
        <div className="grid">
          {products.map((product) => (
            <article className="card" key={product.id}>
              <div className="card-top">
                <span className="badge">New</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <div className="card-bottom">
                <span className="price">${product.price.toFixed(2)}</span>
                <button>Add to cart</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div>
          <h2>Fast checkout, flexible payments.</h2>
          <p>
            Connect with Apple Pay, PayPal, or card-on-file. Keep your favorites in one
            place and reorder in seconds.
          </p>
        </div>
        <div className="pill-row">
          <span>1-click reorder</span>
          <span>Live order tracking</span>
          <span>Instant support</span>
        </div>
      </section>
    </div>
  );
}
