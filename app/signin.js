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
import FormField from "../component/FormField";
import CustomButton from "../component/CustomButton";
import { TextInput } from "react-native";
import { AuthContext } from "./context/AuthContext";
// import { isLoading } from "expo-font";

const signin = () => {
  const{loading} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex flex-1  justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          {/* <Image/> */}
          <Text className="text-2xl text-center font-semibold text-white mt-10 font-psemibold">
            Sign In to Lchat
          </Text>
          <View>
            <View className="w-full mt-4 h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:bordr-secondary flex flex-row items-center">
              <TextInput
                placeholder="enter your email"
                className="bg-gray w-full text-white"
                keyboardType="email-address"
                placeholderTextColor="white"
                value={form.email}
                onChangeText={() => setForm({ ...form })}
              />
            </View>

            <View className="w-full mt-4 h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center justify-between">
              <TextInput
                placeholder="enter your password"
                className="bg-gray text-white "
                secureTextEntry={true}
                placeholderTextColor="white"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
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
              Don't have an account?
            </Text>
            <Link
              href="../signup"
              className="text-lg font-psemibold text-secondary cursor-pointer"
            >
              Signup
            </Link>
          </View>

          <TouchableOpacity
            className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center mt-7 ${
              loading ? "opacity-50" : ""
            }`}
            disabled={loading}
          >
           <Text className={`text-primary font-psemibold text-lg `}>
        SignIn
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
