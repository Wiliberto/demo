import React, { PureComponent} from 'react'
import{
	Text,
	View,
	Image,
	StyleSheet,
	FlatList,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'



class ContentAlbum extends PureComponent{
	
	constructor(props){
		super(props);
		this.state={
			imagenes:[],
		}
	}

	static navigationOptions = {
		headerTitle: (<Text style={{alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: 20, color: 'white'}}>Demo App</Text>),
		headerBackImage: (<Icon name='ios-arrow-back' style={{color:'white'}} size={30}/>)	
	}


	componentDidMount(){

		const {navigation} = this.props;
		const album = navigation.getParam('album')
		var id = album.id
		console.log(id)

		fetch(`http://jsonplaceholder.typicode.com/photos?albumId=${id}`)
		.then((response) => {
			return response.json()
		})
		.then((responseJson) => {
			this.setState({imagenes:responseJson})
		})
		.catch((error) => {
			console.error(error)
		})
	}

	render(){

		const {navigation} = this.props;
		const album = navigation.getParam('album')

		return(
			<View>
				<View>
					<Text style={styles.texto}>{album.title}</Text>
				</View>
				<View style={styles.container}>
					<FlatList 
						data={this.state.imagenes}
						keyExtractor={(item, ident) => ident.toString()}
						numColumns={3}
						renderItem={({item}) => (
							<Image source={{uri:item.url}} style={styles.imagen}/>
						)}
					/>
				</View>
			</View>	
		);
	}
}

const styles = StyleSheet.create({
	imagen:{
		width: 80,
	    height: 100,
	    resizeMode: 'contain',
	    alignSelf: 'flex-start',
	    marginRight:10,
	    marginLeft:20
	},
	container:{
	    paddingVertical:25,
	    paddingHorizontal: 10,
	    paddingBottom:60,
	    flexDirection: 'column',
	},
	texto:{
		alignSelf: 'center',
		fontSize:18,
		paddingTop: 5
	}
})

export default ContentAlbum;