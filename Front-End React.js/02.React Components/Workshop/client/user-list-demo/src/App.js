import { Header } from "./components/Header";
// import { Fragment } from 'react'
import { Footer } from "./components/Footer";
import { Search } from "./components/Search"
import './App.css'
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <section class="card users-container">

          <Search />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
