import React, { Component} from 'react'
import {
	Text,
	View,
	StyleSheet,
	FlatList,
} from 'react-native'
import { ListItem } from 'react-native-elements'

class Albums extends Component{


	constructor(props){
		super(props);
		this.state = {
			albums: [],
			url: 'http://jsonplaceholder.typicode.com/albums',
		}
	}

	static navigationOptions = {
		headerTitle: (<Text style={{alignSelf: 'center', paddingLeft: 130, fontSize: 20, color: 'white'}}>Demo App</Text>), 
		headerLeft: null,
	}

	componentDidMount(){
			fetch(this.state.url)
			.then((response) => {
				 return response.json()
			})
			.then((responseJson) => {
				this.setState({albums:responseJson})
				console.log(this.state.albums)
			})
			.catch((error) => {
				console.error(error);
			})
	}

	render(){ 
		return(
			<View>
				<FlatList  
				data={this.state.albums}
				keyExtractor = {(item, id) => id.toString()}
				renderItem={({item}) => (
					<ListItem
						title={item.title}
							subtitle={item.id}
							onPress = {() => this.props.navigation.push('ContentAlbum', {album:item})}
						/>)}
					/>	
			</View>
		);
	}
}

export default Albums;