import { Tabs } from "expo-router";
import CustomNavBar from "../components/CustomNavBar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomNavBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="analytics" options={{ title: "Analytics" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}