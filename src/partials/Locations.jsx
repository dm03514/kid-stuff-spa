import {React, Component} from 'react';
import ImageGallery from 'react-image-gallery';

export default class Locations extends Component {

  render() {

    return (
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto lg:max-w-none">

                <article>

                  {/* Article header */}
                  <header className="max-w-3xl mx-auto mb-20">
                    {/* Title */}
                    <h3 className="h3 text-center mb-4">Currently Supported Locations</h3>
                  </header>

                  {/* Article content */}
                  <div className="lg:flex lg:justify-between" data-sticky-container>
                    {/* Main content */}
                    <div>
                      {/* Article meta */}
                      <div className="flex items-center pb-6 border-b-2">
                        <div className="w-1/3 bg-amber-50">
                          <h1 classname="h1 mb-4">Maryland</h1>
                          <ul className="list-inside list-disc">
                            <li><a href="/explore/baltimore/">Baltimore</a></li>
                          </ul>
                        </div>
                        <div className="w-1/3 bg-amber-50"></div>
                        <div className="w-1/3 bg-amber-50"></div>
                      </div>

                      {/* Article body */}
                      <div flex className="text-lg text-gray-600"></div>
                    </div>
                  </div>
                  {/* Article footer */}
                </article>

              </div>

            </div>
          </div>
        </section>
    );
  }

}