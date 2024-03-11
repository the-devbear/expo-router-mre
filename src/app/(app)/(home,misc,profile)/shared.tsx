import { useSegments } from "expo-router";
import { View, Text } from "react-native";

export default function SharedPage() {
  const segments = useSegments();
  return (
    <View>
      <Text>Shared Page</Text>
      <Text>Segments: {JSON.stringify(segments)}</Text>
    </View>
  );
}
