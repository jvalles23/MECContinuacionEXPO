import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ButtonStyles, buttonStyles } from './ButtonStyles';

interface ButtonProps {
  label: string;
  onPress: () => void;
  kind: keyof ButtonStyles;
  size?: keyof ButtonStyles;
  customStyle?: ButtonStyles;
  icon?: string;
}

const Button = ({
  label,
  onPress,
  kind,
  size,
  customStyle,
  icon,
}: ButtonProps) => {
  const buttonStyle = {
    ...buttonStyles.button,
    ...buttonStyles[kind],
    ...buttonStyles[size],
    ...(customStyle || {}),
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {icon && (
        <Icon
          name={icon}
          size={buttonStyle.fontSize}
          style={{
            color: buttonStyle.color,
            fontWeight: buttonStyle.fontWeight,
          }}
        />
      )}
      <Text
        style={{
          color: buttonStyle.color,
          fontWeight: buttonStyle.fontWeight,
          fontSize: buttonStyle.fontSize,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
