import * as React from 'react'
import {View , StyleSheet , ScrollView , Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator , DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import { Platform } from 'react-native'
import Contact from '../Screens/Contact'
import Home from '../Screens/Home'


const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
    return(
        <ScrollView style={StyleSheet.container}>
            <View >
                <View>
                    <Text>Menu</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
                <DrawerItem 
                    icon={()=><Icon name={Platform.OS === 'ios' ? "ios-close" : "md-close"}/>}
                    label="Close"
                    onPress={()=>props.navigation.closeDrawer()}
                />

                
            </DrawerContentScrollView>
        </ScrollView>
    )
}

function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    );
  }

export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <MyDrawer/>

        </NavigationContainer>
    )
}