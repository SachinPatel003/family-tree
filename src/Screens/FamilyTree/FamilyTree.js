import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Svg, Circle, Text as SvgText } from "react-native-svg";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import * as d3 from "d3";

const Data = {
  name: "Root",
  children: [
    {
      name: "Node 1",
      children: [{ name: "Node 1.1" }, { name: "Node 1.2" }],
    },
    {
      name: "Node 1",
      children: [
        {
          name: "Node 1.1",
          children: [
            { name: "Node 1.1" },
            { name: "Node 1.2" },
            { name: "Node 1.2" },
            { name: "Node 1.2" },
          ],
        },
        { name: "Node 1.2" },
      ],
    },
    {
      name: "Node 1",
      children: [{ name: "Node 1.1" }, { name: "Node 1.2" }],
    },
  ],
};

export default FamilyTree = () => {
  const [treeData, setTreeData] = useState(null);

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    if (Data) {
      const root = d3.hierarchy(Data);
      const treeLayout = d3.tree().nodeSize([70, 70]);
      treeLayout(root);
      setTreeData(root);
    }
  }, [Data]);

  if (!treeData) return null;

  const rootNode = treeData.descendants()[0];
  const rootX = rootNode.x;
  const rootY = rootNode.y;

  const offsetX = 150 - rootX;
  const offsetY = 150 - rootY;

  return (
    <GestureDetector gesture={pinchGesture}>
      <ScrollView horizontal={true} style={styles.container}>
        <ScrollView>
          <Animated.View style={[styles.box, animatedStyle]}>
            <View>
              {treeData.descendants().map((node, index) => {
                const { x, y } = node;
                return (
                  <View
                    key={index}
                    style={{
                      position: "absolute",
                      left: x + offsetX,
                      top: y + offsetY,
                      borderWidth: 1,
                      borderColor: "green",
                      borderRadius: 50,
                    }}
                  >
                    <Svg width={50} height={50}>
                      <Circle cx={25} cy={25} r={25} fill="lightblue" />
                      <SvgText x={25} y={25} fontSize={10} textAnchor="middle">
                        {node.data.name}
                      </SvgText>
                    </Svg>
                  </View>
                );
              })}
            </View>
          </Animated.View>
        </ScrollView>
      </ScrollView>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
  },
  box: {
    flex: 1,
    height: 1000,
    width: 500,
  },
});
