import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";
import { Product } from "../types";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <>
    <Link href={`/${product.id}`} asChild>
      <Pressable  style={styles.container}>
        <Image style={styles.img} source={{ uri: product.image || "" }} />
        <Text style={styles.title}>{product.name} </Text>
        <Text style={styles.price}> ${product.price}</Text>
      </Pressable>
    </Link>
    </>
  );
};

export default ProductListItem;  
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  img: {
    aspectRatio: 1,
    width: "100%",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});
