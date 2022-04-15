import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },
    container: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        overflow: 'hidden',
        marginTop: 36,
    },
    bar: {
        width: 45,
        height: 3,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        alignSelf: "center",
        marginTop: 13,
    }
})