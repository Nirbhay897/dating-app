import Home from './pages/Home';
import Dashbord from './pages/Dashbord';
import Onbording from './pages/Onbording';
import {BrowserRouter , Routes, Route} from 'react-router-dom'

const App = () => {
  return(
    <BrowserRouter>
     <Routes>
       <Route path = '/' element ={<Home/>} />
       <Route path = '/Dashbord' element ={<Dashbord/>} />
       <Route path = '/Onbording' element ={<Onbording/>} />
     </Routes>
    </BrowserRouter>
  );
   
 
}

export default App;
