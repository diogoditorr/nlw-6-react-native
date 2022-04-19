import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        borderRadius: 8,
        marginRight: 4,
    },
    text: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        textAlign: 'center',
    }
})