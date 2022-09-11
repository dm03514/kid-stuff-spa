import React from 'react';

import Header from '../partials/Header';
import DestinationList from '../partials/DestinationList';
import Footer from '../partials/Footer';
import { useParams } from 'react-router-dom';

function Explore() {
  const params = useParams();
  params.sub_region = params.sub_region || 'baltimore';

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <DestinationList sub_region={params.sub_region} />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Explore;