import { View, Text } from 'react-native';
const Flex = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        gap: 10,
        backgroundColor: 'yellow',
      }}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'purple',
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: 'teal',
            alignSelf: 'center',
          }}>
          <Text style={{ color: '#fff' }}>
            Super long text that might flow over the bounds of this container at some point
          </Text>
          {/* <Text style={{ color: '#fff' }}>
            Super long text that might flow over the bounds of this container at some point
          </Text> */}
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: 'red' }} />
      <View style={{ flex: 2, backgroundColor: 'blue' }} />
      <View style={{ flex: 1, backgroundColor: 'green' }} />
    </View>
  );
};

export default Flex;