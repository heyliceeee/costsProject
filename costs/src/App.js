import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import ContactUs from './components/pages/ContactUs';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <Navbar/>

      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/company' element={<Company/>}/>
          <Route exact path='/contactus' element={<ContactUs/>}/>
          <Route exact path='/newproject' element={<NewProject/>}/>
        </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
