# Vue.js Pokemon Application

A Vue.js application for displaying the original 151 pokemons. Also includes a small minigame for guessing pokemon names.

| Overview page    | Minigame page |
| ---      | ---       |
| <img width="500" alt="overview" src="https://user-images.githubusercontent.com/24246001/115999796-801abc00-a5ed-11eb-9f58-7bada408ae44.png"> | <img width="500" alt="game" src="https://user-images.githubusercontent.com/24246001/115999812-8b6de780-a5ed-11eb-9098-b944a7c26612.png"> |

## Description

Uses Vue.js with axios for consuming APIs and bootstrap for styling and simple components. Uses vue-router for routing between views.

## Features
- Shows all pokemons in a table and colors each row by their first type.
- Allows _sorting_ pokemons by number, name or type
- Allows _filtering_ by type.
- Click a pokemon to see a more detailed view (currently only name, icon, type).
- _Catch 'em all!_ minigame. Click on _Catch 'em all!_ and test your pokemon-knowledge by guessing the name of pokemons based on their image. Keeps track of correct and wrong guesses.

## Project setup
```
npm install
npm run serve
```
