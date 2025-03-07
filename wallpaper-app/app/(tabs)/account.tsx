import { DownloadPicture } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { View } from "react-native";

export default function account() {
  const [pictureOpen, setPictureOpen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Account Page</Text>
        <Button
          title="Open Bottom Sheet"
          onPress={() => {
            setPictureOpen(true);
          }}
        ></Button>
        {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)} />}
      </View>
    </SafeAreaView>
  );
}
