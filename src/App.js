import './App.css';
import Mode from './components/Mode';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Grandfather from './components/Grandfather';

function App() {
  return (
    <div className="app-layout">
      <div className="header-area">
        <Header />
      </div>

      <aside className="sidebar-area">
        <Sidebar />
      </aside>

     <main className="main-area">
        <Routes>
          <Route path="/" element={<Mode />} />
          <Route path="/about" element={<About />} />
           <Route path="/grandfather" element={<Grandfather />} />

        </Routes>
      </main>


      <footer className="footer-area">
        <Footer />
      </footer>
    </div>

  );
}

export default App;
