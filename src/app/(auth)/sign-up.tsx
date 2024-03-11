import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function SignUpPage() {
  return (
    <View style={{ paddingHorizontal: 10, display: "flex", gap: 10 }}>
      <Text>Sign Up</Text>
      <Link asChild href={"/"}>
        <Button title="Go to Home" />
      </Link>
    </View>
  );
}
