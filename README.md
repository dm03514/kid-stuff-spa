# Simple React


## Data Dump 

```
curl -H 'Content-type: application/json' http://localhost:8000/v0/explore/ | jq . > explore.json
cat explore.json | jq '.results' | jq 'INDEX(.id)' > destinations.json
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://vitejs.dev/guide/).

## Support notes
We are shipping our templates with a very basic React configuration to let you quickly get into the development process, but we don't discourage you from using any other configuration or framework built on the top of React. So, please note that any request dealing with React (e.g. extra features, customisations, et cetera) is to be considered out of the support scope.

For more information about what support covers, please see our (FAQs)[https://cruip.com/faq/].