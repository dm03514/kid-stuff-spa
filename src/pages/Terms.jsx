import React from 'react';

import Header from '../partials/Header';
import AboutIntro from '../partials/AboutIntro';
import AboutStory from '../partials/AboutStory';
import Stats from '../partials/Stats';
import Team from '../partials/Team';
import Career from '../partials/Career';
import Process from '../partials/Process';
import CtaAlternative from '../partials/CtaAlternative';
import Footer from '../partials/Footer';

function Terms() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
          <section>
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                  <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                  <h1>Terms and Conditions</h1>
              <h2>Disclaimer:</h2>

              All data and information provided on this site is for informational purposes only.  I make no representations as to accuracy, completeness, currentness, suitability, or validity of any information on this site and will not be liable for any errors, omissions, or delays in this information or any losses, injuries, or damages arising from its display or use. All information is provided on an as-is basis with no warranties, and confers no rights.

              In no event shall Been There Done That with Kids be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or another tort, arising out of or in connection with the use of this blog or the contents of this blog.  Been There Done That with Kids reserves the right to make additions, deletions, or modification to the contents of this website at any time without prior notice.

              This blog represents the thoughts, intentions, plans or strategies of me. It is solely my opinion.

              <h2>Disclosure:</h2>

              This blog is a personal blog written and edited by me. For questions about this blog, please contact dm03514@gmail.com.

              This blog accepts forms of cash advertising, sponsorship, paid insertions or other forms of compensation.  We are also a participant in affiliate advertising programs designed to provide a means for us to earn fees by linking to affiliated sites.  We may receive commissions when you click our links and make purchases.  However, this does not impact our reviews and comparisons.

              This blog abides by word of mouth marketing standards. We believe in honesty of relationship, opinion and identity. The compensation received may influence the advertising content, topics or posts made in this blog. That content, advertising space or post will be clearly identified as paid or sponsored content.

              The owner of this blog is compensated to provide opinion on products, services, websites and various other topics. Even though I receive compensation for our posts or advertisements, I always give honest opinions, findings, beliefs, or experiences on those topics or products. The views and opinions expressed on this blog are purely my own. Any product claim, statistic, quote or other representation about a product or service should be verified with the manufacturer, provider or party in question.  I reserve the right to change my mind.

              Copyright:  This blog is a personal blog written and edited by me. Information on this website may be copied for personal use only. No part of this website may be reproduced, stored, or transmitted in any form or by any means, electronic, mechanical, photocopying, recording, scanning, or otherwise, except as permitted under Section 107 or 108 of the 1976 United States Copyright Act, without the prior written permission of the author. For questions about this blog or requests to use its content, please contact dm03514@gmail.com.
                  </div>
              </div>
          </section>
        {/*  Page sections */}
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Terms;