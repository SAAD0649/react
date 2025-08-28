// App.jsx (ou App.js)
import './App.css';              // ✅ pas de "from"
import Header   from './header/Header';  // ✅ composants
import Hero     from './Hero/Hero';
import Cards    from './Cards/Cards';
import Products from './Products/Products';
import Footer   from './Footer/Footer';

function App() {
  return (
    <div className="background">
      <Header />
      <Hero />
      <Cards />
      <Products />
      <Footer />
    </div>
  );
}

export default App;

