import { Image, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";
import { useInsertProduct } from "@/src/api/products";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const { id } = useLocalSearchParams();
  const isUpdating = !!id;
  const {mutate : insertProduct}=useInsertProduct()

  const resetFields = () => {
    setName("");
    setPrice("");
  };
  const validateInput = () => {
    setErrors("");

    if (!name) {
      setErrors("Name is Required");
      return false;
    }
    if (!price) {
      setErrors("Price is Required ");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price is not a number");
      return false;
    }
    return true;
  };
  const OnSubmit = () => {
    if (isUpdating) {
      // update
      onUpdateCreate();
    } else {
      onCreate();
    }
  };
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.log("creating product", name, price);
    // save in the database
    resetFields();
  };
  const onUpdateCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Updating product");
    // save in the database
    insertProduct({name, price:parseFloat(price), image})
    resetFields();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      // we can set any media type
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onDelete = () => {
    console.warn("Delete !!");
  };

  const confirmDelete = () => {
    Alert.alert("Confirm !", "Are you sure you want to delete this product ", [
      {
        text: "Cancel",
        // style: "cancel"

      },
      { 
        text: "Delete",
         style: 'destructive',
        onPress:onDelete,
        },
    ]);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: isUpdating ? "Update Product" : "Create Product" }}
      />
      <Image
        source={{
          uri:
            image ||
            "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        }}
        style={styles.img}
      />
      <Text onPress={pickImage} style={styles.textBtn}>
        Select Image
      </Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Name"
        style={styles.inpput}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>price ($)</Text>
      <TextInput
        placeholder="$9.90"
        style={styles.inpput}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Text style={{ color: "red" }}> {errors} </Text>
      <Button onPress={OnSubmit} text={isUpdating ? "Update" : "Create"} />
      {isUpdating && (
        <Text onPress={confirmDelete} style={styles.textBtn}>
          Delete
        </Text>
      )}
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  img: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
    borderRadius: 100,
  },
  textBtn: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },

  label: {
    color: "gray",
    fontSize: 16,
    padding: 5,
  },
  inpput: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
});
