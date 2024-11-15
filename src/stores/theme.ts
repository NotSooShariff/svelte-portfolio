import { writable } from 'svelte/store';

function createThemeStore() {
  const { subscribe, set, update } = writable<'light' | 'dark'>('light');

  if (typeof window !== 'undefined') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      set('dark');
      document.documentElement.classList.add('dark');
    }
  }

  return {
    subscribe,
    update: (theme: 'light' | 'dark') => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      set(theme);
    }
  };
}

export const theme = createThemeStore();