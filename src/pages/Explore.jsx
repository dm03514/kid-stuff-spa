import React from 'react';

import Header from '../partials/Header';
import DestinationList from '../partials/DestinationList';
import Footer from '../partials/Footer';

function Explore() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <DestinationList />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Explore;