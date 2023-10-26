// Navigation.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { View } from 'react-native'

import HomeScreen from '../components/ScreenAccount' // Import your HomeScreen component
// import GroupsScreen from './GroupsScreen'; // Import other screens as needed
// import FriendsScreen from './FriendsScreen';
// import HistoryScreen from './HistoryScreen';
import GroupIcon from '../src/components/icons/GroupIcon'
// Import your icon components
const Tab = createBottomTabNavigator()

const Navigation = () => (
	<Tab.Navigator>
		<Tab.Screen
			name="Groups"
			component={HomeScreen}
			options={{
				tabBarIcon: () => (
					// Add your Groups icon component here
					// <GroupIcon />
					<View style={{width: 24, height: 24, backgroundColor: 'red'}} />
				),
			}}
		/>
		<Tab.Screen
			name="Friends"
			component={HomeScreen}
			options={{
				tabBarIcon: () => (
					// Add your Friends icon component here
					<View style={{width: 24, height: 24, backgroundColor: 'red'}} />

				),
			}}
		/>
		<Tab.Screen
			name="History"
			component={HomeScreen}
			options={{
				tabBarIcon: () => (
					// Add your History icon component here
					<View style={{width: 24, height: 24, backgroundColor: 'red'}} />
				),
			}}
		/>
	</Tab.Navigator>
)

export default Navigation
