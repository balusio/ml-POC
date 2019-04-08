# ml-POC
POC using mercado-libre API


This Applications has been built in two steps

* UI with **SSR react app**

* API **express.js server** handler that filter and sort MercadoLibre API requests


## Run the App

##### API: 
* go to api folder and intall the dependencies inside the folder `npm i`
* create a .env file inside the api folder  with : 
  * API_PORT
  * API_URL='https://api.mercadolibre.com/' _this is the default test app_
  * **user handler methods**
    * AUTHOR_NAME
    * AUTHOR_LASTNAME
  * NODE_ENV= 'production' 
* the .env file will be handled by (dotenv)[https://www.npmjs.com/package/dotenv]
* run the app with npm run start


#### Development: 
* run `npm i` on the root folder and `npm run start` to use webpack devServer **THE API STEP SHOULD BE RUNNING**

#### SSR: 
* run `npm i` on the root folder and `npm run ssr` to use the node express serving a ssr app **THE API STEP SHOULD BE RUNNING**
 * the entrypoint for the *ssr* server is the file server.js inside the root folder


### File Structure :
* API 
  * the API is using the api/ index.js file to handled all the configuration 
  * Route file is the handler of the routes endpoints
  * Search-results handle all related to the search-items and list results
  * item-result handle all the item detail result
  * _both routes share common functions inside UTILS folder. (price setter and filter sort and order cleanning to send to the ui).

* SSR: 
  * the entry ssr file `server.js` is the handler of the SSR  map via the  `app.js`
  * the SSR consumes the components folder from the UI

* UI: 
  * the ui handles a search-bar trough the whole app
  * the search-result and item-detail components handle HTTP request and used child components to render data
  * the breadcrumb component is also shared in the Search-result and item-detail components 
  
  
