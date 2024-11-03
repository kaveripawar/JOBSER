import { View, Image, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import { useUser } from '@clerk/clerk-expo';

export default function Slider() {
  const [sliderList, setSliderList]=useState();
  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, 'Slider'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList(prev=>[...prev,doc.data()]);
    });
  };

  return (
    <View>
      <Text style={{
        fontSize: 20,
        fontFamily:'outfit-bold',
        paddingLeft:20,
        paddingTop:20,
        marginBottom:5
      }}>#special for you
      </Text>
      <FlatList
      data={sliderList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingLeft:20}}
      renderItem={({item,index})=>(
        <Image source={{uri:item.imageUrl}}
        style={{
          width:300,
          height:150,
          borderRadius:15,
          marginRight:25
        }}
        />
      )}
      />
    </View>
  );
}
