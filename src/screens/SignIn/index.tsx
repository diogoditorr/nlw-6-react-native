import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { ActivityIndicator, Alert, Image, Text, View } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import IllustrationSvg from "../../assets/illustration.svg";
import Background from "../../components/Background";
import ButtonIcon from "../../components/ButtonIcon";
import { AuthContext } from "../../context/auth";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./styles";

export default function SignIn() {
    const navigation = useNavigation();
    const { loading, user, signIn } = useAuth();

    async function handleSignIn() {
        // navigation.navigate("Home");
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                {/* <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            /> */}
                <IllustrationSvg width={"100%"} />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {"\n"}e organize suas {"\n"}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {"\n"}
                        favoritos com seus amigos
                    </Text>

                    {loading ? (
                        <ActivityIndicator color={theme.colors.primary} />
                    ) : (
                        <ButtonIcon
                            title="Entrar com Discord"
                            onPress={handleSignIn}
                        />
                    )}
                </View>
            </View>
        </Background>
    );
}
