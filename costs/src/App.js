import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <p>Navbar</p>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/newproject' element={<NewProject/>}/>
      </Routes>

      <p>Footer</p>
    </Router>
  );
}

export default App;
