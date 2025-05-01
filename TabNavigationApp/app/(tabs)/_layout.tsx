import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "react-native";
//By this we automatically get the tab bar, all components inside (tabs) will be rendered inside the tab bar
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: () => <Text>Home</Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color}></FontAwesome>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: () => <Text>Explore</Text>,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color}></FontAwesome>
          ),
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
        }}
      />
    </Tabs>
  );
}
