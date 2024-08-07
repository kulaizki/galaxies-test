import { View, Image } from 'react-native';
const IMG = require('@/assets/images/react-logo.png');

const ImageView = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://galaxies.dev/img/mika.webp',
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Image
        source={IMG}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
}; 

export default ImageView;