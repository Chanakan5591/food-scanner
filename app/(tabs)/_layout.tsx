import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Text } from "tamagui";
import { Grape } from "@tamagui/lucide-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "rebeccapurple",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => <Grape color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                <Text>Hello!</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <Text>Hello!</Text>,
        }}
      />
    </Tabs>
  );
}
