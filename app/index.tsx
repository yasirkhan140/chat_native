import { Image, Pressable, Text, TouchableHighlight, View } from "react-native";

export default function Index() {
  const landingImage = require("../assets/images/landing/landing.png");
  return (
    <View
      style={{
        flex: 1,

        alignItems: "center",
      }}
    >
      <View className="mt-16">
        <Image
          source={landingImage}
          alt="image"
          className=""
          style={{ width: 220, height: 220 }}
        />
      </View>
      <View className="mt-28">
        <View className="bg-orange-600">
          <Text className="font-bold">Chat with security and safety</Text>
        </View>
      </View>
      <View className="mt-4">
        <Text className="">Welcome to your chat application</Text>
      </View>
      <View className="mt-20" style={{alignItems:"center",justifyContent:"center",width:"100vw"}}>

      <TouchableHighlight
        onPress={() => console.log("touch")}
        className="bg-orange-600"
        style={{width:"90vw",alignItems:"center",borderRadius:12,height:25,justifyContent:"center"}}
        >
        <Text>Get Started</Text>
      </TouchableHighlight>
        </View>
    </View>
  );
}
