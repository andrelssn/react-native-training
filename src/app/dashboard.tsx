import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

// Components
import { Button } from "@/components/button";

export default function Dashboard() {

    function handleNext() {
        router.back();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Button title="Back" onPress={handleNext}/>
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