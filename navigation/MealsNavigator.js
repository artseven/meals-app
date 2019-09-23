import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { createStackNavigator, createApp } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Platform === "android" ? Colors.primaryColor : "white"
		},
		headerTintColor: Platform === "android" ? "white" : Colors.primaryColor
	}
});

export default createAppContainer(MealsNavigator);
