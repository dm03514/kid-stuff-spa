import React from 'react';

import AboutImage from '../images/about-02.jpg';
import AboutLogo from '../images/about-logo.png';

function AboutStory() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">What's a Kid Destination?</h3>
            <div>
              <p>Destinations listed on this site should occupy children for a significant amount of time (3+ hours).</p>
            </div>
            <h3 className="h3 mb-3">Contact Us!</h3>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeSoe8Cj13Yn4Z33Y9kiX-q_FiYhDqgZf-yHI7vXvLQeZIcwQ/viewform?embedded=true"
                width="100%" height="650px" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;