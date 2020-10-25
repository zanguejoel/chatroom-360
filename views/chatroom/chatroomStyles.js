import { StyleSheet } from 'react-360';
export default StyleSheet.create({
  container:{
    width: 700,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  header:{
    height:60,
    width: 700,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  list:{
    width: 700,
    display: "flex",
    flexDirection: "column-reverse",
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:50,
    height:55,
    marginVertical: '-8',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    alignItems:'center',
    justifyContent:'center',
    alignSelf: 'flex-end',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs:{
    height:60,
    width:'80%',
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 500,
    height:60,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:30,
    padding:4,
    marginTop:5,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 2,
  },
});