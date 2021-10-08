# BetterButton
BetterButton is an attempt at simplifying buttons that you get “out of the box” in React Native. The native [Button](https://reactnative.dev/docs/button) element is a joke, and with React Native’s [Pressable](https://reactnative.dev/docs/pressable) component you get more control—but this component blends the two into something that’s reasonable as an out-of-the-box button.

This is intended to be dropped into an existing React Native project, so it doesn’t come bundled with a bunch of dependencies. It relies only on React and React Native. It is also written in TypeScript.

## Definitions
BetterButton is opinionated. It takes the most useful parts of Pressable and blends them with the most useful parts of Button. It is also a wrapper, not a raw class extension, so it is not externally extensible. Modify as you wish.

### title
Required string. This is the title to be used inside the button

### accessibilityLabel
Optional string. If not set, defaults to the value of title

### disabled
Optional boolean. If disabled, it blocks onPress from firing and lowers the button opacity to 50%.

### buttonStyles
Optional style object. Overrides the default styles for the button itself.

### titleStyles
Optional style object. Overrides the default styles for the label inside the button.

### onPress
Required function. A function to fire as a callback of the pressing of the button. Fires on the internal Pressable’s onPress event.
