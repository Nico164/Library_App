import React, { useEffect } from "react";
import {
  Button,
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
} from "react-native";
import axios from "axios";
import { auth } from "../firebase";
import Btn from "../components/Btn";
import { ScrollView } from "react-native";

export const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function goToSignUp() {
    navigation.push("Signup");
  }

  useEffect(() => {
    const unscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return () => {
      unscribe();
    };
  }, []);

  function handleLogin() {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user) {
          console.log(user);
          setLoading(false);
          setError("");
          setEmail("");
          setPassword("");
        }
        console.warn(JSON.stringify(userCredentials));
      })
      .catch((error) => {
        console.warn(JSON.stringify(error));
        setLoading(false);
        setError(error.message);
      });
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        showsVerticalScrollIndicator
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Sign In</Text>
          <Text style={styles.headerTextDescription}>
            Build skills for today, tomorrow, and beyond. Education to
            future-proof your career.
          </Text>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableHighlight onPress={handleLogin} style={styles.button}>
            <Text style={styles.textButton}>SignIn</Text>
          </TouchableHighlight>

          <Btn onPress={goToSignUp}>Sign Up</Btn>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    marginTop: 90,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36,
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 18,
  },

  headerTextDescription: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },

  body: {
    flex: 1,
    width: "100%",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
  },

  button: {
    height: 40,
    backgroundColor: "#017A9B",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  textButton: {
    color: "white",
  },
});
