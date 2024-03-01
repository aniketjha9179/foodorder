import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";



const ProductListItem = ({product}:any) => {
  return (
    <View style={styles.container}>
    <Image style={styles.img}  source={{uri:product.image}} /> 
    <Text style={styles.title}>{product.name} </Text>
    <Text style={styles.price}> ${product.price}</Text>
  </View>
  )
}

export default ProductListItem

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
})