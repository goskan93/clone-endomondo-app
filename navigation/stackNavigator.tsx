import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HistoryScreen from "../screens/HistoryScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";

const stack = createStackNavigator({
  Historia: {
    screen: HistoryScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Historia",
        headerStyle: {
          backgroundColor: "#44b617",
        },
        headerTintColor: "#fff",
      };
    },
  },
});

export const BottomNavigator = createBottomTabNavigator(
  {
    Panel: stack,
    Historia: stack,
    Trening: stack,
    Skrzynka: stack,
    Wiecej: stack,
  },
  {
    initialRouteName: "Historia",
  }
);

export default createAppContainer(BottomNavigator);
