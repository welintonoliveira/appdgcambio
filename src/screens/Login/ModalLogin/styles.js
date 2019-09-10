import { StyleSheet } from 'react-native';
import {colors} from '../../../Styles'

const styles = StyleSheet.create({
	container:{
		marginRight:10,
		marginLeft:10,
		marginTop:10, 
		width:'95%',
		backgroundColor:'rgb(44,83,100)',
		borderRadius:4,
		height: 350
	},
	areaTituloModalLogin:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		paddingTop:20,
		paddingBottom:20,
	},
	textoTituloLogin:{
		color:'#FFFFFF',
		fontSize: 20,
		fontWeight:'bold',
	},
	buttonFecharModalLogin:{
		paddingLeft: 20,
	},
	iconeFecharModalLogin:{
		color:'#FFFFFF',
		fontSize: 18,
		fontWeight:'bold'
	},
	areaInputEmailLogin:{
		marginTop: 30,
		paddingLeft: 30,
		paddingRight: 30
	},
	inputEmailLogin:{
		backgroundColor:'#FFFFFF',
		borderRadius:50,
		paddingLeft:30,
	},
	areaInputSenhaLogin:{
		flexDirection:'row',
		marginTop: 20,
		paddingLeft: 30,
		paddingRight: 30,
		height:50
	},
	inputSenhaLogin:{
		backgroundColor:'#FFFFFF',
		borderBottomLeftRadius: 50,
		borderTopLeftRadius: 50,
		paddingLeft:30,
		width: '80%'
	},
	areaIconeVisualizacaoSenha:{
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#FFFFFF',
		borderBottomRightRadius: 50,
		borderTopRightRadius: 50,
		width: '20%'
	},
	areaButtonEntrar:{
		marginTop: 20,
		paddingLeft: 30,
		paddingRight: 30
	},
	buttonLogarTexto:{
		fontSize:20,
		color:'#FFFFFF',
	},
	areaButtonEsqueceuSuaSenha:{
		marginTop: 5,
	},
	buttonEsqueciMinhaSenha:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		height: 50
	},
	buttonEsqueciMinhaSenhaTexto:{
		color:'#FFFFFF',
		fontSize: 16,
	}
});

export default styles;