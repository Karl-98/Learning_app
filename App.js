import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

// นําเข้าหน้าจอ
import HomeScreen from './screens/HomeScreen';
import LessonListScreen from './screens/LessonListScreen';
import LessonDetailScreen from './screens/LessonDetailScreen';

// รักษา splash screen ไว้จนกว่าจะพร้อม
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const App = () => {
return (
<NavigationContainer>
<StatusBar style="light" />
<Stack.Navigator
initialRouteName="Home"
screenOptions={{
headerStyle: {
backgroundColor: '#5e72e4',
},
headerTintColor: '#fff',
headerTitleStyle: {
fontWeight: 'bold',
},
}}
>
<Stack.Screen
name="Home"
component={HomeScreen}
options={{ title: 'หน้าหลัก' }}
/>
<Stack.Screen
name="LessonList"
component={LessonListScreen}
options={{ title: 'บทเรียนทั้งหมด' }}
/>
<Stack.Screen
name="LessonDetail"
component={LessonDetailScreen}
options={({ route }) => ({ title: route.params?.title || 'บทเรียน' })}
/>
</Stack.Navigator>
</NavigationContainer>
);
};

export default App;