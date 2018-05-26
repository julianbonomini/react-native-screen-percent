# react-native-screen-percent
React native package to obtain, in pixels, a percentage of the screen

## Instalation

    npm i react-native-screen-percent

## Usage

Import
```javascript
import { wp, hp } from 'react-native-screen-percent'
```

And use it this way:

```javascript
const styles = StyleSheet.create({
  button: {
    width: wp(80),
    height: hp(5)
  }
})
```

Enjoy!