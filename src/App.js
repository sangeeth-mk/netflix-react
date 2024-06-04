import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Originals from './components/row_posters/section1';
import Action from './components/action/action';
import Toprated from './components/top rated/toprated';

function App() {
  return (
    <div className="App">
      
     <Navbar />
     <Banner />
     <Originals />
     <Toprated />
     <Action />
    </div>
  );
}

export default App;
