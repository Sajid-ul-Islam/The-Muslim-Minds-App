# The Muslim Minds App

An Expo React Native mobile application for **The Muslim Minds** — a platform dedicated to fostering critical intellectual discourse, philosophy, history, political thought, decolonial studies, and Islamic tradition.

## Features

- 🏠 **Home Screen**:
  - Hero featured article with dynamic gradients
  - Search articles by title, author, or category
  - Announcement banner for the Diploma Program 2026
  - Recent articles feed
  - Writers & Speakers spotlight with profiles and roles
  - Featured posts collection
- 📂 **Topics Screen**:
  - Interactive categories grid (Philosophy, History, Literature, Contemporary Analysis, Political Philosophy, Geopolitics, Decolonial Thought, Islamic Thought)
  - Category-based article filtering with instant clearing
- ▶️ **Videos Screen**:
  - Featured lecture/interview hero player card with "LIVE" status badge
  - Video library with duration badges, view counts, and speaker credits
- ℹ️ **About Screen**:
  - Mission statement and intellectual discourse vision
  - Platform statistics (100+ Articles, 50+ Videos, 30+ Speakers)
  - Focus areas overview
  - Diploma Program 2026 highlight card
  - Direct connect channels (Website, Email, Social, Podcast)
  - **App Updates section**: Shows current app version, OTA channel status, and manual update trigger
- 📖 **Article Detail View**:
  - Rich header banner with back and native share buttons
  - Author attribution, publication date, and category tags
  - Formatted article body with pull-quotes and related tags
  - Reader actions and bookmarking toggle
- 🧭 **Native Navigation & UI**:
  - Clean bottom navigation tab bar with smooth transitions
  - Safe-area awareness and custom-styled status bar
  - Non-intrusive in-app **OTA Update Banner** alerting users when an update is downloaded and ready to apply

## Over-The-Air (OTA) Updates

The app is equipped with **`expo-updates`** for Over-The-Air updates. This allows delivering bug fixes, UI improvements, and content additions instantly to users without requiring a store re-submission.

### How OTA Works
1. **Automatic Check On Launch**: On startup, the app silently checks for new updates based on the configured runtime version policy (`appVersion`).
2. **Background Download**: If an update is detected, it is downloaded in the background.
3. **In-App Notification**: An update banner (`UpdateBanner`) appears offering a 1-tap "Restart" button to apply the update immediately via `Updates.reloadAsync()`.
4. **Manual Check**: Users can also go to the **About** screen and tap **"Check for Updates"** at any time.
5. **Development Safety**: In development mode (`__DEV__`) or Expo Go, OTA updates are gracefully bypassed so as not to interfere with local Metro hot reloading.

### Publishing OTA Updates with EAS

To publish updates to your users using [EAS Update](https://docs.expo.dev/eas-update/introduction/):

1. **Configure EAS Project (First time)**:
   ```bash
   npx eas-cli login
   npx eas-cli update:configure
   ```
2. **Publish to Preview Channel**:
   ```bash
   npm run update:preview
   ```
3. **Publish to Production Channel**:
   ```bash
   npm run update:prod
   ```

## Tech Stack

- **Framework**: [Expo](https://expo.dev) (SDK 57)
- **Language**: TypeScript / React 19
- **Core**: React Native (0.86.3) & React Native Web
- **OTA Updates**: `expo-updates` & EAS Update (`eas.json`)
- **Icons**: `@expo/vector-icons` (Ionicons)
- **Styling & Effects**: `expo-linear-gradient`, `react-native-safe-area-context`

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Expo Go app on your iOS / Android device (or an emulator/simulator)

### Installation

```bash
npm install
```

### Running the App

Start the Expo development server:

```bash
npx expo start
```
or
```bash
npm start
```

- Press `a` to open in Android emulator / connected device.
- Press `i` to open in iOS simulator.
- Press `w` to open in your web browser.
- Scan the displayed QR code with the **Expo Go** app on your phone.

### Type Check

```bash
npm run typecheck
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
