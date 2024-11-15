# Text Editor 

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Application Screenshots](#application-screenshots)
- [GitHub Repository Location (HTTPS)](#github-repository-location)
- [Render Deployment Location (HTTPS)](#render-deployment-location-https)
- [Credits](#credits)
- [Contributions](#contributions)
- [License](#license)


## Description

-Greetings!

The **Text Editor** is a Progressive Web Application (PWA) that utilizes CodeMirror to create and edit code text in JavaScript. This application is also capable of working offline by locally storing user text to database. 

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript server-side.
- **WebPack**: Module-bundler primarily used to optimize the assests and dependencies of JavaScript applications.
- **CodeMirror**: Interactive and versatile text editor instantiated in JavaScript.
- **WorkBox**: An assortment of JavaScript libraries that grant developers the ability to create reliable, high-performance web applications with offline capabilities.
- **Express.js**: A lightweight web application framework designed to efficiently build web and mobile based applications through Node.js. 
- **IDB**:  A library that acts as a wrapper for the IndexedDB database that makes it easier to interact with the database.


## Installation

To run this application locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone github.com/Hammarou/Text-Editor
   ```

2. Navigate to the application directory:
   ```sh
   cd your/chosen/directory/path
   ```

3. Install the dependencies:
   ```sh
   npm run install:prod
   ```

## Usage

To start the application, use the command: 

```sh 
npm start
```

1. Type the JavaScript code into the editor. Code will save into the indexeDB database automatically.

# Application Screenshots

![screenshot1](/client/assets/images/screentshot1.png)
![screenshot2](/client/assets/images/screenshot2.png)


## GitHub Repository Location (HTTPS)

https://github.com/Hammarou/Text-Editor


# Render Deployment Location (HTTPS) 

https://text-editor-9pxj.onrender.com


## Credits

N/A


## Contribution

Feel free to fork this application, submit issues, or make pull requests if you have suggestions or improvements. Contributions are welcome!

## License

This applicatiom is licensed under the [MIT](LICENSE) license.