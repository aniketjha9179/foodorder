import { Text, View, StyleSheet, Image } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
// import { } from "@/src/components/Themed";d
import Colors from "@/src/constants/Colors";
import products from "@/assets/data/products";

const product = products[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.img}  source={{uri:product.image}} /> 
      <Text style={styles.title}>{product.name} </Text>
      <Text style={styles.price}> ${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  img:{
    height:400,
    aspectRatio:1
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});
