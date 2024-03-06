import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { useCart } from "../provider/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const CartScreen = () => {
  const { items,total } = useCart();
  return (
    <View style={{ padding:10}}>
      <FlatList
        data={items}
        renderItem={({ item })=><CartListItem cartItem={item} />}
        contentContainerStyle={{padding:10,gap:10,}}
      />
      <Text style={{ justifyContent:'center',textAlign:'center', marginTop:20, fontSize:20, fontWeight:'500'}}> Total : ${total} </Text>
      <Button  text="Checkout" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
