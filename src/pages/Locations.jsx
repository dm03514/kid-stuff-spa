import React from 'react';

import Header from '../partials/Header';
import TutorialsList from '../partials/TutorialsList';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Locations() { return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <TutorialsList />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Locations;