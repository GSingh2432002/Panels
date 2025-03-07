import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={ExploreScreen} />
      <Tab.Screen name="Suggested" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return <Text>Hi there from the home screen</Text>;
}

function ExploreScreen() {
  return <Text>Hi there from the explore screen</Text>;
}

function ProfileScreen() {
  return <Text>Hi there from the profile screen</Text>;
}
