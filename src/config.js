


let STATIC_BACKEND_DATA = false;
if (process.env.STATIC_DATA === '1') {
    STATIC_BACKEND_DATA = true;
}


const config = {
    STATIC_BACKEND_DATA,
    BASE_API_URL: 'http://localhost:8000'
}

export default config;