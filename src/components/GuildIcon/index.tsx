import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function GuildIcon() {
    const uri = 'https://cdn.vox-cdn.com/thumbor/8OLcqMqbLR7Hwv91eodAB1Q94pU=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19816263/acastro_200318_1777_discord_0001.0.jpg';
    return (
        <Image 
            source={{ uri }}
            resizeMode="cover"
            style={styles.image} 
            />
    );
}
