import { StyleSheet } from 'react-native';

import { colors } from '../../../Styles';

const styles = StyleSheet.create({
  container:{
    marginBottom: 15,
    //flex: 1,
    //backgroundColor: '#f5f542',
  },
  title:{
    color: colors.white, 
    fontSize: 16 
  },
  areaDefaultItem:{  
    flexDirection: 'row', 
    padding: 10, 
    width: '100%',
    borderBottomWidth:2,
    borderBottomColor: colors.white
  },
  areatitleDefaultItem:{ 
    width: '95%' 
  },
  titleDefaultItem:{
    fontSize: 16,
    color: colors.white
  },
  areaIconDefaultItem:{
    width: '5%', 
    alignItems: 'center'
  },
  icon:{
    color: colors.white
  },
  areaItens:{
    width: '100%', 
    paddingLeft: 10, 
    zIndex: 1000, 
    //height: 150,
    backgroundColor: colors.white 
  },
  label:{
    color: colors.black,
    fontSize: 16
  }
});

export default styles;