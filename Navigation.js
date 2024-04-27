import { NavigationContainer } from '@react-navigation/native';
import Feed from './screens/tabScreens/Feed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import View from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Details from './screens/homeStack/DetailsScreen';
import {createDrawerNavigator} from "@react-navigation/drawer"


// Stack 
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
    return (
        <HomeStack.Navigator
            // screenOptions={() => ({
            //     headerShown:false,
            // })}
        >
            <HomeStack.Screen 
                name="TabGroup" 
                component={TabGroup} 
                options={{ headerShown:false }}
            />
            <HomeStack.Screen 
                name="Details" 
                component={Details}
                options={{presentation:"modal"}}
            />
            <HomeStack.Screen 
                name="Deeper Details" 
                component={Details}
                options={{presentation:"fullScreenModal"}}
            />

        </HomeStack.Navigator>
    )
}




// Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({route, navigation}) => ({
                // headerShown:false,
                tabBarIcon: ({color, focused, size}) => {
                    let iconName;
                    if( route.name === "Feed") {
                        iconName = "home";
                    }
                    else if( route.name === "Feed2") {
                        iconName = "swap";
                    }
                    else if( route.name === "Feed3") {
                        iconName = "team";
                    }
                    else if( route.name === "Feed4") {
                        iconName = "setting";
                    }
                    return <AntDesign name={iconName} size={size} color={focused ? "blue" : color} />
                },
                tabBarActiveTintColor: "blue",
                // tabBarShowLabel:false,
                // tabBarActiveBackgroundColor:"red",
                // tabBarInactiveBackgroundColor:"coral",
            })}
            
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="Feed2" component={Feed}/>
            <Tab.Screen name="Feed3" component={Feed}/>
            <Tab.Screen name="Feed4" component={Feed}/>
          
        </Tab.Navigator>
    )
}

// Drawer
const Drawer = createDrawerNavigator();

function DrawerGroup() {
    return (
        <Drawer.Navigator
            screenOptions={{
                // headerShown:false,
            }}
        >
                <Drawer.Screen 
                    name="HomeStackGroup" 
                    component={HomeStackGroup} 
                    options={{headerShown:false}}

                    
                    />
                <Drawer.Screen 
                    name="Feed" 
                    component={Feed} 
                    // options={{headerShown:false}}
                />
                
        </Drawer.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <DrawerGroup />
        </NavigationContainer>
    )
}