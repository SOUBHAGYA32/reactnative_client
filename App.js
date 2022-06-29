import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splashscreen from './app/screens/Splashscreen';
export default function App() {
  return (
    <View style={styles.container}>
      <Splashscreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
