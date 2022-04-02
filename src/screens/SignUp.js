import React from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import { auth, provider } from "../firebase";

export const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function handleSignUp() {
    if (email.length === 0 || password.length === 0) {
      setError("Please enter an email and password");
      return;
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          if (user) {
            // setLoading(false);
            // setError("");
            setEmail("");
            setPassword("");
          }
          console.warn(JSON.stringify(userCredentials));
        })
        .catch((error) => {
          console.warn(JSON.stringify(error));
          // setLoading(false);
          // setError(error.message);
        });
    }
  }

  function handleSignUpGmail() {
    auth
      .signInWithPopup(provider)
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

  function handleSignIn() {
    navigation.replace("Signin");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Account</Text>
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
        <TouchableHighlight onPress={handleSignUp} style={styles.button}>
          <Text style={styles.textButton}>Sign Up</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={handleSignIn} style={styles.buttonLogin}>
          <Text style={styles.textButtonBack}>Sign in</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  buttonLogin: {
    height: 40,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  textButton: {
    color: "white",
  },

  textButtonBack: {
    color: "#017A9B",
  },
});

