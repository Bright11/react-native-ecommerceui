import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import category from './catgorydata';
import productstyle from './productstyle';
import axios from 'axios';
const Category = () => {
  const [pressed, setPressed] = useState(null);
  const changecolor = cat => {
    //Alert.alert('AlertTitle', cat.name);
    // Alert.alert('Alert Title', 'My Alert Msg');
    setPressed(cat.name);
  };

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const response = await axios
        .get('http://networkip:1000/product/product')
        .then(response => {
          console.log('yes');
        });
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={category}
      renderItem={({item}) => (
        <>
          {pressed === item.name ? (
            <Pressable style={productstyle.categoryactive}>
              <Text style={productstyle.categoryactivetext}>{item.name}</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => changecolor(item)}
              style={productstyle.cate_holder}>
              <Text style={productstyle.cate_holdertext}>{item.name}</Text>
            </Pressable>
          )}
        </>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default Category;
