import React, { Component} from 'react'
import{
	Text,
	View,
	Image,
	StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Profile extends Component{

	static navigationOptions = {
		headerTitle: (<Text style={{alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: 20, color: 'white'}}>Demo App</Text>),
		headerBackImage: (<Icon name='ios-arrow-back' style={{color:'white'}} size={30}/>),
	}


 	render(){

	const {navigation} = this.props;
	const usuario = navigation.getParam('usuario')

		return(
			<View>
				<View>
					<Text style={styles.encabezado}>
						Descripción del Usuario
					</Text>
				</View>
				<View style={styles.container}>	
					<View style={styles.leftColumn}>
						<Image style = {styles.imagen} source={require('../users/girl_2.png')}/>
					</View>
					<View>
						<Text style={styles.spread}>
							Usuario:  {usuario.name}
						</Text>
						<Text style={styles.spread}>
							Nickname:  {usuario.username}
						</Text>
						<Text style={styles.spread}>
							Sitio Web:  {usuario.website}
						</Text>
						<Text style={styles.spread}>
							Empresa:  {usuario.company.name}
						</Text>
					</View>
				</View>	
				<View>
					<Text style={styles.encabezado2}>
						Datos del contacto
					</Text>
				</View>	
				<View style={styles.container2}>
					<Text style={styles.spread}>
						Correo electrónico:  {usuario.email}
					</Text>
					<Text style={styles.spread}>
						Teléfono:  {usuario.phone}
					</Text>
					<Text style={styles.spread}>
						Domicilio:  {usuario.address.street},  {usuario.address.suite},  {usuario.address.city}
					</Text>
				</View>
			</View>	
		);
	}
}

const styles = StyleSheet.create({
	encabezado:{
		fontSize: 20,
		textDecorationStyle: 'solid',
		paddingLeft:5,
		paddingBottom: 10,
		paddingTop: 10,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
	},
	encabezado2:{
		fontSize: 20,
		textDecorationStyle: 'solid',
		paddingLeft:5,
		paddingBottom: 10,
		paddingTop: 10,
		borderLeftWidth: 1,
		borderRightWidth: 1,
	},
	container:{
		borderBottomWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
	    paddingVertical:5,
	    paddingHorizontal: 5,
	    flexDirection: 'row',
	},
	container2:{
		borderBottomWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
	    paddingVertical:5,
	    paddingHorizontal: 5,
	    flexDirection: 'column',
	},
	imagen:{
		height:100,
		width: 100,
		resizeMode: 'contain',
		paddingLeft: 15
	},
	leftColumn:{
		paddingLeft: 10,
		paddingRight: 20
	},
	spread:{
		paddingBottom:10
	}
});

export default Profile;