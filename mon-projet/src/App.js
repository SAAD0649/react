// App.jsx (ou App.js)
import './App.css';              // ✅ pas de "from"
import Header   from './Header';  // ✅ composants
import Hero     from './Hero';
import Cards    from './Cards';
import Products from './Products';
import Footer   from './Footer';

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

