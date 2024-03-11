import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function ProfilePage() {
  return (
    <View>
      <Text> This is the Profiel Page</Text>
      <Link asChild href={"/(app)/(misc)/shared"}>
        <Button title="Go to misc deep link" />
      </Link>
    </View>
  );
}
