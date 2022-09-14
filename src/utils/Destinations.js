import exploreData from "../data/explore.json";
import destinationsData from "../data/destinations.json";
import config from '../config';


class StaticLoader {
    destinations(filters) {
        return exploreData;
    }

    destination(id) {
        return destinationsData[id];
    }
}

class APILoader {
    constructor(apiBaseURL) {
        this.apiBaseURL = apiBaseURL;
    }

    async destination(id) {
        const response = await fetch(this.apiBaseURL + "/v0/destinations/" + id + "/")
        const json = await response.json();
        return json;
    }

    async destinations(filters) {
        const response = await fetch(this.apiBaseURL + "/v0/explore/");
        const json = await response.json();
        return json;
    }
}

class Destinations {

    constructor(loader) {
        this.loader = loader;
    }

    async destination(id) {
        return this.loader.destination(id);
    }

    async destinations(filters) {
        return this.loader.destinations(filters);
    }

    transformDestination(destination) {
        const dest = destination;
        dest.updated_at = new Date(dest.updated_at);

        let images = [];
        const map_address = encodeURIComponent(`${dest.location.street_address}, ${dest.location.city} ${dest.location.state}`);
        if (dest.destinationimage_set) {
            images = dest.destinationimage_set.map((item, i) => {
                return {
                    original: item.image_ref_url,
                    description: item.description
                }
            });
        }

        dest.attributes = dest.attributes.map((attr, index) => {
            if (attr.value === 'true') {
                return {
                    name: attr.name,
                    value: '\u2713'
                };
            }

            return attr;
        });

        dest.reactGenerated = {
            map_address,
            images,
        }
        return dest;
    }
}

let loader;
if (config.STATIC_BACKEND_DATA) {
    loader = new StaticLoader();
} else {
    loader = new APILoader(
        'http://localhost:8000'
    );
}

export default new Destinations(loader);