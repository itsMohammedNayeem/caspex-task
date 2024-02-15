# Rick and Morty Character Viewer

This project provides a modern, interactive web application for exploring characters from the "Rick and Morty" API. Built with Next.js, it showcases character details along with the episodes in which they appear. The application leverages Tailwind CSS for styling, ensuring a responsive and visually appealing interface.

## Features

- **Character Grid**: Displays characters in a responsive grid layout. Each character is presented in a card that includes their image and name.
- **Character Detail**: Clicking on a character card navigates to a detailed view of that character, displaying their name, status, species, and a list of episodes they appear in.
- **Episodes UI**: In the character detail view, episodes are listed with modern card designs, showing the episode name and air date.
- **Modern Styling**: Utilizes Tailwind CSS for a modern, responsive design that adjusts beautifully across devices.
- **Error Handling**: Implements error handling for API requests, providing user feedback on loading states and errors.


## Technologies stack

- **Next.js**: A React framework for building single-page JavaScript applications with server-side rendering and route pre-fetching.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Rick and Morty API**: Public API for fetching data about characters and episodes from the "Rick and Morty" series.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/itsMohammedNayeem/caspex-task.git
```

2. Install dependencies:

```bash
cd caspex-task
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Usage

- Navigate to the home page to see a list of episodes.
- Scroll through the list of characters to see their names and images.
- Initially, the first episode is selected and the characters of that episode are displayed.
  - Click on the episode name to view the characters of that episode.
  - Unselect the episode to view the characters of first episode.
- Click on a character to view more details about that character.

## Code Structure

- `app/components/EpisodeList.tsx`: React component for displaying the list of episodes and handling episode selection.
- `app/components/CharacterGrid.tsx`: React component for displaying the grid of characters.
- `app/components/CharacterCard.tsx`: React component for displaying a single character card.
- `app/components/CharacterDetailCard.tsx`: React component for displaying a single character detail.
- `app/types.ts`: TypeScript type definitions for episode and character data structures.
- `app/lib/api.ts`: Functions for fetching episode data from the Rick and Morty API.
- `app/page.tsx`: Entry point of the application, renders the `EpisodeList` component.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## Screenshot

<img width="1292" alt="Screenshot 2024-02-08 at 11 40 49 PM" src="https://github.com/itsMohammedNayeem/caspex-task/assets/127741549/c8f681ce-a50e-4ac7-b0c5-0a9fc45e4bc2">

<img width="1468" alt="Screenshot 2024-02-15 at 11 44 35 PM" src="https://github.com/itsMohammedNayeem/caspex-task/assets/127741549/216a7192-2714-4285-85d7-5a124e2d4711">

<img width="1468" alt="Screenshot 2024-02-15 at 11 44 47 PM" src="https://github.com/itsMohammedNayeem/caspex-task/assets/127741549/91e2292c-24ff-4d74-b5fd-8d5a5bf7b353">
