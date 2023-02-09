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
}

function Input(props: InputProps) {
  // destruct props
  const { value, onChange, label, placeholder, labelStyle, inputStyle, isPassword } = props;

  return (
    <>
      {label && <Text style={labelStyle}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={inputStyle}
        secureTextEntry={isPassword}
      />
    </>
  );
}

export default Input;
