import react from "react";
import { StyleSheet, Image, View } from "react-native";
import Btn from "../components/Btn";
import { P } from "../components/P"



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
        <View>
            <View>
                <Image source={{ uri: "https://images.unsplash.com/photo-1648818801846-bc6c46d58f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80" }} style={styles.avatar} />
            </View>
            <View style={styles.bio}>
                <P fontSize={24} fontType={"Bold"}>Nicolas Faite</P>
                <P fontSize={16} fontType={"Regular"}>nicoasl@mail.com</P>
                <Btn onPress={handleSignOut}>Sign Out</Btn>
                
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 20,
        alignSelf: "center",
        borderWidth: 5,
        borderColor: "#017A9B"
    },
    bio: {
        alignItems: "center",


    },
})
export default ProfileScreen;