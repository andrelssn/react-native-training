import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

  const [name, setName] = useState("")

  function createUser() {
    setName("Sujeito Programador")
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Página Inicial</Text>
      <Link
        href="/about"
      >
        Ir para About
      </Link>

      <TouchableOpacity onPress={createUser}>
        <Text>Acessar</Text>
      </TouchableOpacity>

      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

})