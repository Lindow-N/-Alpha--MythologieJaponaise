/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Image} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import colors from '../../GlobalStyle/colors';
import Cards from './Cards';
import Data from '../../assets/Data';

const HomeList = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.Header}>
          <View style={styles.HeaderTopContainer}>
            <View style={styles.HeaderTitleContainer}>
              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={styles.HeaderTitle}>
                Mythologie japonaise
              </Text>
            </View>
            <View style={styles.HeaderDotContainer}>
              <Image
                style={styles.HeaderImg}
                source={require('../../assets/Icon/iconmonstr-menu-dot-vertical-filled-240.png')}></Image>
            </View>
          </View>
          <View style={styles.HeaderBotContainer}>
            <View style={styles.SearchBar}>
              <Image
                style={styles.HeaderSearchImg}
                source={require('../../assets/Icon/iconmonstr-magnifier-lined-240.png')}></Image>
              <TextInput
                style={{color: colors.SmokyBlack}}
                placeholder="Recherchez"
                onChangeText={onChangeText}
                value={text}></TextInput>
            </View>
          </View>
        </View>

        <View style={styles.Body}>
          {Data.Kami.map(item => {
            return item.Name.toLowerCase().includes(
              text.toLowerCase()
            ) ? (
              <Cards
                key={item.id}
                id={item.id}
                name={item.Name}
                text={item.Text}
              />
            ) : (
              <></>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.BgBlack,
  },
  Header: {
    backgroundColor: colors.SmokyBlack,
  },
  HeaderTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '5%',
  },
  HeaderTitleContainer: {
    width: '85%',
    display: 'flex',
    alignItems: 'center',
  },
  HeaderTitle: {
    color: colors.White,
    fontSize: 32,
  },
  HeaderDotContainer: {
    width: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderImg: {
    height: 40,
    width: 40,
  },
  HeaderBotContainer: {
    paddingVertical: '5%',
  },
  SearchBar: {
    width: '95%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: colors.White,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
  },
  HeaderSearchImg: {
    height: 30,
    width: 30,
  },
  Body: {
    paddingHorizontal: '2%',
    paddingVertical: '4%',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
  },
});

export default HomeList;
