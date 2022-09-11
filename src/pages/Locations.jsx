import React from 'react';

import Header from '../partials/Header';
import Locations from '../partials/Locations';
import Footer from '../partials/Footer';


function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <Locations />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default LocationsPage;