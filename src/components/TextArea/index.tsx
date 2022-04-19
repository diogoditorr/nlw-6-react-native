import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export default function TextArea({ ...rest }: TextInputProps) {
    const { secondary50, secondary75 } = theme.colors;
    
    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary75, secondary50]}
        >
            <TextInput style={styles.text} {...rest} />
        </LinearGradient>
    );
}
