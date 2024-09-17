export {};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Twitch: any; // Здесь можно указать более точный тип вместо 'any', если доступен
  }
}
