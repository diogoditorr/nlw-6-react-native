import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Background from "../../components/Background";
import Button from "../../components/Button";
import CategorySelect from "../../components/CategorySelect";
import { GuildProps } from "../../components/Guild";
import GuildIcon from "../../components/GuildIcon";
import Header from "../../components/Header";
import ModalView from "../../components/ModalView";
import SmallInput from "../../components/SmallInput";
import TextArea from "../../components/TextArea";
import { theme } from "../../global/styles/theme";
import Guilds from "../Guilds";
import { styles } from "./styles";
export default function AppointmentCreate() {
    const [category, setCategory] = useState("");
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
    const { secondary50, secondary75 } = theme.colors;

    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    function handleCloseGuilds() {
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Background>
                <ScrollView>
                    <Header title="Agendar partida" />

                    <Text
                        style={[
                            styles.label,
                            { marginLeft: 24, marginTop: 36, marginBottom: 18 },
                        ]}
                    >
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {guild.icon ? (
                                    <GuildIcon />
                                ) : (
                                    <LinearGradient
                                        style={styles.image}
                                        colors={[secondary75, secondary50]}
                                    />
                                )}

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name
                                            ? guild.name
                                            : "Selecione um servidor"}
                                    </Text>
                                </View>

                                <Feather
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text
                                    style={[styles.label, { marginBottom: 12 }]}
                                >
                                    Dia e mês
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>

                            <View>
                                <Text
                                    style={[styles.label, { marginBottom: 12 }]}
                                >
                                    Hora e minuto
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>Descrição</Text>

                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View>

                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />

                        <View style={styles.footer}>
                            <Button title="Agendar" />
                        </View>
                    </View>
                </ScrollView>
            </Background>

            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
}
