# ClipLink

- ClipLink is a URL shortener that allows users to generate short, easy-to-share links for any website. Users can also view all previously created short URLs.

Features

 - Convert long URLs into short, shareable links

 - Prevent duplicate short URLs

 - View all previously generated short URLs

 - User-friendly UI with a clean design

 - Responsive layout using Tailwind CSS

Tech Stack

 - Frontend: Next.js, React, Tailwind CSS

 - Backend: Next.js API routes, MongoDB (Mongoose)

 - Database: MongoDB Atlas
   
How to Run the Project

 1️ Clone the repository
    - git clone https://github.com/your-username/clipLink.git
    - cd clipLink
 2 Install dependencies
    - npm install
 3 Set up environment variables
   Create a .env.local file in the root directory and add:
    - MONGODB_URI=your_mongodb_connection_string
    - NEXT_PUBLIC_HOST=http://localhost:3000
 4 Run the development server
    - npm run dev
 Open http://localhost:3000 to see the app.
