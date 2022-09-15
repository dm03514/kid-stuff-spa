import {React, Component} from 'react';
import {Helmet} from "react-helmet";
import ImageGallery from 'react-image-gallery';
import destinations from "../utils/Destinations";

export default class DestinationSingle extends Component {
  constructor(props) {
    super(props);

    this.did = new URL(window.location).pathname.split("/")[2];

    this.state = {
      destination: {
        attributes: [],
        name: null,
        link: null,
        updated_at: null,
        tags: [],
        destinationimage_set: [],
        description: null,
        location: {
          city: null,
          state: null,
          street_address: null,
          zip: null
        }
      },
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const data = await destinations.destination(this.did);
      this.setState({
        destination: data
      });
    } catch (e) {
      alert(e);
      this.setState({
        error: e
      });
    }
  }

  render() {
    const dest = destinations.transformDestination(this.state.destination);

    return (
        <section>
          <Helmet>
            <meta charSet="utf-8" />
            {dest.synopsis &&
                <meta name="description" content={dest.synopsis}/>
            }
            <meta name="keywords" content={dest.tags.join(', ')} />
            <title>{dest.name}</title>

            <meta property="og:title" content={"Let's Go, Kids! - " + dest.name} />
            <meta property="og:url" content={window.location} />
          </Helmet>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto lg:max-w-none">

                <article>

                  {/* Article header */}
                  <header className="max-w-3xl mx-auto mb-20">
                    {/* Title */}
                    <h1 className="h1 text-center mb-4">{dest.name}</h1>
                  </header>

                  {/* Article content */}
                  <div className="lg:flex lg:justify-between" data-sticky-container>
                    {/* Main content */}
                    <div>
                      {/* Article meta */}
                      <div className="flex items-center pb-6 border-b-2">
                        <div className="w-1/2 bg-amber-50">
                          {dest.reactGenerated.images.length > 0 &&
                              <ImageGallery items={dest.reactGenerated.images}/>
                          }
                          {dest.images &&
                              <a href="#image_credits">(Images may be subject to copyright)</a>
                          }
                        </div>
                        <div className="w-1/2 ml-4">
                          <div>
                            <address>
                              {dest.location.street_address} // {dest.location.city} {dest.location.state} {dest.location.zip}
                            </address>
                            <div>
                              <a href={dest.link}>Visit Website</a>
                            </div>
                            <ul>
                              {dest.tags.map((tag) => (
                                <li className="float-left btn bg-blue-500 mx-1 rounded py-1 px-1 text-white">{tag} </li>
                              ))}
                            </ul>
                            <div className="flex items-center mb-6 clear-both">
                              <div>
                                <span className="text-gray-600"> Last Updated: · { dest.updated_at.toUTCString() }</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Article body */}
                      <div flex className="text-lg text-gray-600">
                        <h3 id="general" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>Description</h3>
                        <div className="mb-8" style={{scrollMarginTop: '100px', whiteSpace: 'pre-line'}}>
                          {dest.description}
                        </div>
                        <h3 id="attrs" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>Amenities</h3>
                        {dest.attributes.length > 0 &&
                            <table className="table-auto w-full border-gray-200 border-collapse">
                              <tbody>
                              {dest.attributes.map((item) => (
                                  <tr className="border-t border-gray-200">
                                    <td className="text-sm sm:text-base pr-2 py-4 border-slate-300">
                                      <span style={{textTransform: 'capitalize'}}>{item.name}</span>
                                    </td>
                                    <td className="text-sm sm:text-base pr-2 py-4 border-slate-300">{item.value}</td>
                                  </tr>
                              ))}
                              </tbody>
                            </table>
                        }
                        <h3 id="map" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>Map</h3>
                        { dest.location.street_address &&
                        <iframe
                            width="100%"
                            height="450"
                            style={{ border:0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyDhhsQ4ci6yQI2GbkW4t1ZJNBU2mOhiGm8&q=" + dest.reactGenerated.map_address}>
                        </iframe>
                        }

                        <h3 id="image_credits" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>Image Credits</h3>
                        <div>
                          <ul>
                            {dest.destinationimage_set.map((image) => (
                              <li className="list-inside list-disc">Credits: <a href={image.credits_url}>{image.description} - {image.credits || "unknown"}</a></li>
                            ))}
                          </ul>
                        </div>
                      </div>
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