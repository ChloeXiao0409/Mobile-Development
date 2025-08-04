# React Native + Expo Development Setup Guide
 

## 📱 Project Overview

This is an Expo Router example project built with:
- [**Expo SDK 53**](https://docs.expo.dev/) with the new architecture enabled
- **React Native 0.79.2** 
- **Expo Router 5.0** for file-based navigation
- **Tamagui** for cross-platform UI components
- **TypeScript** for type safety
- **Biome** for linting and code formatting

## 🖥️ System Requirements

### All Platforms
- **Node.js**: Version 22 LTS (required)
- **Yarn**: Version 4.4.0 or newer (required for Tamagui)
- **Git**: Latest version
- **Code Editor**: VS Code (recommended) or your preferred editor
 

## 🛠️ Development Environment Setup

### 1. Install Node.js and Package Manager

#### Option A: Using Node Version Manager (Recommended)

**Windows (using nvm-windows):**
```bash
# Download and install nvm-windows from: https://github.com/coreybutler/nvm-windows
# Then run:
nvm install 22
nvm use 22
```

**macOS/Linux (using curl) Recommended:**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Restart terminal, then:
nvm install 22
nvm use 22
```
or using homebrew. **Please note that you may need to add nvm initialization to your shell profile (e.g., `.bashrc`, `.zshrc`). Check the [brew nvm documentation](https://formulae.brew.sh/formula/nvm) for details.**
```bash
brew install nvm
```

#### Option B: Direct Installation
Download from [nodejs.org](https://nodejs.org/) and install Node.js 22.x LTS

### 2. Install Yarn Package Manager
```bash
# Install Yarn globally (version 4.4.0+ required for Tamagui)
corepack enable
corepack prepare yarn@stable --activate

# Verify installation (make sure greater than 4.4.0 e.g. 4.9.0)
yarn --version
```

### 3. Install Expo CLI
```bash
npm install -g @expo/cli
```
 

## 📱 Mobile App Installation

### Expo Go (For Development)
Install Expo Go on your physical device:
- **iOS**: [App Store](https://apps.apple.com/app/expo-go/id982107779)
- **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Development Builds (Recommended for Production)
[Development builds](https://docs.expo.dev/develop/development-builds/create-a-build/) provide more native functionality than Expo Go. We'll set this up later in the semester using EAS Build.  

## 🔐 Account Setup

### 1. Expo Account
Create from Expo website: https://expo.dev/signup

Remember to login on your terminal when you need to run EAS build.
```bash
npx expo login
```


### 2. Apple Developer Account (Optional for future iOS Development)
- **Required for**: Physical device testing, App Store deployment
- **Cost**: $99/year
- **Setup**: [Apple Developer Program](https://developer.apple.com/programs/)

### 3. Google Play Console (Optional for future Android Development)
- **Required for**: Play Store deployment
- **Cost**: $25 one-time fee
- **Setup**: [Google Play Console](https://play.google.com/console/)

## 🚀 Project Installation & Running

### 1. Clone and Install Dependencies
```bash
# Clone the repository
git clone https://github.sydney.edu.au/COMP5216-2025-S2/Teaching-Materials-Internal.git
cd Teaching-Materials-Internal/expo-starter

# Install dependencies
yarn install
```

### 2. Start Development Server
```bash
# Start with cache cleared (recommended)
yarn start

# Alternative commands:
yarn android    # Run on Android
yarn ios        # Run on iOS (macOS only)
yarn web        # Run on Web
```

### 3. Running on Devices

#### Physical Device (Expo Go)
1. Start the development server: `yarn start`
2. Scan the QR code with:
   - **iOS**: Camera app or Expo Go
   - **Android**: Expo Go app

#### iOS Simulator (macOS only - Optional)
**Note**: With Expo, you can test on your physical device using Expo Go instead of simulators.

If you want to use iOS Simulator (requires Xcode):
```bash
# Start development server
yarn start

# Press 'i' in terminal to open iOS simulator
```

#### Android Emulator (Optional)
**Note**: With Expo, you can test on your physical device using Expo Go instead of emulators.

If you want to use Android Emulator (requires Android Studio):
```bash
# Start development server
yarn start

# Press 'a' in terminal to open Android emulator
```

## 🎨 Code Formatting & Linting
Feel free to use Biome or Prettier to format your code.

## 🏗️ EAS Build Setup (For Later in Semester)

EAS (Expo Application Services) Build allows you to create production-ready native binaries.

### 1. Install EAS CLI
```bash
npm install -g eas-cli
```

### 2. Configure EAS Build
```bash
# Initialize EAS configuration
eas build:configure
```

### 3. Build Commands (Future Use)
```bash
# Development build
eas build --profile development --platform ios
eas build --profile development --platform android

# Production build
eas build --profile production --platform all
```

## 📚 Useful Development Resources

### Official Documentation
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/develop/file-based-routing/)
- [Tamagui Documentation](https://tamagui.dev/)

### Design Resources
- [Tamagui Templates](https://tamagui.dev/docs/intro/themes)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Native UILib](https://wix.github.io/react-native-ui-lib/)
- [Lucide Icons](https://lucide.dev/) (used in this project)
- [Mobbin Design](https://mobbin.design/) (inspiration for UI components)
- [Dribbble](https://dribbble.com/) (UI inspiration)
- [Figma](https://www.figma.com/) (design tool)
- [Lunacy](https://icons8.com/lunacy) (Figma alternative)

### Development Tools
- [Expo Dev Tools](https://docs.expo.dev/workflow/development-mode/) 
- [Flipper](https://fbflipper.com/)
- [Reactotron](https://github.com/infinitered/reactotron)

### Learning Resources
- [React Native Express](https://www.reactnative.express/)
- [Expo Blog](https://blog.expo.dev/)
- [React Native Community](https://reactnative.dev/community/overview)

## 📁 Project Structure

```
expo-router/
├── app/                    # App routes (file-based routing)
│   ├── _layout.tsx        # Root layout
│   ├── (tabs)/           # Tab navigator group
│   │   ├── _layout.tsx   # Tab layout
│   │   ├── index.tsx     # Home tab
│   │   └── two.tsx       # Second tab
│   ├── modal.tsx         # Modal screen
│   └── +not-found.tsx    # 404 page
├── assets/               # Static assets
│   ├── fonts/           # Custom fonts
│   └── images/          # Images and icons
├── constants/           # App constants
├── app.json            # Expo configuration
├── package.json        # Dependencies and scripts
├── biome.json          # Biome linting/formatting config
└── tamagui.config.ts   # Tamagui theme configuration
```

## 🔧 Troubleshooting

### Common Issues

#### Metro bundler issues
```bash
# Clear cache and restart
yarn start --clear
# or
npx expo start --clear
```

#### iOS build issues
```bash
# Clean iOS build
cd ios && xcodebuild clean && cd ..
# Reinstall pods
cd ios && pod install && cd ..
```

#### Android build issues
```bash
# Clean Android build
cd android && ./gradlew clean && cd ..
```

#### Node modules issues
```bash
# Clean install
rm -rf node_modules yarn.lock
yarn install
```

### Platform-Specific Troubleshooting

#### Windows
- Ensure Windows Subsystem for Linux (WSL) is not interfering
- Run PowerShell as Administrator if needed
- Check Windows Defender exclusions for project folder

#### macOS
- Update Xcode and Command Line Tools
- Check simulator device availability

#### Linux
- Install required build dependencies 
 

## 🎯 Next Steps

1. **Complete Environment Setup**: Follow the setup instructions for your platform
2. **Run the Project**: Get the example app running on your device/simulator
3. **Explore the Code**: Familiarize yourself with the project structure
4. **Learn Expo Router**: Understand file-based routing
---
 
