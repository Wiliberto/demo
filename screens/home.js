import React, { Component} from 'react'
import{
	View,
	Image,
	StyleSheet,
	SafeAreaView,
	FlatList,
} from 'react-native'
import { ListItem } from 'react-native-elements'


class Home extends Component{

	constructor(props){
		super(props);
		this.state = {
			users: [],
			url: 'http://jsonplaceholder.typicode.com/users'
		}
	}

	componentDidMount(){
			fetch(this.state.url)
			.then((response) => {
				 return response.json()
			})
			.then((responseJson) => {
				this.setState({users:responseJson})
			})
			.catch((error) => {
				console.error(error);
			})
	}

	render(){
		return(
			<View>
				<SafeAreaView>
					<FlatList  
					data={this.state.users}
					keyExtractor = {(item, id) => id.toString()}
					renderItem={({item}) => (
						<ListItem
							title={item.name}
							subtitle={item.email}
							avatar={<Image style={styles.imagen} source={require('../users/girl_1.png')}/> }
							onPress = {() => this.props.navigation.push('Profile', {usuario:item})}
						/>)}
					/>
				</SafeAreaView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imagen:{
		width: 30,
	    height: 30,
	    resizeMode: 'contain',
	}
})

export default Home;