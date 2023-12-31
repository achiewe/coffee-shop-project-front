import {StyleSheet, Text, View} from 'react-native';
import ImageTitle from './ImageTitle';
import Description from './Description';
import BuyNow from './BuyNow';

// detail component
export default function Detail() {
  return (
    <View style={styles.mainDetail}>
      <ImageTitle />
      <Description />
      <BuyNow />
    </View>
  );
}

// detail style
const styles = StyleSheet.create({
  mainDetail: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
  },
});
