import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export default function Load() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color={theme.colors.primary}
            />
        </View>
    );
}
