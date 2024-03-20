import React, { useEffect, useState } from "react";
import { AppStack, AuthStack } from "./Routes";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../../firebaseConfig";
import { ActivityIndicator, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const AuthRouter = () => {
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId:
      "864387162736-39fs8t5tcihm21rbo3mmgro7vts9681o.apps.googleusercontent.com",
    androidClientId:
      "864387162736-2kl6po0kfakbsibdqd4jael62n137iaj.apps.googleusercontent.com",
  });

  const getLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      setUserInfo(userData);
    } catch (e) {
      // console.log("Error getting local user", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  useEffect(() => {
    getLocalUser();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        // console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
      } else {
        // console.log("user not authenticated");
        setUserInfo();
      }
    });
    return () => unsub();
  }, []);

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );

  return userInfo ? <AppStack /> : <AuthStack promptAsync={promptAsync} />;
};

export default AuthRouter;
