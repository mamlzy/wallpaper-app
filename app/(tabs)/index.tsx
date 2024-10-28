import { DownloadPictureSheet } from '@/components/bottom-sheet';
import { ImageCard } from '@/components/image-card';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { useWallpapers } from '@/hooks/useWallpapers';
import { useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  const wallpapers = useWallpapers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: 'white', light: 'white' }}
        headerImage={
          <Image
            source={{
              uri: wallpapers[0].url,
            }}
            style={{ flex: 1 }}
          />
        }
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers}
              renderItem={({ item: wallpaper, index }) => (
                <ImageCard key={index} wallpaper={wallpaper} />
              )}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers}
              renderItem={({ item: wallpaper, index }) => (
                <ImageCard key={index} wallpaper={wallpaper} />
              )}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  innerContainer: {
    flex: 1,
    gap: 10,
  },
});
