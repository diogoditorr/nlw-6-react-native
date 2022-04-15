import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 360,
    },
    content: {
        marginTop: -50,
        paddingHorizontal: 50,
    },
    title: {
        marginBottom: 16,
        color: theme.colors.heading,
        fontSize: 40,
        fontFamily: theme.fonts.title700,
        textAlign: 'center',
        lineHeight: 40,
    },
    subtitle: {
        marginBottom: 64,
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        lineHeight: 25,
    }
});
