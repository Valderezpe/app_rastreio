import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { css } from "../../assets/css/css";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function Edicao({ navigation }) {
  return (
    <View>
      <MenuAreaRestrita title="Edição" navigation={navigation} />
    </View>
  );
}
