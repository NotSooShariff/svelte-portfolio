<script lang="ts">
  import { theme } from '../stores/theme';
  
  function toggleTheme() {
    theme.update($theme === 'dark' ? 'light' : 'dark');
  }
</script>

<button
  on:click={toggleTheme}
  aria-label={$theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
  class="fixed top-6 right-6 p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 
         backdrop-blur-sm border border-slate-200 dark:border-slate-700
         hover:bg-slate-50 dark:hover:bg-slate-700/70 transition-all duration-200"
>
  {#if $theme === 'dark'}
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  {/if}
</button>