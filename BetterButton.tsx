import React, { FunctionComponentElement } from 'react'
import {
  GestureResponderEvent,
  Pressable,
  Text,
} from 'react-native'
import { styles } from './styles'

interface Props {
  title: string;
  accessibilityLabel?: string;
  disabled?: boolean;
  buttonStyles?: Record<string, any>;
  titleStyles?: Record<string, any>;
  onPress: (event: GestureResponderEvent) => void;
}

const BetterButton: (props: Props) => FunctionComponentElement<unknown> = (props: Props) => {
  const {
    title,
    accessibilityLabel,
    disabled,
    buttonStyles,
    titleStyles,
    onPress,
  } = props

  return (
    <Pressable
      style={({ pressed }) => [
        styles.betterButton,
        buttonStyles,
        { opacity: disabled ? 0.5 : ( pressed ? 0.8 : 1 ) },
      ]}
      onPress={disabled ? () => {} : onPress}
      accessibilityLabel={accessibilityLabel ? accessibilityLabel : title}
    >
      <Text
        style={[
          styles.buttonTitle,
          titleStyles,
        ]}>
        {title}
      </Text> 
    </Pressable>
  )

}

export default BetterButton