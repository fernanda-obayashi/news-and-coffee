import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import CoffeeScreen from "./screens/CoffeeScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRoutName="HomeScreen">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Coffee" component={CoffeeScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTintColor: "#fffdf6",
          headerStyle: {
            backgroundColor: "#432818",
          },
          tabBarActiveTintColor: "#fffdf6",
          tabBarStyle: {
            //height: 90,
            padding: 5,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "#432818",
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="home" size={24} color="#fffdf6" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="search" size={24} color="#fffdf6" />
            ),
          }}
        />
        <Tab.Screen
          name="Coffee"
          component={CoffeeScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="coffee" size={24} color="#fffdf6" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
