import { StyleSheet } from 'react-360';
export default StyleSheet.create({
  panel: {
    width: 300,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    borderColor: '#639dda',
    borderBottomWidth: 2,
    flexDirection: "row",
  },
  greeting: {
    fontSize: 30,
    marginLeft: 5,
    marginTop: 10,
  },
  button: {
    borderColor: '#639dda',
    borderWidth: 2,
    padding: 15,
    margin: 1,
  },
  userIcon: {
    height: 50,
    width: 50,
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});