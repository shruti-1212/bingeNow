# BingeNow

BingeNow is a digital video store, similar to Netflix, Hulu, and Vudu. This web application allows users to track TV shows and movies, and keep up-to-date with the latest releases. Built using the React.js framework, BingeNow provides a seamless and engaging user experience.
![Screenshot 2025-03-09 210457](https://github.com/user-attachments/assets/0c5f3d40-4b20-4e58-8f75-c6aab41ae93f)
![Screenshot 2025-03-09 210514](https://github.com/user-attachments/assets/a17aa515-30e1-4f4d-b655-a1ad734c2ccf)
![Screenshot 2025-03-09 210527](https://github.com/user-attachments/assets/332ee3e3-ef48-4554-93cc-56d12db2de55)
![Screenshot 2025-03-09 210549](https://github.com/user-attachments/assets/b0ba7ace-1c1b-4426-8504-c9c64ded9bf1)
![Screenshot 2025-03-09 210601](https://github.com/user-attachments/assets/d295ab81-97d8-4c45-8dcf-77f0b52a2b0e)
![Screenshot 2025-03-09 210617](https://github.com/user-attachments/assets/6505700c-a019-48be-a510-8f2f51ba683b)
![Screenshot 2025-03-09 210637](https://github.com/user-attachments/assets/37c61f95-2e5b-49ec-8f84-3bea1f3ba490)


## Features

- **TV Shows and Movies**: Keep a list of featured TV Shows, featured movies, actors spotlight, cinema spotlight, movie/tv show details.
- **Latest Releases**: Stay informed about the latest TV shows and movie releases.
- **Login and registration**: Login and registration for the website. 

## Application Architecture

BingeNow is built  using React.js and is broken up into several pertinent components.

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
