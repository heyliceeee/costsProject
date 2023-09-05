import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import ContactUs from './components/pages/ContactUs';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/newproject">New Project</Link>
      </ul>

      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/company' element={<Company/>}/>
          <Route exact path='/contactus' element={<ContactUs/>}/>
          <Route exact path='/newproject' element={<NewProject/>}/>
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;
