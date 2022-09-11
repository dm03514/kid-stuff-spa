import React from 'react';

import AboutImage from '../images/about-01.jpg';

function AboutIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4">Let's Go, Kids! makes it easy for caregivers to discover new destinations and events nearby to help fill the day with effortless kid fun</h1>
            <p className="text-xl text-gray-600">
              As parents, we've discovered so many fun places by word of mouth. Let's Go, Kids! makes it easy to learn about hidden gems in your area, from playgrounds to parks and more. If you've ever wondered "What can we do with the kids today?" Let's Go, Kids! can help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;