import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-32 bg-white dark:bg-[#050505]">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="max-w-xl">
            <h2 class="text-4xl md:text-6xl font-bold mb-6 dark:text-white">{{ t().projects.title }}</h2>
            <p class="text-zinc-500 dark:text-zinc-400 text-lg">{{ t().projects.subtitle }}</p>
          </div>
        </div>
        
        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 h-auto md:h-[850px]">
            
            <!-- Item 1: SonicSafe - Premium Integrated Design -->
            <div class="group md:col-span-2 md:row-span-2 relative rounded-[48px] overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-3xl flex flex-col">
                <div class="absolute inset-0 bg-gradient-to-br from-brand-light/5 to-transparent opacity-50"></div>
                
                <!-- Image Container - Flush Top -->
                <div class="relative flex-[1.2] overflow-hidden">
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-transparent to-transparent z-10 pointer-events-none"></div>
                    <img src="assets/images/sonicsafe-banner.webp" 
                         alt="SonicSafe App" 
                         class="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-1000">
                </div>
                
                <!-- Info Section -->
                <div class="p-10 bg-gradient-to-t from-black via-black/90 to-black/40 backdrop-blur-md border-t border-white/5 z-20">
                    <div class="flex items-center gap-4 mb-5">
                      <div class="w-14 h-14 rounded-2xl bg-brand-light/10 flex items-center justify-center text-brand-light border border-brand-light/20 shadow-lg shadow-brand-light/5">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-brand-light font-bold tracking-[0.2em] text-xs uppercase">{{ t().projects.sonicsafe.category }}</span>
                        <h3 class="text-3xl md:text-5xl font-bold text-white mt-1">{{ t().projects.sonicsafe.title }}</h3>
                      </div>
                    </div>
                    <p class="text-zinc-300 text-lg leading-relaxed max-w-2xl font-light">{{ t().projects.sonicsafe.desc }}</p>
                </div>
            </div>

            <!-- Item 2: Elise - Modern Floating Layout -->
            <div class="group relative rounded-[40px] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl flex flex-col min-h-[400px]">
                <div class="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
                
                <!-- Image Container - Flush Top -->
                <div class="relative flex-1 overflow-hidden bg-[#0F1115]">
                    <img src="assets/images/elise.webp" 
                         alt="Elise" 
                         class="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-1000">
                </div>
                
                <!-- Glass Info Section -->
                <div class="p-8 bg-zinc-900/95 border-t border-white/5">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-400/20">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                        <span class="block text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">{{ t().projects.elise.category }}</span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-2">{{ t().projects.elise.title }}</h3>
                    <p class="text-zinc-400 text-sm leading-relaxed line-clamp-2">{{ t().projects.elise.desc }}</p>
                </div>
            </div>

            <!-- Item 3: Valora Dashboard Mockup -->
            <div class="group relative rounded-[40px] overflow-hidden bg-[#07090D] border border-white/10 shadow-2xl flex flex-col min-h-[400px]">
                <!-- Dashboard Mockup Area - Reduced Size for Hover Space -->
                <div class="relative flex-1 pt-12 px-6 pb-0 bg-[#0A0D14] overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent z-10 pointer-events-none"></div>
                    <!-- Fake Dashboard UI -->
                    <div class="h-full w-full rounded-t-2xl bg-[#0F1420] border border-white/10 border-b-0 flex flex-col overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-4 transition-transform duration-700">
                        <!-- Sidebar & Header -->
                        <div class="h-8 border-b border-white/5 flex items-center px-4 gap-2">
                            <div class="w-2 h-2 rounded-full bg-red-500/50"></div>
                            <div class="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                            <div class="w-2 h-2 rounded-full bg-green-500/50"></div>
                            <div class="ml-2 h-2 w-16 bg-white/10 rounded-full"></div>
                        </div>
                        <!-- Content -->
                        <div class="flex-1 p-4 flex flex-col gap-4">
                            <!-- Stats Boxes -->
                            <div class="grid grid-cols-2 gap-3">
                                <div class="h-14 rounded-xl bg-white/5 p-2 flex flex-col justify-end">
                                    <div class="h-1.5 w-8 bg-green-400/40 rounded-full mb-1"></div>
                                    <div class="h-3 w-12 bg-white/20 rounded-full"></div>
                                </div>
                                <div class="h-14 rounded-xl bg-white/5 p-2 flex flex-col justify-end">
                                    <div class="h-1.5 w-8 bg-blue-400/40 rounded-full mb-1"></div>
                                    <div class="h-3 w-12 bg-white/20 rounded-full"></div>
                                </div>
                            </div>
                            <!-- Fake List -->
                            <div class="flex-1 flex flex-col gap-2 pt-2">
                                <div class="h-8 rounded-lg bg-white/5 border border-white/5 flex items-center px-3 gap-3">
                                    <div class="w-4 h-4 rounded bg-purple-500/30"></div>
                                    <div class="h-2 flex-1 bg-white/10 rounded-full"></div>
                                    <div class="w-6 h-2 bg-white/10 rounded-full"></div>
                                </div>
                                <div class="h-8 rounded-lg bg-white/5 border border-white/5 flex items-center px-3 gap-3">
                                    <div class="w-4 h-4 rounded bg-blue-500/30"></div>
                                    <div class="h-2 flex-1 bg-white/10 rounded-full"></div>
                                    <div class="w-6 h-2 bg-white/10 rounded-full"></div>
                                </div>
                                <div class="h-8 rounded-lg bg-white/5 border border-white/5 flex items-center px-3 gap-3">
                                    <div class="w-4 h-4 rounded bg-emerald-500/30"></div>
                                    <div class="h-2 flex-1 bg-white/10 rounded-full"></div>
                                    <div class="w-6 h-2 bg-white/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <!-- Floating Cursor Mockup -->
                        <div class="absolute bottom-4 right-4 w-6 h-6 z-30 opacity-80 group-hover:translate-x-[-20px] group-hover:translate-y-[-10px] transition-all duration-1000">
                            <svg class="w-full h-full text-white fill-current drop-shadow-lg" viewBox="0 0 24 24"><path d="M7 2l12 11.23-5.32 1.34 3.73 7.03-2.91 1.54-3.76-7.1-4.74 3.96V2z"/></svg>
                        </div>
                    </div>
                </div>
                
                <!-- Info Section -->
                <div class="p-8 bg-[#07090D] border-t border-white/10">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-400/20">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zm0-10V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zm12 10v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zm0-10V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2z"></path></svg>
                        </div>
                        <span class="block text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">{{ t().projects.valora.category }}</span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-2">{{ t().projects.valora.title }}</h3>
                    <p class="text-zinc-400 text-sm leading-relaxed line-clamp-2">{{ t().projects.valora.desc }}</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  i18n = inject(I18nService);
  t = this.i18n.t;
}
