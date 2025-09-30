import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../features/adoption/pages/HomePage';
import AdoptionList from '../features/adoption/pages/AdoptionList';
import AdoptionDetails from '../features/adoption/pages/AdoptionDetails';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/adoption" exact component={AdoptionList} />
                <Route path="/adoption/:id" component={AdoptionDetails} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default AppRoutes;