// https://ideogram.ai/assets/progressive-image/balanced/response/SzWsCrGJShSKrBmxVt4S_Q
// https://ideogram.ai/assets/progressive-image/balanced/response/5CIyL5vVQcO5DTkiP3NePg
// https://ideogram.ai/assets/progressive-image/balanced/response/lzwzBoOsQguhMQHF2QerYA // square

export type Wallpaper = {
  url: string;
  name: string;
};

export function useWallpapers() {
  return [
    {
      url: 'https://ideogram.ai/assets/progressive-image/balanced/response/SzWsCrGJShSKrBmxVt4S_Q',
      name: 'Heritage',
    },
    {
      url: 'https://ideogram.ai/assets/progressive-image/balanced/response/5CIyL5vVQcO5DTkiP3NePg',
      name: 'Nature',
    },
    {
      url: 'https://ideogram.ai/assets/progressive-image/balanced/response/AFHUwdD_SDWYeXJppdcPiA',
      name: 'Animal',
    },
    // {
    //   url: 'https://ideogram.ai/assets/progressive-image/balanced/response/lzwzBoOsQguhMQHF2QerYA',
    //   name: 'Modern',
    // },
  ];
}
