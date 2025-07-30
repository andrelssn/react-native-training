import { TextInput, TextInputProps } from "react-native";

// Styles
import { styles } from "../input/styles";

export function Input({ ...rest}: TextInputProps) {
    return (
        <TextInput style={styles.input} {...rest}/>
    )
}