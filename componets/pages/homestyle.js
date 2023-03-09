import {StyleSheet} from 'react-native';

const homestyle = StyleSheet.create({
  headerlefttext: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto-BoldItalic',
    fontWeight: 500,
  },
  headerleftright: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto-BoldItalic',
    fontWeight: 500,
  },
  headerleft: {
    marginRight: 20,
  },
  backgroundimghome: {
    backgroundColor: '#613DE6',
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    position: 'relative',
    //paddingVertical: 40,
  },

  homeview: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    position: 'absolute',
    top: '30%',
    bottom: 0,
    width: '100%',
    elevation: 70,
    resizeMode: 'cover',
    borderRadius: 20,
    alignItems: 'center',
  },
  logininput: {
    height: 40,
    width: '95%',
    borderColor: '#7150E8',
    borderWidth: 1,

    marginTop: 20,
  },
  loginbtn: {
    backgroundColor: '#7150E8',
    width: '50%',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignContent: 'center',
  },
  logintext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    paddingBottom: 20,
    fontFamily: 'Roboto-BoldItalic',
  },
});

export default homestyle;
