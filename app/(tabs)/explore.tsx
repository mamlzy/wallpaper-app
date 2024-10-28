import { DownloadPictureSheet } from '@/components/bottom-sheet';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  const [open, setOpen] = useState(false);

  console.log({ open });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Explore Page</Text>

        <Button
          title='Open Bottom Sheet'
          onPress={() => {
            setOpen(true);
          }}
        ></Button>

        {open && (
          <DownloadPictureSheet
            onClose={() => {
              setOpen(false);
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
