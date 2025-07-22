# 🎬 CineScope

CineScope is a dynamic and visually engaging front-end movie search application that allows users to quickly fetch and display details of their favorite films. Built with **HTML**, **Tailwind CSS**, and **JavaScript**, the app interacts with the **OMDb API** to retrieve accurate movie data based on user input.

Check it out here! 👉

---

## 🚀 Features

### 🔍 Real-Time Movie Search

- Users can enter a movie title and optionally a year and genre.
- The app fetches movie details such as title, poster, genre, director, actors, and ratings from the OMDb API.

### 🧠 Smart Duplicate Handling

- Prevents duplicate movie cards from appearing.
- If a user searches for the same movie again, the corresponding card performs a shake animation instead of being duplicated.

### 🎨 Tailwind-Powered UI

- Responsive layout using **Tailwind CSS**.
- Vibrant gradient buttons and an accessible, mobile-friendly design.
- Custom `Honk` font for branding and visual personality.

### ⚡ Smooth User Interactions

- Includes bounce animation on the search button for visual feedback.
- Implements a custom `shake` animation to indicate duplicates.
- Shows a temporary red "Movie not found!" banner when a search fails.

### 📦 OMDb API Integration

- Fetches and displays:
  - Movie poster
  - Title and year
  - Genre
  - Director and actors
  - Plot summary
  - Ratings from IMDb, Rotten Tomatoes, and Metacritic

---

## 🧠 How It Works

1. **User Input**:

   - Users fill in the "Title" field and optionally the "Year" and "Genre" fields.
   - Pressing Enter or clicking the search button triggers the search.

2. **Data Fetching**:

   - The app builds the API request using the sanitized movie title.
   - It sends a fetch request to the OMDb API and parses the JSON response.

3. **Rendering**:

   - If the movie hasn't been searched before, a new card is dynamically inserted at the top of the results grid.
   - If the movie already exists, a shake animation is triggered on the existing card.

4. **Error Handling**:
   - If the API request fails or returns an invalid result, a red error message briefly appears and then fades out.

---

## 📁 Project Structure

├── index.html # Main HTML structure
├── app.css # Tailwind CSS + custom animations
├── script.js # Main logic and DOM interaction
└── README.md # You're reading it!

---

## 🔧 Tech Stack

- **Frontend**: HTML5, Tailwind CSS, JavaScript (Vanilla)
- **API**: [OMDb API](http://www.omdbapi.com/)
- **Animations**: Custom CSS keyframes (`shake`, `bounce`) and Tailwind transitions

---

## 📝 Future Improvements

- Add search history tracking
- Enable genre/year-based filtering on the rendered results
- Improve accessibility and error messaging
- Connect to trailer API to showcase trailers

---

## 📬 Contact

Created by **Juan Salas**.  
Feel free to reach out with suggestions or improvements!
