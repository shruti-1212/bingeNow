# BingeNow

BingeNow is a digital video store, similar to Netflix, Hulu, and Vudu. This web application allows users to track TV shows and movies, keep up-to-date with the latest releases. Built using the React.js framework, BingeNow provides a seamless and engaging user experience.

## Features

- **TV Shows and Movies**: Keep a list of featured TV Shows, featured movies, actors spotlight, cinema spotlight, movie/tv show details.
- **Latest Releases**: Stay informed about the latest TV show and movie releases.
- **Login nd registration**: Login and registration for the website. 

## Application Architecture

BingeNow is built  using React.js and is broken up into a number of pertinent components.

## Requirements Specification

### Home Page

The Home Page consists of the following sections:

- **Header**: Contains the logo for the website and a navigation bar with links to the sign-up and login pages.
- **Navigation Bar**: May be within the header or a separate area. Includes links to sign-up and login pages, which can be rendered as modal pop-up boxes.
- **Hero Section**: Displays banners and images highlighting the most demanded movies and TV shows of 2021, implemented as a slideshow.
- **Featured Movies Category Section**: Displays 4-6 featured movies.
- **Featured TV Shows Section**: Displays 4-6 featured TV shows.
- **Content Sections**: Contains static data, with a combination of text, headings, and images highlighting the company’s services and exciting details about Hollywood.
- **Footer**: Includes footer menu items, social media links, and other relevant information.

### Movies & TV Show Listing Page

This page lists at least 12 sample movies and TV shows in a grid (4-6 columns). Each item displays a poster and title, which is clickable and navigates to the Movie & TV Show Details page.

### Movies & TV Show Details Page

When a user clicks on a movie or TV show from the listing page, they are navigated to this page. It lists the title, synopsis, small poster, large poster, and prices to rent or purchase the movie or TV show outright.

### Registration & Login Pages

These pages contain well-designed user registration and login forms. They are as pop-up modals, maintaining consistency with the structure, header, nav, and footer of the home page.

## Technologies Used

- **JavaScript**: Main programming language for the application logic.
- **CSS**: Styling the application to provide a visually appealing user interface.
- **HTML**: Structuring the web pages and content.
- **React.js**: Framework used to build the Single Page Application.
