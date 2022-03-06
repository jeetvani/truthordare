import React, { useState, useEffect } from "react";
import { View, Text, Animated, Dimensions } from "react-native";

const Main: React.FunctionComponent = () => {
  const [MyName, setMyName] = useState<number>(0);
  const position = new Animated.ValueXY({ x: 0, y: 0 });
  Animated.timing(position, { toValue: { x: 200, y: 200 } }).start()
  return (
    
    <Animated.View
      style={{
        alignItems: "center",
        width: 80,
        height: 80,
        backgroundColor: "red",
        transform: [
          { translateX: position.x }, { translateY: position.y }
        ]
      }}

    >
      <Text>{MyName}</Text>
    </Animated.View>
  );
};
export default Main;
