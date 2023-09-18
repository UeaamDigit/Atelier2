
import './App.css';
import Header from './components/Header/header';
import Navigation from './components/Navigation/navigation';
import Content from './components/Content/content';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div >
        <Header/>
        <div className='partieC'>
            <Navigation/>
            <Content/>
        </div>
        <Footer/>
    </div>

  );
}

export default App;
