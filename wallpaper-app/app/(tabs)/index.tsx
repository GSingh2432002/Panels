import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";
import { View } from "react-native";

export default function forYou() {
    return <SafeAreaView>
        <Link href={"./liked"}>
            <Text>Liked</Text>
        </Link>
        <Link href={"./suggested"}>
            <Text>Suggested</Text>
        </Link>
        <Link href={"./library"}>
            <Text>Library</Text>
        </Link>
        <Text>For You Page</Text>
    </SafeAreaView>
}