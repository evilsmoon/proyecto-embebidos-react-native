import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { postLED } from "./src/helpers/postLED";
import { getSensorSound } from "./src/helpers/getSensorSound";
import { getSonido } from "./src/helpers/getSonido";

export default function App() {
  const [state, setState] = useState({
    Humedad: 0,
    Temperatura: 0,
    Sound : 0
  });
  const { Humedad, Temperatura ,Sound} = state;

  return (
    <View style={styles.container}>
      <Text > Temperatura : {Temperatura}  <Icon name="temperature-celsius" type="material-community" /> </Text>
      <Text> Humedad : {Humedad} <Icon name="thermometer" type="material-community" /> </Text>
      <Text> Sonido : {Sound} <Icon name="cellphone-sound" type="material-community" /></Text>

      <Button
        title="ON!!"
        containerStyle={styles.button}
        icon={<Icon name="cursor-default-click" type="material-community" />}
        onPress={() => {
          postLED(true)

        }}
      />

      <Button
        title="OFF!!"
        containerStyle={styles.button}
        icon={
          <Icon name="cursor-default-click-outline" type="material-community" />
        }
        onPress={() => {
          postLED(false)
            
        }}
      />

      <Button
        title="Get Data Humedad"
        containerStyle={styles.button}
        icon={
          <Icon name="cursor-default-click-outline" type="material-community" />
        }
        onPress={() => {
          getSensorSound()
            .then((resp) => setState({
              ...state,
              Temperatura: resp.Temperatura,
              Humedad: resp.Humedad
            }))
            .catch((err) => console.log(err));
        }}
      />
      <Button
        title="Get Data Sonido"
        containerStyle={styles.button}
        icon={
          <Icon name="cursor-default-click-outline" type="material-community" />
        }
        onPress={() => {
          getSonido()
            .then((resp) =>  setState({
              ...state,
              Sound: resp
            }))
            .catch((err) => console.log(err));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
});
