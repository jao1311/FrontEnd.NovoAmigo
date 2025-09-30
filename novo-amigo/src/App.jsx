import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/global.css';

const App = () => {
    return (
        <Router>
            <Header />
            <AppRoutes />
            <Footer />
        </Router>
    );
};

export default App;