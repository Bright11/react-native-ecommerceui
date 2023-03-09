import {StyleSheet} from 'react-native';
const productstyle = StyleSheet.create({
  safeareav: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  searchview: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5F6FA',
    elevation: 1,
    marginTop: 20,
  },
  searchinput: {
    // borderBottomWidth: 1,
    // borderColor: 'gray',
    width: '80%',
    fontSize: 20,
  },
  cate_holder: {
    padding: 5,
    margin: 8,
  },
  cate_holdertext: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#8D94D5',
    fontFamily: 'Roboto-BoldItalic',
    fontWeight: 500,
  },
  // items style
  itemview_holder: {
    flex: 1,
    // backgroundColor: 'red',
    marginTop: 30,
  },
  itemview: {
    flex: 1,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 50,
    marginBottom: 15,
    alignItems: 'center',
    // backgroundColor: 'blue',
    width: '50%',
    margin: 4,
    padding: 4,
  },

  itemimg: {
    width: '100%',
    height: 120,
    // aspectRatio: 1,
  },
  itemnameview: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 10,
    width: '100%',
  },
  itemname: {
    fontSize: 20,
    fontFamily: 'Roboto-BoldItalic',
  },
  description: {
    fontFamily: 'Roboto-BoldItalic',
  },
});

export default productstyle;
