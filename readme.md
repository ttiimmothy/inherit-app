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
yarn add react-native-snap-carousel @types/react-native-snap-carousel
yarn add @react-navigation/stack react-native-gesture-handler
# how to use moment.js
# link: https://betterprogramming.pub/using-moment-js-in-react-native-d1b6ebe226d4
yarn add moment
yarn add -D eslint-plugin-unused-imports
yarn add @react-native-picker/picker
```

### cautions

- [ ] react native image using require does not accept variable inside the bracket of require()

- [ ] using react-native-snap-carousel plugin can use useState to set ref to carousel rather than useRef, especially if want to use snapToPrev or snapToNext

- [ ] in magnus theme provider, flexDir="row" equals to row in attributes, flexDir="column" equals to column

- [ ] add initialRouteName in stack navigator/bottom tab navigation if you meet the `onAnimatedValueUpdate with no listeners registered` warning

- `ref: https://github.com/react-navigation/react-navigation/issues/7839`

- [ ] scroll view cannot scroll to bottom can add style to content container style

- `ref: https://stackoverflow.com/questions/45132731/cannot-scroll-to-bottom-of-scrollview-in-react-native`

### prettier

- for html closing tag to jump to newline

add following line in `.prettierrc`

```yaml
"bracketSameLine": false,
```