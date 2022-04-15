import { View, Text, TextInputProps, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function SmallInput({ ...rest }: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            keyboardType={"numeric"}
            {...rest}
        />
    );
}