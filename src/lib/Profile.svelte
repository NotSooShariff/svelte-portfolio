<script lang="ts">
  import type { Tool } from '../types';
  
  export let name: string;
  export let title: string;
  export let image: string;
  export let bio: string;
  export let tools: Tool[];
  export let social: Record<string, string>;
</script>

<div class="lg:h-full lg:sticky top-0 glass">
  <div class="h-full p-8 lg:overflow-y-auto scrollbar-thin">
    <div class="flex flex-col items-center mb-8 max-w-sm mx-auto">
      <div class="gradient-border mb-6">
        <img 
          src={image} 
          alt={name} 
          class="w-32 h-32 object-cover bg-white dark:bg-slate-800" 
        />
      </div>
      <div class="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{name}</div>
      <p class="text-lg font-medium mb-4">{title}</p>
      <p class="text-center text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">{bio}</p>
      
      <div class="flex space-x-6 mb-8">
        {#each Object.entries(social) as [platform, url]}
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <span class="capitalize text-sm">{platform}</span>
          </a>
        {/each}
      </div>
    </div>

    <div class="space-y-4 max-w-sm mx-auto">
      {#each tools as tool}
        <div class="gradient-border">
          <div class="glass p-4">
            <h3 class="text-sm font-medium mb-3 text-slate-600 dark:text-slate-400">{tool.name}</h3>
            <div class="flex flex-wrap gap-2">
              {#each tool.skills as skill}
                <span class="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 
                           rounded-md text-xs border border-slate-200 dark:border-slate-700">
                  {skill}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>