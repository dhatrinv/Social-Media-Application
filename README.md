# Social-Media-Application

## Overview

This project outlines a complete and responsive social media application developed using the MERN stack (MongoDB, Express.js, React, and Node.js). The application adheres to a three-tier architecture and incorporates unit tests for each tier. It exemplifies a full-stack application leveraging modern web technologies to deliver a responsive and engaging social media experience.

## Features

- **User Registration**: Thorough validation with the option to upload a profile image.
- **Authentication**: Users can register and log in with their email and password.
- **Home Page**: Clean, user-friendly interface with various widgets.
- **User Profiles**: Display user profile information.
- **Posts**:
  - Create, edit, and delete posts.
  - Add images to posts.
- **News Feed**:
  - Display all posts.
  - Like or dislike posts.
  - View comments on posts.
- **Friend Functionality**:
  - Add and remove friends.
  - View friends' profiles.
  - Post on other users' walls.

## Technologies Used

- **MongoDB**: NoSQL database for storing user data and posts.
- **Express.js**: Web application framework for building the server-side application.
- **React**: Front-end library for building the user interface.
- **Node.js**: JavaScript runtime for executing server-side code.

## System Architecture

The application follows a three-tier architecture:

1. **Presentation Tier**: User interface built with React.
2. **Logic Tier**: Application logic implemented using Express.js and Node.js.
3. **Data Tier**: Data storage and retrieval handled by MongoDB.

## Testing

Unit tests are incorporated for each tier to ensure reliability and maintainability.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd your-repo-name
   ```
3. **Install dependencies for the server and client**:
   ```sh
   npm install
   cd client
   npm install
   ```
4. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the necessary environment variables (e.g., MongoDB URI, JWT secret).

5. **Run the application**:
   ```sh
   npm run dev
   ```

## Usage

- Register a new account or log in with an existing account.
- Explore the home page and interact with various widgets.
- View and edit your profile information.
- Create, edit, and delete posts with or without images.
- Like, dislike, and comment on posts in the news feed.
- Add and remove friends, view their profiles, and post on their walls.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

---


