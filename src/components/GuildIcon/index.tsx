import React from "react";
import { Image, Text, View } from "react-native";
import { CDN_IMAGE } from "../../configs/discordAuth";
import { styles } from "./styles";
import DiscordSvg from "../../assets/discord.svg";
import { theme } from "../../global/styles/theme";

type Props = {
    guildId: string;
    iconId: string | null;
};

export default function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <>
            {iconId ? (
                <View style={styles.container}>
                    <Image
                        source={{ uri }}
                        resizeMode="cover"
                        style={styles.image}
                    />
                </View>
            ) : (
                <View
                    style={[
                        styles.container,
                        { backgroundColor: theme.colors.discord },
                    ]}
                >
                    <DiscordSvg width={40} height={40} />
                </View>
            )}
        </>
    );
}
