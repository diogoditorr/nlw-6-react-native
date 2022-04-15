import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import IllustrationSvg from "../../assets/illustration.svg";
import Background from "../../components/Background";
import ButtonIcon from "../../components/ButtonIcon";
import { styles } from "./styles";

export default function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate("Home");
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

                    <ButtonIcon
                        title="Entrar com Discord"
                        onPress={handleSignIn}
                    />
                </View>
            </View>
        </Background>
    );
}
