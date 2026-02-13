import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <section class="py-32 bg-white dark:bg-[#050505]">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="max-w-xl">
            <h2 class="text-4xl md:text-6xl font-bold mb-6 dark:text-white">Selected Works</h2>
            <p class="text-zinc-500 dark:text-zinc-400 text-lg">A showcase of our most challenging and rewarding engineering projects.</p>
          </div>
          <a href="#" class="text-brand-light font-bold flex items-center gap-2 group">
            View all projects
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
        
        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 h-auto md:h-[800px]">
            
            <!-- Item 1: Large -->
            <div class="group md:col-span-2 md:row-span-2 relative rounded-[40px] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80"></div>
                <!-- Placeholder Image with Overlay effect -->
                <div class="absolute inset-0 bg-[#0a0a0a] group-hover:scale-105 transition-transform duration-1000"></div> 
                
                <div class="absolute bottom-0 left-0 p-10 z-20 w-full">
                    <div class="flex items-center gap-4 mb-4">
                      <div class="w-12 h-12 rounded-xl bg-brand-light/20 flex items-center justify-center text-brand-light">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <span class="text-brand-light font-bold tracking-widest text-sm uppercase">Fintech Ecosystem</span>
                    </div>
                    <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">Nexus Banking App</h3>
                    <p class="text-zinc-400 text-lg max-w-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">Micro-frontend architecture handling 1M+ real-time transactions with sub-second latency.</p>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="group relative rounded-[40px] overflow-hidden bg-zinc-800 border border-white/5 shadow-xl min-h-[350px]">
                <div class="absolute inset-0 bg-[#121212] group-hover:scale-110 transition-transform duration-1000"></div>
                <div class="absolute bottom-0 left-0 p-8 z-20">
                    <div class="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 mb-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-2">Aero System</h3>
                    <p class="text-zinc-400">Drone Telemetry Dashboard for real-time fleet management.</p>
                </div>
            </div>

            <!-- Item 3 -->
            <div class="group relative rounded-[40px] overflow-hidden bg-zinc-900 border border-white/5 shadow-xl min-h-[350px]">
                <div class="absolute inset-0 bg-[#080808] group-hover:scale-110 transition-transform duration-1000"></div>
                <div class="absolute bottom-0 left-0 p-8 z-20">
                    <div class="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-2">Lumina UI</h3>
                    <p class="text-zinc-400">Enterprise Design System optimized for large-scale SaaS.</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent { }
