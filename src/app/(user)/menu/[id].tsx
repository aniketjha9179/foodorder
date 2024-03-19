import { Image, StyleSheet, Text, View, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
    import orders from "@/assets/data/orders";
import Button from "@/src/components/Button";
import { useCart } from "@/src/provider/CartProvider";
import { PizzaSize } from "@/src/types";
import { useProduct } from "@/src/api/products";


const sizes:PizzaSize[] = ["S", "M", "L", "XL"];

const productDetailScreen = () => {
  const router=useRouter()
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const { id:idString } = useLocalSearchParams();
  const  id = parseFloat(typeof idString==='string'?idString:idString[0]);
 const {data:product, error, isLoading}= useProduct(id);

  const { addItem } = useCart();

  const addToCart = () => {
    if(!product){
      return ;
    }
    addItem(product,selectedSize);
    router.push('/cart')
    // console.warn("adding to cart , size",selectedSize  );
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image style={styles.img} source={{ uri: product.image || "" }} />
      <Text>select size</Text>
      <View style={[styles.sizes]}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
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
                  color: selectedSize === size ? "black" : "gray",
                },
              ]}
            >
              {size}{" "}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}> ${product.price} </Text>
      <Button onPress={addToCart} text="Add to cart" />
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
    marginTop: "auto",
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
