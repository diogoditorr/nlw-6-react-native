import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string;
    action?: React.ReactNode;
};

export default function Header({ title, action }: Props) {
    const { secondary100, secondary40, heading } = theme.colors;

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <LinearGradient
            colors={[secondary100, secondary40]}
            style={styles.container}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather name="arrow-left" size={24} color={heading} />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
        </LinearGradient>
    );
}
