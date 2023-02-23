/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../GlobalStyle/colors';
import * as All from '../../assets/ImgImport';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useWindowDimensions} from 'react-native';

const PageDetails = ({route}) => {
  const navigation = useNavigation();

  const {params} = route.params;
  const data = params.props;

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.HeaderContainer}>
          <View style={styles.HeaderContainerReturn}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home', {});
              }}>
              <Image
                style={styles.HeaderImg}
                source={require('../../assets/Icon/iconmonstr-undo-1-240.png')}></Image>
            </TouchableOpacity>
          </View>

          <Text
            numberOfLines={1}
            adjustsFontSizeToFit={true}
            style={data.name.length < 18 ? (styles.HeaderTitle):(styles.HeaderTitleLong) }>
            {data.name}
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <Image style={{width: windowWidth * 0.80 , height: windowWidth * 0.80, alignSelf:'center' }} source={All[`Img${data.id}`]}></Image>
          <Text adjustsFontSizeToFit style={styles.Text}>
            {data.text}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.BgBlack,
    flex: 1,
  },
  HeaderContainer: {
    backgroundColor: colors.SmokyBlack,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: '3%',
  },
  HeaderContainerReturn: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderImg: {
    width: 40,
    height: 40,
  },
  HeaderTitle: {
    color: colors.White,
    fontSize: 32,
  },
  HeaderTitleLong: {
    color: colors.White,
    fontSize: 22,
    alignSelf:'center'
  },
  Text: {
    color: colors.White,
    fontSize: 18,
  },
  bodyContainer: {
    paddingHorizontal: '2%',
    paddingVertical: '4%',
  },

});
export default PageDetails;
