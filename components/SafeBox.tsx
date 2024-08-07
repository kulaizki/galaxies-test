import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeBox = () => {
  const { bottom, top, left, right } = useSafeAreaInsets();
  console.log('bottom', bottom);
  console.log('top', top);
  console.log('left', left);
  console.log('right', right);

  return (
    <View
      style={{
        backgroundColor: "lightblue",
        bottom,
        position: "absolute",
        width: "100%",
        height: 50,
      }}
    >
      <Text>SafeBox</Text>
    </View>
  );
};

export default SafeBox;
