import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Btn from "../components/Btn";
import { P } from "../components/P";

export const ProfileScreen = ({ navigation }) => {
  function handleSignOut() {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Signin");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/15111402?v=4",
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.bio}>
        <P fontSize={24} fontType={"Bold"}>
          John Doe
        </P>
        <P fontSize={16} fontType={"Regular"}>
          email@email.com
        </P>
        <Btn onPress={handleSignOut}>Sign Out</Btn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bio: {
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "#017A9B",
  },
});

export default ProfileScreen;
