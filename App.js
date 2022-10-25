import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './Navigators/DrawerNavigation';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      <DrawerNavigation/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
