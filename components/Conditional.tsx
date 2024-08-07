import { useState } from "react";
import { View, Button, StyleSheet } from "react-native";

const Conditional = () => {
  const [condition, setCondition] = useState(false);

  const getMyStyle = () => {
    return [
      styles.box,
      {
        backgroundColor: condition ? "green" : "red",
        width: 100,
        height: 100,
      },
    ];
  };
  return (
    <View>
      <Button title="Toggle" onPress={() => setCondition(!condition)} />
      <View
        style={{
          backgroundColor: condition ? "red" : "blue",
          width: 100,
          height: 100,
        }}
      />
      <View style={getMyStyle()} />
      <View
        style={[
          styles.box,
          {
            backgroundColor: condition ? "red" : "blue",
            width: 100,
            height: 100,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
});

export default Conditional;
