# ping-website-frontend

## Vue/Vuex/Vue-Router

The application is based on a Vue-CLI generated project. It's responsible for querying the backend endpoints to initialize and display pings. The element styling is provided by Bulma CSS.

### main.js

- Configures the router, store, and Vue application.

### App.vue

- The template is comprised of a navbar and router-view, which displays the Ping Component on the root / path.
- Bulma styling is imported via the main style sheet.
- When the component is initialized, it performs an API healthcheck and queries existing ping data.

### Store

- Configures the store functionality. Includes the vuex-map-fields library to handle the get/set functionality required for the table filter input.

### Network

- Configures and mounts the axios instance.
- Could be used to configure any instance related interceptors.

### Components

- The Navbar component is separate from the Ping component.
- The Ping component is comprised of various sub components.
- Each ping component focuses on a specific functionality, and uses Vuex methods as a replacement for Vue's props and emitted events.

### Component Elements
- The elements are based on Bulma styling, which provide the framework for elements that respond to a particular state (displaying a loader/modal, disabling buttons).
- The API calls are stored within the Vuex store, and called via the Vue components.
- While the actions themselves are added to the instance via Vuex mapping methods, the calls happen within an action function, created to configure error handling and loading state.

### Hosted App

Accessible [here](https://ping-website-frontend-92289.herokuapp.com/).