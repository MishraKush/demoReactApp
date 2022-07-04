import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar titleName="Test1" homeName="Home1"/>
    <div className='container'>
    <Form/>
    </div>
    
    </>
  );
}

export default App;
