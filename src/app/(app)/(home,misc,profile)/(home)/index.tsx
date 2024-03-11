import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HomePage() {
  return (
    <View>
      <Text>Home Page</Text>
      <Link asChild href="/sign-in">
        <Button title="To Sign-In" />
      </Link>
    </View>
  );
}
