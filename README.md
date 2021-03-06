# Ionic 2 project seed

This project is a custom seed for Ionic 2 applications.

## How to use this seed

Clone this repo. remove `.git` folder and init your new repo.

You may encounter errors like "`Current working directory is not a Cordova-based project`".
This is caused by the `www` folder that is missing initially and is easily resolved by running the following commands.

```bash
$ npm install
$ ionic state reset
```

This should resolve the issues and make your project ready for use.

## This project includes...

 * Push notifications (via Google Firebase)
 * A translation library. Visit [ng2-translate](https://github.com/ocombe/ng2-translate) for more information
 * A component to add a scroll shadow to an element
 * Providers
    * to manage push notifications
    * to make API requests
    * to make and cache API requests
    * to store data in phone's storage
    * to open a URL in a browser popup (uses InAppBrowser or SafariViewController)


## Notes

For push notifications to work some manual steps need to be completed:

 * replace 'src/assets/google-services.json' and 'src/assets/GoogleService-Info.plist' with correct files
 * Android:
    * All files are copied automagically!
 * iOS:
    * After creating an iOS build folder:
        * copy 'platforms/ios/GoogleService-Info.plist' into the root of the Xcode project (drag/drop).
        * enable push notification is Xcode project
