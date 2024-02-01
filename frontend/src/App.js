import logo from './logo.svg';
import './App.css';
import ReviewList from './reivew/List';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
   <ReviewList/>
   <ToastContainer />

    </div>
  );
}

export default App;
