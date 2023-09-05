# Nuxt_Pokemon
Pokémon Information Website
Introduction
This is a Pokémon information website built using Vue.js as the front-end framework and a JavaScript back-end API that accesses the Pokémon API at https://pokeapi.co/. 
The project is implemented with Nuxt.js to handle both the front-end and back-end aspects.

Technologies Used
Vue.js
Nuxt.js
JavaScript
PokeAPI (https://pokeapi.co/)

Prerequisites
Visual Studio Code
Node.js installed on your machine.
Git for version control.

Installation
1.Clone the repository to your local machine:
  git clone https://github.com/your-username/pokemon-info-website.git
2.Install Node.js: Ensure you have Node.js installed on your machine.
3.Install Vue CLI: If you haven't already, install the Vue CLI globally by running:
4.Create a new Nuxt.js project:
    npx create-nuxt-app pokemon-website
5.Navigate to the project directory:
  cd pokemon-website

Getting Started
Follow these steps to set up and run the project locally:
Step 1: Fetch Pokémon Data from PokeAPI
1.Created a JavaScript back-end API "server.js" using Express.js framework. This API will serve as a proxy to fetch data from the PokeAPI (https://pokeapi.co/). 
2.I have set up route "/routes/index.js" to retrieve Pokémon data as needed.
3.Use Axios or another HTTP client to make requests to the PokeAPI from your Express.js server. Parse the responses and send the data to the front end.
Step 2: Implement the Front-End
1.Created Vue components for the landing page("index.vue") and profile page("ProfilePokemon.vue")
2.Build the landing page to display a list of 60 Pokémon with names and thumbnails. Fetched this data from your back-end API.
3.Implemented a custom search filter to limit the displayed list by Pokémon name as the user types in the search input field.
4.Set up routing in Nuxt.js "/routes/index.js" so that clicking on a Pokémon on the landing page routes the user to the profile page for that Pokémon.
5.On the profile page, displayed a larger picture of the Pokémon along with its name, height, weight, and abilities. 
6.Formated the abilities as a comma-delimited string with each ability starting with a capital letter (e.g., "Abilities: Overgrow, Swarm, Steadfast").
7.Start the development server:
npm run dev
8.Open your web browser and visit http://localhost:3000 to access the Pokémon information website.
Step 3: Styling
Styled the project using plain CSS without using any styling library for making the site easy to understand and visually appealing. 
Step 4: Testing
Tested the application thoroughly to ensure that all features are working as expected.
Step 5: Documentation
1.Created a README.md file that provides information on how to set up, run, and use your Pokémon information website.
Step 6: Screenshots
Included Screenshots to view the output.


