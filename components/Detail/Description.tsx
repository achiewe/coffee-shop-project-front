import {StyleSheet, Text, View} from 'react-native';

// description component
export default function Description() {
  return (
    <View style={styles.mainDesc}>
      <View style={styles.line} />
      <View style={styles.titleDescView}>
        <Text style={styles.title}> Description</Text>
        <Text style={styles.paragraph}>
          A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of
          espresso coffee and 85ml of fresh milk the fo.. Read More
        </Text>
      </View>
    </View>
  );
}

// description style
const styles = StyleSheet.create({
  mainDesc: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 28,
    marginBottom: 20,
    paddingLeft: 31,
    paddingRight: 31,
  },

  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EAEAEA',
  },

  titleDescView: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 15,
  },

  title: {
    color: '#2F2D2C',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
  },

  paragraph: {
    fontSize: 14,
    color: '#9B9B9B',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
    width: 290,
  },
});
