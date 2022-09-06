import React from 'react';
import { useParams } from "react-router-dom";

import Header from '../partials/Header';
import PostSingle from '../partials/PostSingle';
import Footer from '../partials/Footer';


function Destination() {
  const params = useParams();
  console.log(params);
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <PostSingle />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Destination;