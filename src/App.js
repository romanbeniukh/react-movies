import React from 'react';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import PageRoute from './routes/PageRoute';

const App = () => {
  return (
    <>
      <Header />
      <PageRoute />
      <Footer />
    </>
  );
};

export default App;
