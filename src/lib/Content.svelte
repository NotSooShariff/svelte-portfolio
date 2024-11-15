<script lang="ts">
  export let projects: any[];
  export let education: any[];
  export let research: any[];
</script>

<div class="p-8 min-h-screen">
  <div class="max-w-4xl mx-auto">
    <section class="mb-16">
      <h1 class="text-lg font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</h1>
      <div class="grid gap-6 sm:grid-cols-2">
        {#each projects as project}
          <div class="gradient-border">
            <div class="glass p-5">
              <h2 class="text-base font-medium mb-2">{project.title}</h2>
              <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.technologies as tech}
                  <span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 
                             rounded text-xs border border-slate-200 dark:border-slate-700">
                    {tech}
                  </span>
                {/each}
              </div>
              <a href={project.link} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                View Project →
              </a>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section class="mb-16">
      <h1 class="text-lg font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</h1>
      <div class="space-y-4">
        {#each education as edu}
          <div class="gradient-border">
            <div class="glass p-5">
              <h2 class="text-base font-medium mb-1">{edu.degree}</h2>
              <p class="text-slate-600 dark:text-slate-400 text-sm">{edu.school}</p>
              <p class="text-slate-500 dark:text-slate-500 text-sm">{edu.year}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section>
      <h1 class="text-lg font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Research</h1>
      <div class="space-y-4">
        {#each research as item}
          <div class="gradient-border">
            <div class="glass p-5">
              <h2 class="text-base font-medium mb-2">{item.title}</h2>
              <p class="text-slate-600 dark:text-slate-400 text-sm mb-1">{item.publication}</p>
              <p class="text-slate-500 dark:text-slate-500 text-sm mb-3">{item.year}</p>
              <a href={item.link} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                Read Paper →
              </a>
            </div>
          </div>
        {/each}
      </div>
    </section>
  </div>
</div>