import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='(no-bottom-bar)/account-info'
        options={{
          headerShown: true,
          headerTitle: 'Account Info',
          headerBackTitle: 'Go Back',
        }}
      />
    </Stack>
  );
}
