import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        marginRight: 4,
        paddingHorizontal: 16,
        paddingTop: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
    },
    text: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        textAlignVertical: 'top',
    }
})