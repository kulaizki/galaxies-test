import { View, Text, useColorScheme } from "react-native";

const Themed = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={{
      flex: 1,
      backgroundColor: colorScheme === "dark" ? "black" : "white",
    }}>
      <Text>Themed</Text>
    </View>
  );
};

export default Themed;
