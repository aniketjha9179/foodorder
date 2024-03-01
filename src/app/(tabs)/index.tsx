import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
// import { } from "@/src/components/Themed";d
import ProductListItem from "@/src/components/ProductListItem";
import products from "@/assets/data/products";




export default function TabOneScreen() {
  return (
    <ScrollView>
      <ProductListItem  product={products[0]} />
      <ProductListItem  product={products[1]}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
