import React from 'react';
import Header from './homepage/Header';
import Accepted from './homepage/Accepted';
import Faq from './homepage/Faq';
import Footer from './homepage/Footer';
import Hero from './homepage/Hero';
import Reward from './homepage/Reward';
import Steps from './homepage/Steps';
import Quick from './homepage/Quick';

function App() {
    return (
      <div>
        <Header />
        <Hero />
        <Steps />
        <Quick />
        <Accepted />
        <Reward />
        <Faq />
        <Footer />
      </div>
    );
}

export default App;
