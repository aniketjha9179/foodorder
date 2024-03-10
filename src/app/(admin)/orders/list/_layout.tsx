import { Tabs, withLayoutContext } from "expo-router";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native";

const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator);

export default function orderListNavigator() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black", marginTop: 25 }}>
      <TopTabs>
        <TopTabs.Screen name="index" options={{ title: "Active" }} />
      </TopTabs>
    </SafeAreaView>
  );
}
