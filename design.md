# Design

## Overview

Spotipuy is designed as a Spotify-inspired music streaming web app. The interface will feel familiar with a dark theme, vibrant accent colors, a left-side navigation panel, a scrollable home page, and a persistent music player docked at the bottom.

## Pages

### Home

- Scrollable, full-height landing area.
- Top section shows featured tiles, daily mixes, and personalized playlists.
- Sections include:
  - "Made for You": daily mixes and personal playlists.
  - "Recently Played": cards for recent songs, albums, podcasts, or playlists.
  - "Popular Playlists": curated playlists like "Chill Vibes" and "Workout".
  - "New Releases": album/playlist cards and large banners.
- Each card includes cover art, title, subtitle, and a play button overlay.
- The layout uses horizontal carousel rows inside a vertical page flow.

### Search

- Search input at top with suggestions and recent search chips.
- Grid of category cards: playlists, genres, moods, podcasts.
- Results view with sections for songs, artists, albums, playlists.
- Search page has a dynamic hero area and large banner artwork.

### Library

- Displays saved playlists, albums, and artists.
- Tabs or sub-navigation for "Playlists", "Artists", "Albums".
- Each library card shows cover art, name, and item count.
- A simple top bar includes "Create playlist" and filter actions.

### Liked Songs

- A dedicated list page for saved tracks.
- Table-style layout with columns for track number, title, artist, album, and duration.
- Large header area with playlist artwork placeholder and description.
- Controls for shuffle, play, and sort.

## Navigation

- Fixed vertical sidebar on the left.
- Navigation items: Home, Search, Library, Liked Songs.
- Use icon+text buttons for easy scanning.
- Secondary items below include "Create Playlist" and "Favorites" if needed.

## Playlist Experience

- Playlist pages show a large banner image and playlist details.
- Include a track list with play controls, heart icon, and options menu.
- Use cards and list rows for playlists like daily mixes and personal mixes.
- Playlist list should feel dense and easy to scan.

## Music Player UI

- Persistent bottom playback bar across all pages.
- Left section: album artwork, track title, artist name, and favorite button.
- Center section: playback controls (previous, play/pause, next), progress bar, elapsed and remaining time.
- Right section: volume control, queue, device selector, and shuffle/repeat toggles.
- The player bar should have a subtle elevated background and fit the dark UI.

## Visual Style

- Base theme: dark background with black and charcoal shades.
- Accent: bright green, teal, or blue for buttons, progress, and highlights.
- Typography: clean sans-serif with strong hierarchy for titles.
- Cards: rounded corners, soft shadows, glass-like translucency for hovered items.
- Imagery: large playlist and album covers, gradient overlays, subtle motion on hover.

## Colour Palette

- Background:
  - `#0F1419` — main app background
  - `#12181F` — secondary surfaces and panels
  - `#212B35` — cards and content containers
- Text:
  - `#FFFFFF` — primary text
  - `#B3B9C4` — secondary text
  - `#5A6772` — muted labels and meta text
- Accent:
  - `#1DB954` — primary action / play / highlight
  - `#54B2F2` — secondary accent and interactive states
  - `#8B63FF` — gradient accent for featured cards
- Feedback:
  - `#FAFF00` — subtle notification or badge highlight
  - `#E25822` — error / inactive state accent

## Typography

- Primary font: `Inter` or `Spotify Circular` style sans-serif.
- Secondary font: `Roboto` or `Noto Sans` for body text and metadata.
- Scale:
  - Display / page headings: `56px` / `48px`
  - Section headings: `28px` / `24px`
  - Card titles: `18px` / `16px`
  - Body text: `14px`
  - Metadata / labels: `12px`
- Weight:
  - Bold / black for primary headings and active labels.
  - Medium for buttons and card titles.
  - Regular for all supporting body copy.
- Spacing: generous vertical spacing with 24px+ between major sections, 16px between cards.

## Visual Assets

- Cover art cards: square or rounded square album/playlist imagery.
- Hero banners: large gradient-backed headers with overlay text.
- Icons: thin line icons for navigation and controls, filled icons for active states.
- Overlays: dark gradient overlays on top of images for readability.
- Motion: subtle hover transforms, fade-ins, and slide transitions for cards.

## Fonts

- Web font stack:
  - `font-family: "Inter", "Roboto", "Helvetica Neue", Arial, sans-serif;`
- Recommended font sources:
  - Google Fonts: `Inter` and `Roboto`
  - Self-hosted if you want a more premium `Spotify Circular` look with a similar geometric sans-serif.
- Use `font-feature-settings: "kern" 1, "liga" 1` for polished text rendering.

## Behavior

- Home page scrolls vertically with sticky header/navigation.
- Sections are separated with spacing and headings.
- Cards and playlists are interactive on hover.
- The bottom player remains visible and accessible at all times.
- Responsive design should adapt to narrower screens with collapsible sidebar.

## Notes

This document defines the user-facing layout and UI structure for Spotipuy. Implementation should reflect Spotify-style navigation, playlist-centric content, and a strong bottom music player presence.