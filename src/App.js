import './App.css';
import Mode from './components/Mode';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


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
        <Mode />
      </main>

      <footer className="footer-area">
        <Footer />
      </footer>
    </div>

  );
}

export default App;
