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
import { Formik, isEmptyArray } from "formik";
import * as yup from "yup";
const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  const submitForm = async (e: { email: string; password: string }) => {
    const body = {
      ...e,
    };
    const request:RequestInit = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {'Content-Type':'application/json'}as HeadersInit
    };
    const response = await fetch("http://localhost:8001/api/v1/login" as string, request);
  };
  return (
    <SafeAreaView className="items-center" style={{ justifyContent: "center" }}>
      <ImageBackground
        source={"../assets/images/icon.png" as ImageBackgroundProps}
        style={{ width: "100%", height: "100%" }}
      >
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => submitForm(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View>
                <Text>Login to Your account</Text>
              </View>
              <View>
                <Text>Enter your email id</Text>
                <TextInput
                  placeholder="user@email.com"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.email}
                  </Text>
                )}
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
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  <MaterialCommunityIcons
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#aaa"
                    onPress={() => setShowPassword(!showPassword)}
                    style={{ marginLeft: 10 }}
                  />
                </View>
                {errors.password && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <View>
                <TouchableHighlight
                  onPress={() => handleSubmit()}
                  disabled={!isValid}
                >
                  <Text>Login</Text>
                </TouchableHighlight>
              </View>
            </>
          )}
        </Formik>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default login;
