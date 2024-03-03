import { Image, StyleSheet, Text, View,Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import orders from "@/assets/data/orders";
import Button from "@/src/components/Button";


const productDetailScreen = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const { id } = useLocalSearchParams();
  const sizes = ["S", "M", "L", "XL"];
  const addToCart = () => {
    console.warn("adding to cart , size",selectedSize  );
    
    
  }

  const product = products.find((p) => p.id.toString() === id);
  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image style={styles.img} source={{ uri: product.image || "" }} />
      <Text>select size</Text>
      <View style={[styles.sizes]}>
        {sizes.map((size) => (
          <Pressable
          onPress={()=>{
            setSelectedSize(size)
          }}
            key={size}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color:
                    selectedSize === size ? "black" : "gray",
                },
              ]}
            >
              {size}{" "}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}> ${product.price} </Text>
      <Button  onPress={addToCart} text="Add to cart"/>
    </View>
  );
};

export default productDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop:'auto'

  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    borderRadius: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  
});
