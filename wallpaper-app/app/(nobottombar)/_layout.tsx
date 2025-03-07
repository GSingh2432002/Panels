import { Link, Slot } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
    return <View>
        <View style={{ backgroundColor: "black", padding: 10 }}>
            <Link href="/explore" style={{color: "white"}}>Go Back</Link>
        </View>
        <Slot />
    </View>
}