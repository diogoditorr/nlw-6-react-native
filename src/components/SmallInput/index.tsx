import { View, Text, TextInputProps, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

export default function SmallInput({ ...rest }: TextInputProps) {
    const { secondary50, secondary75 } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary75, secondary50]}
        >
            <TextInput style={styles.text} keyboardType={"numeric"} {...rest} />
        </LinearGradient>
    );
}
