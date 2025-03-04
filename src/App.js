import React, { useContext } from 'react';
import { MainContext } from './context/MainContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogPost from './pages/Blog_post';
import Form from './components/ContactForm/Form';

const App = () => {

  const { contactIsOpen } = useContext(MainContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      {contactIsOpen && <Form />}
      <Footer />
    </Router>
  );
}

export default App;
