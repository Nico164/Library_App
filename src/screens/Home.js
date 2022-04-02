import React from "react";
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView } from "react-native";
import Btn from "../components/Btn";
import ContactsData from "../components/Contacts";
import { P } from "../components/P";
import Scroll from "../components/Scroll";
import { auth, firestore } from "../firebase";

export const HomeScreen = ({ navigation }) => {
  function goToSignIn() {
    navigation.push("Signin");
  }

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
    <SafeAreaView>
    <Scroll style={{ paddingHorizontal: 0 }}>
      {/* <ContactsData /> */}
      <View style={styles.container}>
        <View style={styles.greeting}>
          <P fontSize={32} fontType={"Bold"}>
            Hey 👋🏻
          </P>
          <P fontSize={16} fontType={"Regular"}>
            {auth?.currentUser?.email}
          </P>
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="What do you want to learn?"
          />
        </View>
        <View style={styles.banner}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.imgBanner}
          />
        </View>

        <View styles={styles.category}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryHeaderText}>Categories</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <View style={styles.categoryBody}>
            <Scroll horizontal>
              <View style={styles.categoryItem}>
                <Image
                  source={{
                    uri: "https://www.unukaltim.ac.id/wp-content/uploads/2019/12/graduate-icon-png-28-2.png",
                  }}
                  style={styles.imgIcon}
                />
                <Text ellipsizeMode="clip" style={styles.categoryItemText}>
                  Education
                </Text>
              </View>

              <View style={styles.categoryItem}>
                <Image
                  source={{
                    uri: "https://www.unukaltim.ac.id/wp-content/uploads/2019/12/graduate-icon-png-28-2.png",
                  }}
                  style={styles.imgIcon}
                />
                <Text ellipsizeMode="clip" style={styles.categoryItemText}>
                  Education
                </Text>
              </View>
              <View style={styles.categoryItem}>
                <Image
                  source={{
                    uri: "https://www.unukaltim.ac.id/wp-content/uploads/2019/12/graduate-icon-png-28-2.png",
                  }}
                  style={styles.imgIcon}
                />
                <Text ellipsizeMode="clip" style={styles.categoryItemText}>
                  Education
                </Text>
              </View>
              <View style={styles.categoryItem}>
                <Image
                  source={{
                    uri: "https://www.unukaltim.ac.id/wp-content/uploads/2019/12/graduate-icon-png-28-2.png",
                  }}
                  style={styles.imgIcon}
                />
                <Text ellipsizeMode="clip" style={styles.categoryItemText}>
                  Education
                </Text>
              </View>
            </Scroll>
          </View>
        </View>

        <View style={styles.categoryHeader}>
          <Text style={styles.categoryHeaderText}>Featured</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <Scroll horizontal>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://www.unukaltim.ac.id/wp-content/uploads/2019/12/graduate-icon-png-28-2.png",
              }}
              style={styles.imgCard}
            />
            <Text style={styles.cardTitle}>
              Education
            </Text>
          </View>
        </Scroll>

        {auth?.currentUser?.email ? (
          <Btn onPress={handleSignOut}>Sign Out</Btn>
        ) : (
          <Btn onPress={goToSignIn}>Sign In</Btn>
        )}
      </View>
    </Scroll>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 0,
  },

  greeting: {
    marginTop: 40,
    paddingHorizontal: 20,
  },

  greetingText: {
    fontSize: 32,
    fontWeight: "bold",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  imgBanner: {
    width: "100%",
    height: 200,
    marginVertical: 8,
  },

  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
  },

  categoryHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  categoryItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 2,
    padding: 4,
    backgroundColor: "#fff333",
    borderRadius: 30,
    width: 120,
  },

  imgIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  categoryItemText: {
    fontSize: 18,
    marginLeft: 10,
    maxWidth: 100,
  },

  card: {
    width: 238,
    height: 235,
    marginHorizontal: 6,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  imgCard: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  }
});