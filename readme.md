### packages

<!-- devDependencies and dependencies are important to distinguish when you are deploying npm packages to npm store -->
```bash
yarn add @react-native-firebase/app
# navigation don't need to modify the android folder can lead to be functional
yarn add @react-navigation/native
yarn add @react-navigation/bottom-tabs
yarn add react-native-screens react-native-safe-area-context
yarn add redux react-redux @types/react-redux
yarn add redux-thunk
# native-icon needs to add some lines in both ios and android
yarn add react-native-vector-icons @types/react-native-vector-icons
chakra ui cannot be used in react native currently
# link: https://dev.to/redbar0n/how-to-use-chakraui-on-native-mobile-53hg (updated on 16 Oct 2021)
# so use magnus
# link: https://magnus-ui.com
yarn add react-native-magnus
yarn add color react-native-animatable react-native-modal deepmerge validate-color
```