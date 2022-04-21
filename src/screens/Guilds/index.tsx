import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Guild, { GuildProps } from "../../components/Guild";
import ListDivider from "../../components/ListDivider";
import Load from "../../components/Load";
import { api } from "../../services/api";
import { styles } from "./styles";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
};

export default function Guilds({ handleGuildSelect }: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds');

        const guilds: GuildProps[] = response.data        
        const sortedGuilds = guilds.sort((a, b) => {
            if (a.owner && !b.owner) return -1;
            if (!a.owner && b.owner) return 1;
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        setGuilds(sortedGuilds);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <Load />
            ) : (
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
                    ItemSeparatorComponent={() => <ListDivider isCentered />}
                    contentContainerStyle={{ paddingBottom: 70 }}
                    style={styles.guilds}
                />
            )}
        </View>
    );
}
