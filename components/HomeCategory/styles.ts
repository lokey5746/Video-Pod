import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  image: {
    height: 170,
    width: 100,
    resizeMode: "cover",
    borderRadius: 8,
    margin: 5,
  },

  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
