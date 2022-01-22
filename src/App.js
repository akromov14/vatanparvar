import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Static from './static'
import News from './news';
import Karta from './karta';
import Hamkor from './hamkor';
import Footer from './footer';
// import { useContext } from 'react';
// import { ThemeContext } from './ThemeContext';
// import ThemeButtonn from './ThemeButton';

function App() {
  // const { darkMode } = useContext(ThemeContext);
  // console.log(darkMode);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Static />
      <News />
      <Karta />
      <Hamkor />
      <Footer />
    </div>
  );
}

export default App;

