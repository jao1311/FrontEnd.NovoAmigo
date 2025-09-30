import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import AdoptionList from './AdoptionList';
import SearchBar from '../../../components/shared/SearchBar';

const HomePage = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <AdoptionList />
            <Footer />
        </div>
    );
};

export default HomePage;