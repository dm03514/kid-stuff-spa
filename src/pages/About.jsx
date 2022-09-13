import React from 'react';

import Header from '../partials/Header';
import AboutIntro from '../partials/AboutIntro';
import AboutStory from '../partials/AboutStory';
import Footer from '../partials/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <AboutIntro />
        <AboutStory />
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;