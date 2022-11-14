# WITT | Where is This Thing

Have you ever asked yourself: "Where is this thing?". I've asked this question too many times :)

The basic idea of this app to help search items in home. You can configure rooms of your house, storages in rooms and items in storages.

Super complacated alghoritm (probably) of search lets you find things fast. And you can learn where they are. 

## Installation

Clone this repository to your local folder.

```git clone https://github.com/EdVenty/WITT```

Then install Node dependencies.

```npm i```

Install expo-cli module.

```npm i -g expo-cli expo```

## Running locally

To run development server you can use:

```npm start```

or

```npx expo start```

## Connecting via phone

### Android

Download Expo GO app: https://expo.dev/client. Click `Scan QR code` and scan QR from console. If the code not shown press `c` and the code appears.

### IOS

Not tested. But I think the process is similar to Android.

### Web

Click `w` in console to run web server.

## Building applications

## Android

First, install `eas-cli` utility.

```npm i -g eas-cli```

Then, create an Expo account here: https://expo.dev/signup.

Login into Expo account in console

```npx expo login```

To check if you've successfully logged in

```npx expo whoami```

And, finally, request build

```npx eas build -p android --profile preview```

Building information got from [here](https://dev.to/chinmaymhatre/\how-to-generate-apk-using-react-native-expo-kae).

## Known bugs:

1) Web not working.
2) Compiled Android apk not working properlly (crashes).
