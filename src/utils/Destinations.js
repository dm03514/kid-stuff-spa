

class Destinations {
    constructor(apiBaseURL) {
        this.apiBaseURL = apiBaseURL;
    }

    async destination(id) {
        const response = await fetch("http://localhost:8000/v0/destinations/" + id + "/")
        const json = await response.json();
        return json;
    }

    async destinations(filters) {
        const response = await fetch("http://localhost:8000/v0/explore/");
        const json = await response.json();
        return json;
    }

    transformDestination(destination) {
        const dest = destination;
        dest.updated_at = new Date(dest.updated_at);

        let images = [];
        const map_address = encodeURIComponent(`${dest.location.street_address}, ${dest.location.city} ${dest.location.state}`);
        if (dest.destinationimage_set) {
            images = dest.destinationimage_set.map((item, i) => {
                return {
                    original: item.image_ref_url
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

const destinations = new Destinations('http://localhost:8000')

export default destinations;