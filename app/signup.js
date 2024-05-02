import { useContext, useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../constants";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { TextInput } from "react-native";
import { AuthContext } from "./context/AuthContext";
import { KeyboardAvoidingView } from "react-native";

const signup = () => {
  const { loading, register } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      Alert.alert("Sign Up", "Please fill all the fields");
      return;
    }
  
    let response = await register(
      formData.username,
      formData.email,
      formData.password
    );
  
    console.log(`result`, response);
  
    if (!response.success) {
      Alert.alert("Sign Up", response.msg);
    }
  };
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <KeyboardAvoidingView>
          <View
            className="w-full flex flex-1  justify-center h-full px-4 my-6"
            style={{
              minHeight: Dimensions.get("window").height - 100,
            }}
          >
            {/* <Image/> */}
            <Text className="text-2xl text-center font-semibold text-white mt-10 font-psemibold">
              Make new account to Lchat
            </Text>
            <View>
              <View className="w-full mt-4 h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:bordr-secondary flex flex-row items-center">
                <TextInput
                  placeholder="enter your username"
                  className="bg-gray text-white "
                  placeholderTextColor="white"
                  value={formData.username}
                  onChangeText={(e) =>
                    setFormData({ ...formData, username: e })
                  }
                />
              </View>
              <View className="w-full mt-4 h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:bordr-secondary flex flex-row items-center">
                <TextInput
                  placeholder="enter your email"
                  className="bg-gray w-full text-white"
                  keyboardType="email-address"
                  placeholderTextColor="white"
                  value={formData.email}
                  onChangeText={(e) => setFormData({ ...formData, email: e })}
                />
              </View>

              <View className="w-full mt-4 h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center justify-between">
                <TextInput
                  placeholder="enter your password"
                  className="bg-gray text-white "
                  secureTextEntry={true}
                  placeholderTextColor="white"
                  value={formData.password}
                  onChangeText={(e) =>
                    setFormData({ ...formData, password: e })
                  }
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Image
                    source={!showPassword ? icons.eye : icons.eyeHide}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Already have an account?
              </Text>
              <Link
                href="signin"
                className="text-lg font-psemibold text-secondary cursor-pointer"
              >
                SignIn
              </Link>
            </View>

            <TouchableOpacity
              onPress={() => handleRegister()}
              className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center mt-7 ${
                loading ? "opacity-50" : ""
              }`}
              disabled={loading}
            >
              <Text className={`text-primary font-psemibold text-lg `}>
                Signup
              </Text>

              {loading && (
                <ActivityIndicator
                  animating={loading}
                  color="#fff"
                  size="small"
                  className="ml-2"
                />
              )}
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signup;
