import { Stack } from "expo-router";
import { Image, Pressable, Text } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}
// You see a purple header on the top of the screen
export default function RootLayout() {
  // These Stack.Screen are screen specific props we can use Stack with screen option props
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#6a51ae" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerRight: () => (
          <Pressable onPress={() => alert("Menu button pressed!")}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          </Pressable>
        ),
        headerTitle: (props) => <LogoTitle />, //Center Stack title
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "about" }} />
    </Stack>
  );
}
