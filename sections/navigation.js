import React from 'react'
import { Image,
		Text } from 'react-native'
import { createStackNavigator,
		createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screens/home'
import Profile from '../screens/profile'
import Albums from '../screens/albums'
import ContentAlbum from '../screens/contentAlbum'



const imagen= <Image source={require('../logo.jpg')} style={{height:40, width:80, resizeMode:'contain'}}/>
const titulo = <Text style={{alignSelf:'center',
			fontSize: 20,
			color:'white',
			marginLeft: 'auto',
			marginRight: 'auto'}}>Demo App</Text>

const Navigation = createStackNavigator(
{ 
	Home,
	Profile,
	Albums,
	ContentAlbum,
},
{
	navigationOptions:{
		headerRight: imagen,
		headerTitle: titulo	,
		headerStyle: {
			backgroundColor: 'black'
		},
		headerBackTitle: null
	}
}
)

const TabBar = createBottomTabNavigator(
{
	Home: {
		screen: Navigation,
		navigationOptions: {
		 	tabBarLabel: 'Usuarios',
			tabBarIcon: ({ tintColor }) => (<Icon name="ios-people" color = {tintColor} size={20}/>),
		}
	},
	Albums: {
		screen: Albums,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon  name ="ios-images"  color = { tintColor } size = {20}/>) ,
			tabBarLabel: 'Álbumes',
		},
	}
},
	{
	tabBarOptions:{
		labelStyle:{
			fontSize: 14,
			paddingBottom: 8
		},
		activeTintColor: 'white',
		activeBackgroundColor: 'orange',
	}
})

export default TabBar;