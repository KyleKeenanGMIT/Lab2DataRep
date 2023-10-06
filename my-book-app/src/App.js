
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {//h1 tag added
  return (
    <BrowserRouter>
    
    <div className="App">
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="create">Create</Nav.Link>
            <Nav.Link href="read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  

    <Routes>
      <Route path = '/' element={<Content></Content>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
