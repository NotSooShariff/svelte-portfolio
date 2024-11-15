<script lang="ts">
  import { onMount } from 'svelte';
  import ThemeToggle from './lib/ThemeToggle.svelte';
  import Profile from './lib/Profile.svelte';
  import Content from './lib/Content.svelte';
  import config from './data/config.json';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<div class="min-h-screen font-jakarta relative overflow-hidden transition-colors duration-200">
  {#if mounted}
    <div class="fixed inset-0 dot-pattern opacity-50 pointer-events-none" />
    <div class="fixed inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none" />
    <ThemeToggle />
    
    <div class="mx-auto">
      <div class="lg:grid lg:grid-cols-[400px,1fr]">
        <Profile 
          name={config.name}
          title={config.title}
          image={config.image}
          bio={config.bio}
          tools={config.tools}
          social={config.social}
        />
        <Content
          projects={config.projects}
          education={config.education}
          research={config.research}
        />
      </div>
    </div>
  {/if}
</div>