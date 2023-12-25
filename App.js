import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container} >
      <Header title="ScammerBET" />
      <StatusBar style="auto" />

      <View style={styles.box}>
        <Text style={styles.textTitle}>
          Premier League
        </Text>

        <View style={styles.team}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('เลือกได้ดี')}>
            <Text style={styles.handicapText}>-2/2.5</Text>
            <Text style={styles.ButtonText}>0.75</Text>

          </TouchableOpacity>
          <View style={styles.teamData}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
              }}
            />
            <Text style={styles.teamName}>
              Arsenal
            </Text>
          </View>
          <View style={styles.score}>
            <Text style={styles.textScore}>
              2
            </Text>
            <Text style={styles.textScore}>
              -
            </Text>
            <Text style={styles.textScore}>
              0
            </Text>
          </View>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png',
              }}
            />
            <Text style={styles.teamName}>
              ManUTD
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('คิดใหม่ ให้คิดอีกที')}>
            <Text style={styles.handicapText}>+2/2.5</Text>
            <Text style={styles.ButtonText}>5.0</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.textTitle}>
          News
        </Text>

        <View style={styles.news}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('เลือกได้ดี')}>
            <Text style={styles.handicapText}>-2/2.5</Text>
            <Text style={styles.ButtonText}>0.75</Text>

          </TouchableOpacity>
          <View style={styles.teamData}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
              }}
            />
            <Text style={styles.teamName}>
              Arsenal
            </Text>
          </View>
          <View style={styles.score}>
            <Text style={styles.textScore}>
              2
            </Text>
            <Text style={styles.textScore}>
              -
            </Text>
            <Text style={styles.textScore}>
              0
            </Text>
          </View>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png',
              }}
            />
            <Text style={styles.teamName}>
              ManUTD
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('คิดใหม่ ให้คิดอีกที')}>
            <Text style={styles.handicapText}>+2/2.5</Text>
            <Text style={styles.ButtonText}>5.0</Text>
          </TouchableOpacity>
        </View>
      </View>
     

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#e3eec0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    width: '100%',
    alignItems: 'center',
    padding: 10,

  },
  tinyLogo: {
    alignItems: 'center',
    width: 50,
    height: 50,
    padding: 10,
    marginHorizontal: 10,
    resizeMode: 'contain',

  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,

  },
  button: {
    backgroundColor: '#5e6745',
    color: '#aeba89',
    padding: 10,
    borderRadius: 100 / 20,
    width: 60,
    alignItems: 'center',
  },
  textTitle: {
    color: '#5e6745',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  score: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#aeba89',
    padding: 5,
    borderRadius: 100 / 20,

  },
  textScore: {
    color: '#5e6745',
    fontWeight: 'bold',
    fontSize: 22,

  },
  teamName: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#5e6745',
    fontSize: 12,
  },

  teamData: {
  },
  handicapText: {
    fontSize: 12,
    color: '#fff',
  },
  news: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    
  },

});
