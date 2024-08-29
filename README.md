# 🗺️ Map-Based Web Application

## 📖 Project
This project is an interactive web application based on maps, developed using **React**, **TypeScript**, and **Leaflet**. The application allows users to visualize a set of locations on a map, with additional features such as a location list, informational popups, and a search bar.

## 🛠️ Technology Stack
- **React (v18.x)**: A JavaScript library for building user interfaces.
- **TypeScript**: A programming language that adds static types to JavaScript, improving code quality.
- **Leaflet**: An open-source JavaScript library for interactive maps, lightweight and easy to use.
- **CSS/SCSS**: Custom styles using pure CSS or SCSS to enhance the user experience.
- **Optional**: Usage of Redux or Context API for global state management.

## 🚀 Features
- **Interactive Map**: Displays a map with multiple marked locations.
- **Informational Popups**: Shows detailed information when clicking on a marker.
- **Sidebar**: Lists all locations, allowing users to focus on a specific marker on the map.
- **Search Functionality**: Filters the locations displayed on the map and sidebar based on user input.
- **Responsive Design**: Fully adaptable to different screen sizes, from mobile to desktop.

## 🗂️ Project Structure
```plaintext
│ 
│    
│    
├── src
│   ├── components
│   │   ├── MapComponent.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SearchBar.tsx
│   │   └── ...
│   ├── contextx
│   │   └── MapContext.tsx   
│   │
|   ├── hooks
│   │   └── useMapContext.tsx  
|   |
│   ├── theme
│   │   └── theme.ts
|   | 
│   ├── data
│   │   └── locations.json
│   ├── styles
│   │   └── main.scss
│   ├── utils  
│   │   └── mapUtils.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
└── README.md
```

## 📦 Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ChristianScarpati/SL-challenge-FE.git
   cd "folder name"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application in development mode**:
   ```bash
   npm start
   ```

4. **Build the application for production**:
   ```bash
   npm run build
   ```

## 📊 How to Use the Application
- **View the Map**: When the application starts, you'll see an interactive map with multiple markers.
- **Explore Locations**: Use the sidebar to explore the available locations.
- **Search Locations**: Type in the search bar to filter the locations visible on the map and sidebar.
- **View Detailed Information**: Click on any marker to view detailed information about that location in a popup.

## 📝 Development Notes
- **Componentization**: Each feature is encapsulated in reusable and well-structured components.
- **TypeScript**: TypeScript has been used to ensure data typing and code safety.
- **Potential Enhancements**: Custom map controls, performance optimizations (lazy loading)


This README covers all necessary aspects to ensure anyone can understand, set up, and use your project. It is also designed to be clear and accessible, facilitating collaboration if others want to contribute to the project. 
