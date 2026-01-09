import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Navigation par pile pour l'onglet Maison
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Accueil" 
        component={HomeScreen}
        options={{
          headerStyle: { 
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: 'Accueil Principal',
        }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{ 
          title: 'Mes Détails Personnalisés',
          headerStyle: { 
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

// Navigation par onglets principale
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          backgroundColor: '#f0f0f0',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: { 
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen 
        name="Maison" 
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Accueil',
        }}
      />
      <Tab.Screen 
        name="Paramètres" 
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
          tabBarLabel: 'Paramètres',
        }}
      />
    </Tab.Navigator>
  );
}

// Exportez le composant TabNavigator (pas AppNavigator)
export default TabNavigator;