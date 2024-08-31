import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ImageBackgroundProps,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView className="items-center" style={{ justifyContent: "center" }}>
      <ImageBackground
        source={"../assets/images/icon.png" as ImageBackgroundProps}
        style={{ width: "100%", height: "100%" }}
      >
        <View>
          <Text>Login to Your account</Text>
        </View>
        <View>
          <Text>Enter your email id</Text>
          <TextInput placeholder="user@email.com" />
        </View>
        <View>
          <Text>Enter your email id</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f3f3f3",
              borderRadius: 8,
              paddingHorizontal: 14,
            }}
          >
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              style={{
                flex: 1,
                color: "#333",
                paddingVertical: 10,
                paddingRight: 10,
                fontSize: 16,
              }}
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              onPress={() => setShowPassword(!showPassword)}
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>
        <View>
          <TouchableHighlight>
            <Text>Login</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default login;
