import { ErrorToast } from "react-native-toast-message";
import { colors } from "../../../Constants/colors";

const Error = (props) => (
  <ErrorToast
    {...props}
    contentContainerStyle={{ paddingHorizontal: 10 }}
    text1Style={{
      fontSize: 19,
      fontFamily: "Satoshi-Regular",
      fontWeight: "400",
    }}
    text2NumberOfLines={3}
    text2Style={{
      fontSize: 16,
      color: colors.darkGray,
      fontFamily: "Satoshi-Regular",
    }}
  />
);

export default Error;
