import { Wallpaper } from '@/hooks/useWallpapers';
import { Image, StyleSheet, View } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

export function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {
  return (
    <ThemedView>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />

      <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 0.5,
    height: 200,
    borderRadius: 20,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    bottom: 0,
    width: '100%',
  },
});
