import React from 'react';

import AboutImage from '../images/about-01.jpg';

function AboutIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4">KidStuff makes it easy for parents and caregivers to discover fun things to do in the area.</h1>
            <p className="text-xl text-gray-600">
              As parents, we've discovered so many fun places by word of mouth. KidStuff makes it easy to discover the hidden kid's places in your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;