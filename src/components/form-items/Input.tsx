// Import React
import { Dispatch, SetStateAction } from 'react';
import { Text, TextInput, TextStyle } from 'react-native';

interface InputProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  label?: string;
  placeholder?: string;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  isPassword?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url';
}

function Input(props: InputProps) {
  // destruct props
  const { value, onChange, label, placeholder, labelStyle, inputStyle, isPassword, autoCapitalize, keyboardType } =
    props;

  return (
    <>
      {label && <Text style={labelStyle}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={inputStyle}
        secureTextEntry={isPassword}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />
    </>
  );
}

export default Input;
