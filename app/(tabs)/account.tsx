import { Link } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <SafeAreaView>
      <Text>Account Page</Text>

      <Link href='/account-info'>Account Information</Link>
    </SafeAreaView>
  );
}
