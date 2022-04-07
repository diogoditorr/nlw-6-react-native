import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {} from "react";
import { theme } from "../../global/styles/theme";

export default function ButtonAdd({...rest}: RectButtonProps) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    );
}
