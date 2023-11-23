import './App.css';
import { Banner, Cities, Login, Navbar, Parents, Results, Test, Whychoose } from './components';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <div className='bannerAndCitiesCont'>
      <Banner />
      <Cities />
      </div>
      <Whychoose />
      <Test />
      <Parents />
      <Results />
      <Login />
    </div>
  );
}

export default App;
