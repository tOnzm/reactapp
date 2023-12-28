import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("News");
  };
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Image
          source={require("../img/pl-logo/pl-long-n.png")}
          style={styles.logo}
        />
        <Text style={styles.matchdayText}>MatchDay Live</Text>
        <Text style={styles.dateText}>วันเสาร์ 5 ธันวาคม </Text>

        <View style={styles.matchdayBox}>
          <View style={styles.up}>
            <Text>นาที</Text>
            <Text>TeamA</Text>
            <Text>LogoA</Text>
            <View style={styles.matchdayScore}>
              <Text style={styles.scoreText}>1 - 0</Text>
            </View>
            <Text>LogoB</Text>
            <Text>TeamB</Text>
            <Text>icon</Text>
          </View>

          <Image
            source={require("../img/bs/truevisi@x2.png")}
            style={styles.logoBc}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  logo: {
    width: 150,
    resizeMode: "contain",
  },
  bg: {
    backgroundColor: "#546E7A",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 0,
    flex: 1,
  },
  matchdayText: {
    fontSize: 29,
    fontWeight: "900",
    color: "#fff",
  },
  dateText: {
    fontSize: 20,
    color: "#fff",
  },
  matchdayBox: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  matchdayScore: {
    backgroundColor: "#000",
    height: 30,
    width: 50,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  logoBc: {
    width: 80,
    resizeMode: "contain",
  },

  up: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
