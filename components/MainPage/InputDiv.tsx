import {Image, StyleSheet, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function InputDiv() {
  return (
    <LinearGradient
      colors={['#131313', '#525252']}
      style={styles.mainInput}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 1}}>
      <Image
        source={require('../../assets/avatar.png')}
        style={styles.avatarImg}
      />
      <View style={styles.InputSortDiv}>
        <View style={styles.inputSearch}>
          <Image source={require('../../assets/search-normal.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="Search coffee"
            placeholderTextColor={'#989898'}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainInput: {
    display: 'flex',
    justifyContent: 'center',
    gap: 26,
    alignItems: 'center',
    height: 270,
  },

  avatarImg: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  InputSortDiv: {
    width: 315,
    backgroundColor: '#313131',
    height: 52,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 21,
  },

  inputSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  textInput: {
    color: 'white',
    fontSize: 14,
  },
});