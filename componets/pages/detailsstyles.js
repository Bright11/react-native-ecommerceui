import {StyleSheet} from 'react-native';
const detailsstyle = StyleSheet.create({
  detailssafeview: {
    flex: 1,
    flexDirection: 'column',
  },
  detailsimgview: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    marginTop: 20,
  },
  detailsimg: {
    width: '100%',
    aspectRatio: 1,
  },
  namepriceview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  itemname: {
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Roboto-BoldItalic',
  },
  itemprice: {
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Roboto-BoldItalic',
    color: '#6441E6',
  },
  descriptionview: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#EBEEF3',
  },
  descriptiontitle: {
    fontSize: 20,
    fontWeight: 500,
    fontFamily: 'Roboto-BoldItalic',
  },
  description: {
    fontSize: 18,
    fontWeight: 100,
    fontFamily: 'Roboto-BoldItalic',
  },
  addtocartbtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#613DE5',
    width: '50%',
    // alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  addtocarttext: {
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Roboto-BoldItalic',
    color: 'white',
  },
});

export default detailsstyle;
