import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";

// Components
import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Index() {
    const [name, setName] = useState("");

    function handleNext() {
        router.navigate("/dashboard");
    }

    function handleMessage() {
        const name = "André";
        Alert.alert(`Olá, ${name}`);
    }

    function onChangeText(text: string) {
        setName(text);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello {name}!
            </Text>

            <Input onChangeText={(text) => onChangeText(text)}/>

            <Button
                title="Entrar"
                activeOpacity={0.7}
                onPress={handleMessage}
            />

            <Button
                title="Next"
                activeOpacity={0.7}
                onPress={handleNext}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        gap: 16
    },
    title: {
        color: "red",
        fontSize: 28,
        fontWeight: "bold"
    }
})