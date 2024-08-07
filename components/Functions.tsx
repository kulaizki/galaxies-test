import { View, StyleSheet } from 'react-native';
const Functions = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          {
            backgroundColor: 'red',
            padding: 50,
          },
          StyleSheet.absoluteFill,
        ]}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: StyleSheet.hairlineWidth,
          }}
        />
        {/* <Text>Functions</Text> */}
      </View>
      {/* <View style={styles.overlay}>
        <Text style={{ color: '#ffffff', fontSize: 25 }}>Overlay</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 50,
    margin: 20,
  },
});

export default Functions;