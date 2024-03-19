import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
// import { } from "@/src/components/Themed";d
import ProductListItem from "@/src/components/ProductListItem";
import React from "react";
import { ActivityIndicator } from "react-native";
import { useProductList } from "@/src/api/products";

export default function TabOneScreen() {
  const {
    data: products,
    error,
    isLoading,
  } = useProductList()

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
