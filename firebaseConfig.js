import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF5xmUiPkKtfTsnsFiHBzqfW6IqgsXNA4",
  authDomain: "family-tree-ct.firebaseapp.com",
  projectId: "family-tree-ct",
  storageBucket: "family-tree-ct.appspot.com",
  messagingSenderId: "906153056905",
  appId: "1:906153056905:web:d9d78765ca5f1d63924458",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// IOS = 864387162736-39fs8t5tcihm21rbo3mmgro7vts9681o.apps.googleusercontent.com
// Android = 864387162736-2kl6po0kfakbsibdqd4jael62n137iaj.apps.googleusercontent.com
