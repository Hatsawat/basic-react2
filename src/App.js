import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Products from './components/Products';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Container>
      <Route exact={true} path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/profile' component={Profile} />
      <Route path='/products' component={Products} />
      <Route path='/signin' component={Signin} />
      <Route path='/signup' component={Signup} />
      </Container>
      <Footer />
      </div>
  );
}

export default App;
