# Google Books API Search Engine

## Description

A simple and responsive web app that allows users to search for books using the Google Books API. Results include key details like title, author, cover image, and description.

### 🚀 [Launch the Live Site](https://rebeccaw628.github.io/book-app/)

### Tech Stack

- HTML/CSS/SCSS – Layout and styling
- JavaScript – Functionality and DOM manipulation
- Fetch API – Accessing Google Books API

## Goals

- Develop and deploy modular, reusable components and containers using React
- Structure application logic and navigation effectively with React Router
- Design a clean, intuitive, and responsive user interface using HTML and SCSS
- Improve maintainability and readability through organized file structure and separation of concerns
- Gain hands-on experience integrating third-party APIs and managing async data in React

## Outline

This project will require you to use React and Asynchronous programming.
The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

### MVP

Create a page that allows users to search for books. The page should include the following:

- Header section introducing the page
- Form containing a text input and a submit / search button
- A grid of books

When the submit button is clicked you need the request books from the Google books API using the input value as your query string:

- The books that you receive should be rendered in the books grid
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes

Styling (required):

- Use modules for styling, and other SCSS features, like a separate file for palette or variables

Application Design (required):

- Some JavaScript logic, like functions that fetch data, can be moved to their own .js files
- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code

## Bonus (optional, but highly recommended):

- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

### Plan

Setup & UI Design:

- Create a basic layout with a search bar and results section
- Style the app for responsiveness and readability

API Integration:

- Connect to Google Books API using fetch()
- Handle query parameters dynamically based on user input

Search Functionality:

- Capture user input and trigger API call

Fetch Logic:

- Store the input field value in state on button click
- Use a useEffect hook to watch for input changes and make a request to the Google Books API with the query
- Store the response data (book list) in a state variable
- Send the book data to a container component (e.g. BookGrid) for rendering
- Map through the data and pass key info (image, title, authors, description) to individual book card components
- When the input state changes, the component re-fetches and re-renders updated book results

## Issues Addressed

- Resolved responsiveness challenges to ensure consistent layout across various screen sizes and devices
- Managed text overflow issues by applying proper styling to prevent layout breaks and maintain readability, especially for long titles and descriptions
