import { Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function Page() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { paddingTop: insets.top } }}>
      <Tab.Screen name='Library' component={LibraryScreen} />
      <Tab.Screen name='Liked' component={LikedScreen} />
      <Tab.Screen name='Suggested' component={SuggestedScreen} />
    </Tab.Navigator>
  );
}

function LibraryScreen() {
  return (
    <View>
      <Text>Library Screen</Text>
    </View>
  );
}

function LikedScreen() {
  return (
    <View>
      <Text>Liked Screen</Text>
    </View>
  );
}

function SuggestedScreen() {
  return (
    <View>
      <Text>Liked Screen</Text>
    </View>
  );
}
