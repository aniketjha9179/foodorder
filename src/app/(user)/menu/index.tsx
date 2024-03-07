import { Text, View, StyleSheet, Image, ScrollView, FlatList } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
// import { } from "@/src/components/Themed";d
import ProductListItem from "@/src/components/ProductListItem";
import products from "@/assets/data/products";
import React from "react";




export default function TabOneScreen() {
  return (
    <View>
      <FlatList 
      data={products}
      renderItem={({item})=> <ProductListItem  product={item}  />}
      numColumns={2}
      contentContainerStyle={{gap:10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
