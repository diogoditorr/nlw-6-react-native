import { theme } from "./../../global/styles/theme";
import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        width: "100%",
        height: 234,
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },
    subtitle: {
        marginTop: 12,
        color: theme.colors.heading,
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        lineHeight: 21,
    },
    members: {
        marginLeft: 24,
        marginTop: 24,
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
    }
});
