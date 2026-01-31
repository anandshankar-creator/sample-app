
import './App.css';
import  Account  from './components/Account';
import  Settings  from './components/Settings';
import  Dashboard  from './components/Dashboard';
// import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Services';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Axiosss from './components/Axiosss';
// import Usestate from './components/Usestate';

// import Count from './components/Count';
// import Homeprops from './components/Homeprops';
// import NameProps from './components/NameProps';
// import Exerciseee from './components/Exerciseee';
// import Useeffect from './components/Useeffect';n
import{Routes,Route,Link} from "react-router-dom"
import Complaint from './components/Complaint';

// import Useeffect from './components/Useeffect';
// import Mapssss from './components/Mapssss';




function App() {
  
  return (
    <div className="App">
      {/* <Exerciseee></Exerciseee> */}
{/*       
        <Homeprops name={'father'}/>
        <Homeprops name={'mother'}/>
        <Homeprops name={'brother'}/>
        <Homeprops name={'sister'}/>
       */}
       {/* <Axiosss></Axiosss> */}

{/* <Useeffect></Useeffect> */}
{/* <Mapssss></Mapssss> */}

       {/* <NameProps name={'Anand'}role={'student'}/> */}
      
     
       {/* <BrowserRouter> */}
      <nav>
        <Link to="Account">Account</Link>
        <Link to="Settings">Settings</Link>
        <Link to="Dashboard">Dashboard</Link>
        <Link to="">Home</Link>
        <Link to="Contact">Contact</Link>
        <Link to="Services">Services</Link> 
        <Link to="Complaint">Complaint</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Services" element={<Services/>}/>
        <Route path="Account" element={<Account/>}/>
        <Route path="Settings" element={<Settings/>}/>
        <Route path="Dashboard" element={<Dashboard/>}/>
        <Route path="Complaint" element={<Complaint/>}/>
      </Routes>
      {/* </BrowserRouter>  */}

      {/* <Home></Home>
      <About></About> */}
      {/* <Usestate></Usestate>
      <Count></Count> */}
      {/* <Useeffect></Useeffect> */}
       
      
     
      {/* <h1>hello world</h1> */}

    </div>
  );
}

export default App;
