import {StyleSheet} from 'react-native';
const cartPagestyle = StyleSheet.create({
  cartimgview: {
    width: '100%',
    padding: 20,
  },
  cartimg: {
    width: '100%',
    height: 150,
  },
  cartname: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '200',
    fontFamily: 'Roboto-BoldItalic',
  },
  cartdeletview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  cartupdateqtyview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },

  cartminuspress: {
    elevation: 30,
    backgroundColor: 'gray',
    width: 30,
    aspectRatio: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartplus: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
  },
  cartminus: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    //alignSelf: 'center',
  },
  qty: {
    fontSize: 18,
    fontWeight: '200',
    fontFamily: 'Roboto-BoldItalic',
  },
  cartprics: {
    fontSize: 18,
    fontWeight: '200',
    fontFamily: 'Roboto-BoldItalic',
  },
  totalview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  totaltext: {
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 18,
    fontWeight: '100',
  },
  checkoutspress: {
    backgroundColor: '#613DE6',
    margin: 10,
    padding: 10,
    borderRadius: 30,
    position: 'absolute',
    bottom: 40,
    width: '90%',
  },
  checkouttext: {
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 20,
    fontWeight: '100',
    alignSelf: 'center',
    color: 'white',
  },
});
export default cartPagestyle;
