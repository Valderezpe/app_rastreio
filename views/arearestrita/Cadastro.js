import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { css } from "../../assets/css/css";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function Cadastro({ navigation }) {
  return (
    <View>
      <MenuAreaRestrita title="Cadastro" navigation={navigation} />
    </View>
  );
}
