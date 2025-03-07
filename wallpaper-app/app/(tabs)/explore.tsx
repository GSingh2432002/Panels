import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";
import { View } from "react-native";

export default function explore() {
    return <SafeAreaView>
        <Text>Explore</Text>
        <Link href="/accountinfo">go to account info page</Link>
    </SafeAreaView>
}