import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BookDetail from './screens/bookDetail';
import BookRender from './screens/bookRender';
import CategoryList from './screens/categoryList';

import HomeScreen from "./screens/home";
import SearchScreen from "./screens/search";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Category" component={CategoryList} />
            <HomeStack.Screen name="bookDetail" component={BookDetail} />
            <HomeStack.Screen name="bookrender" component={BookRender} />
        </HomeStack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="HomeMain" component={HomeStackScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;