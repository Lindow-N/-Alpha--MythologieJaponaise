/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as All from '../../assets/ImgImport';
import colors from '../../GlobalStyle/colors';
import {useNavigation} from '@react-navigation/native';

interface Props {
  id: any;
  name: String;
  text: String;
}

const Cards = (props: Props) => {
  const {name, id, text} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.Cards}
      key={id}
      onPress={() => {
        navigation.navigate('PageDetails', {
          params: {props},
        });
      }}>
      <View>
        <Image style={styles.CardsImg} source={All[`Img${id}`]}></Image>
        <View>
          <Text numberOfLines={1} style={styles.CardsText}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Cards: {
    backgroundColor: colors.White,
    padding: '1%',
    marginBottom: '3%',
    borderRadius: 2,
  },
  CardsImg: {
    width: 170,
    height: 170,
    alignSelf: 'center',
  },
  CardsText: {
    alignSelf: 'center',
    paddingVertical: '4%',
  },
});

export default Cards;
