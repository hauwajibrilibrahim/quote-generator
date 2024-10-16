# Islamic Quote Generator

This is a simple **Islamic Quote Generator** web application that displays random quotes with the option to copy them to the clipboard. The app is built using **Node.js**, **Express**, and serves quotes from a JSON file. The user interface is responsive and styled to look beautiful across all devices.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Demo

You can view a live demo of the app here: [Islamic Quote Generator Demo](#)

## Features

- Displays random Islamic quotes on page load or button click.
- Responsive design that works on desktop and mobile devices.
- "Copy Quote" button to copy the current quote to the clipboard.
- Smooth transitions and a modern user interface.
- Built with Node.js and Express for serving quotes.

## Technologies Used

- **Node.js** - JavaScript runtime for building the server-side.
- **Express.js** - Fast, unopinionated, minimalist web framework for Node.js.
- **HTML5/CSS3** - Front-end structure and design.
- **JavaScript (ES6)** - Client-side interactivity.
- **JSON** - Stores the collection of quotes.
- **Clipboard API** - Copies quotes to the clipboard.

## Installation

### Prerequisites

Make sure you have **Node.js** and **npm** installed. You can download and install them from [Node.js official website](https://nodejs.org).

### Steps to Install

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/islamic-quote-generator.git
   ```

2. **Navigate to the project directory:**

   ```
   cd islamic-quote-generator
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

4. **Start the server:**

   ```
   node server.js
   ```

5. **Access the app:**

   Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- On page load, a random Islamic quote will be displayed.
- Click on the **"Get New Quote"** button to generate another random quote.
- Click on the **"Copy Quote"** button to copy the current quote to the clipboard.
- The app is responsive and can be used on both mobile and desktop devices.

## Folder Structure

```
random-quote-generator/
├── public/
│   └── index.html         # Front-end code (HTML,and JS)
    └── Style.css          # Styling Code (CSS)
├── quotes.json            # JSON file containing the quotes
├── server.js              # Express.js server
├── package.json           # NPM dependencies and scripts
└── README.md              # Documentation (this file)
```
