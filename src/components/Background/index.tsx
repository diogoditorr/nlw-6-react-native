import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
    children: React.ReactNode;
    invertedColors?: boolean;
}

export default function Background({ children, invertedColors }: Props) {
    const { secondary80, secondary100 } = theme.colors

    return (
        <LinearGradient
            style={styles.container}
            colors={invertedColors ? [secondary100, secondary80] : [secondary80, secondary100]}
        >
            {children}
        </LinearGradient>
    );
}
