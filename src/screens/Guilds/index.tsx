import React from "react";
import { FlatList, Text, View } from "react-native";
import Guild, { GuildProps } from "../../components/Guild";
import ListDivider from "../../components/ListDivider";
import { styles } from "./styles";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
};

export default function Guilds({ handleGuildSelect }: Props) {
    const guilds = [
        {
            id: "1",
            name: "Lendários",
            icon: 'image.png',
            owner: true,
        },
        {
            id: "2",
            name: "Olá",
            icon: 'image.png',
            owner: true,
        }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.guilds}
            />
            <Text>Guilds</Text>
        </View>
    );
}