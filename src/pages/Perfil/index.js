import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView, Image, View, ButtonContainer, baryperf } from "./style";

export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text style={{ color: "red", fontSize: 22 }}>Perfil</Text>

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Nome:</Text>
          <Text style={{ color: "blue", fontSize: 16 }}> Wellington Capitão</Text>

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>CEP:</Text>
          <Text style={{ color: "blue", fontSize: 16 }}> 08330-510</Text>

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rua:</Text>
          <Text style={{  color: "blue", fontSize: 16 }}>Vitória</Text>

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Nº </Text>
          <Text style={{  color: "blue", fontSize: 16 }}>200</Text>

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Bairro:</Text>
          <Text style={{  color: "blue", fontSize: 16 }}>Lago</Text>

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Cidade:</Text>
          <Text style={{ color: "blue", fontSize: 16 }}>Fantasia</Text>

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Estado:</Text>
          <Text style={{  color: "blue", fontSize: 16 }}>Minas Gerais</Text>

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>CPF:</Text>
          <Text style={{  color: "blue", fontSize: 16 }}>123456789-01</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
