import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const Basics = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();

  return (
    <View
      style={{
        backgroundColor: '#182264',
        padding: 20,
      }}>
      <Text style={styles.basicText}>My basic styling</Text>
      <Text style={styles.bodyText}>This is a basic component.</Text>

      <Text style={styles.bodyText}>
        Window dimensions: {width}x{height}, scale: {scale}, font scale: {fontScale}
      </Text>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#423f93',
        }}
      />

      <View
        style={{
          width: '50%',
          height: '50%',
          backgroundColor: '#5b5a78',
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: width / 2 - 25,
          width: 50,
          height: 50,
          backgroundColor: '#2620d4',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  basicText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  bodyText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Basics;