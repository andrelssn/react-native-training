import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

// Styles
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string,
}

export function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest} style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}