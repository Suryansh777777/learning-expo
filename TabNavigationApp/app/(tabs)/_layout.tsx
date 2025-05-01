import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "react-native";
//By this we automatically get the tab bar, all components inside (tabs) will be rendered inside the tab bar
export default function TabLayout() {
  // beside icon is set for tablets and below icon for mobile
  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarShowLabel: false, //by default it is true
        headerTitle: "Recipies App", //same across all tabs
        tabBarActiveTintColor: "#22d3ee",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: {
          backgroundColor: "#0f172a",
        },
        headerStyle: {
          backgroundColor: "#0f172a",
        },
        headerTintColor: "#f8fafc",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: () => <Text>Home</Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color}></FontAwesome>
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: () => <Text>Explore</Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color}></FontAwesome>
          ),
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: () => <Text>Profile</Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color}></FontAwesome>
          ),
          tabBarBadge: 3,
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
