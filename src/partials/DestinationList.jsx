import {React, Component} from 'react';
import destinations from "../utils/Destinations";

export default class DestinationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destinations: [],
      error: null,
      sub_region: props.sub_region,
    };
  }

  async componentDidMount() {
      try {
          const data = await destinations.destinations();
          this.setState({
              destinations: data.results
          })
      } catch (e) {
          alert(e);
          this.setState({
              error: e
          })
      }
  }


  render() {

    return (
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
                  <h1 className="h1 mb-4">What to do with kids near <span style={{textTransform: 'capitalize'}}>{this.state.sub_region}</span>!</h1>
                  <p className="text-xl text-gray-600"><a href="/locations">(Or checkout additional <span className="text-blue-500">locations</span>)</a></p>
              </div>

              {/* Main content */}
              <div className="md:flex md:justify-between">
                {/* Articles container */}
                <div className="md:grow -mt-4">
                  {this.state.destinations.map((item, i) => (
                  <article className="flex items-center py-4 border-b border-gray-200">
                    <div>
                      <header>
                        <h2 className="h4 mb-2">
                          <a href={'/destinations/' + item.id + '/'} className="hover:underline">{ item.name } - {item.location.city}, {item.location.state}</a>
                        </h2>
                      </header>
                      <div className="text-lg text-gray-600 mb-4">
                          {item.description}
                      </div>
                      <footer className="text-sm">
                        <div className="flex items-center">
                          <div>
                            {item.tags.map((tag) => (
                                <span className="text-black-600">{tag} </span>
                            ))}
                          </div>
                        </div>
                      </footer>
                    </div>
                    <a href={'/destinations/' + item.id + '/'} className="block shrink-0 ml-6">
                      <span className="sr-only">Read more</span>
                      <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                      </svg>
                    </a>
                  </article>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
    );
  }
}
