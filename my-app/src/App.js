// import logo from './logo.svg';
import './App.css';
// import Navbar2 from './components/Nabar2';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import Photography from './components/Photography';

function App() {
  return (
    <>
    {/* <Navbar2/> */}
    <Navbar/>
    <Main/>
    <About/>
    <Project/>
    <Photography/>
    <Footer/>
    </>
  );
}

export default App;
