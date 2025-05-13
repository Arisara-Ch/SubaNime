import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/HomeWeb/Home';
import Login from './components/Login';
import Category from './components/Category';
import Practice from './components/Practice';
import Action from './components/Action';
import AnotherAction from './components/AnotherAction';
import SomethingElse from './components/SomethingElse';
import News from './components/News';
import Contact from './components/Contact';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AuthProvider } from './components/AuthContext';
import History from './components/History';
import Bookmark from './components/Bookmark';
import Register from './components/Register';

// ✅ import ThemeContext
import ThemeContext from './components/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category" element={<Category />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/action" element={<Action />} />
            <Route path="/another-action" element={<AnotherAction />} />
            <Route path="/something-else" element={<SomethingElse />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/history" element={<History />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeContext.Provider>
  );
}

export default App;