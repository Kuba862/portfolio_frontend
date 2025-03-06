import React, { useContext, useState } from 'react';
import { MainContext } from './context/MainContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogPost from './pages/Blog_post';
import Form from './components/ContactForm/Form';
import Modal from 'react-modal';
import LoginForm from './components/Login/Login';
import Admin from './pages/Admin';
import { AuthContext } from './context/AuthContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    height: '15%',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
};

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { auth, loading } = useContext(AuthContext);
  const { contactIsOpen } = useContext(MainContext);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <Router>
      <Header
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <LoginForm />
      </Modal>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/admin" element={auth ? <Admin /> : <Navigate to="/" />} />
      </Routes>
      {contactIsOpen && <Form />}
      <Footer />
    </Router>
  );
};

export default App;
