import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import RestaurantsStacks from './RestaurantsStack';
import AccountStacks from './AccountStack';
import FavoritesStacks from './FavoritesStack';
import SearchStacks from './SearchStack';
import TopRestaurantsStacks from './TopRestaurantsStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName= 'restaurants'
                tabBarOptions={{
                    inactiveTintColor: '#646464',
                    activeTintColor: '#00a680'
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >

                <Tab.Screen 
                    name='restaurants'
                    component={RestaurantsStacks} 
                    options={{title: 'Restaurantes'}}/>

                <Tab.Screen 
                    name='account'
                    component={AccountStacks} 
                    options={{title: 'Cuenta'}}/>

                <Tab.Screen 
                    name='favorites'
                    component={FavoritesStacks} 
                    options={{title: 'Favoritos'}}/>

                <Tab.Screen 
                    name='search'
                    component={SearchStacks} 
                    options={{title: 'Buscar'}}/>

                <Tab.Screen 
                    name='topRestaurants'
                    component={TopRestaurantsStacks} 
                    options={{title: 'Top 5'}}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case 'restaurants':
            iconName = 'compass-outline'
            break;

        case 'favorites':
            iconName = 'heart-outline'
            break;

        case 'topRestaurants':
            iconName = 'star-outline'
            break;

        case 'search':
            iconName = 'magnify'
            break;

        case 'account':
            iconName = 'home-outline'
            break;
        default:
            break;
    }

    return (
        <Icon type='material-community' name={iconName} size={22} color={color}/>
    )
}