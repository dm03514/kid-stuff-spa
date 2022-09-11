import React from 'react';
import { useParams } from "react-router-dom";

import Header from '../partials/Header';
import DestinationSingle from '../partials/DestinationSingle';
import Footer from '../partials/Footer';


function Destination() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <DestinationSingle />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Destination;