import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-social-proof',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-32 bg-white dark:bg-[#050505] overflow-hidden border-y border-zinc-100 dark:border-white/5">
      <div class="container mx-auto px-6">
        
        <!-- Header -->
        <div class="text-center mb-24 max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-7xl font-bold mb-6 dark:text-white tracking-tight">{{ t().about.title }}</h2>
          <p class="text-brand-light font-bold text-lg mb-8 uppercase tracking-widest">{{ t().about.subtitle }}</p>
          <div class="h-px w-24 bg-brand-light/20 mx-auto mb-12"></div>
          <p class="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl leading-relaxed font-light italic">
            "{{ t().about.content }}"
          </p>
        </div>

        <!-- Footprint / Locations -->
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-32">
          @for (loc of t().about.locations; track loc.city) {
            <div class="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 group hover:border-brand-light/30 transition-all duration-500">
               <div class="text-[10px] font-bold text-brand-light uppercase tracking-[0.2em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">{{ loc.state }}</div>
               <h3 class="text-2xl font-bold dark:text-white group-hover:translate-x-1 transition-transform">{{ loc.city }}</h3>
            </div>
          }
        </div>

        <!-- Brands/Stack Carousel -->
        <div class="relative w-full">
          <div class="text-center mb-10">
            <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">Our Technical Stack</span>
          </div>
          <div class="flex overflow-hidden group">
            <div class="flex animate-infinite-scroll group-hover:paused">
              @for (logo of allLogos; track $index) {
                <div class="flex-none w-32 md:w-48 mx-4 md:mx-8 flex flex-col items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div class="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-3">
                    <div class="text-xl md:text-2xl flex items-center justify-center" [innerHTML]="logo.safeIcon"></div>
                  </div>
                  <span class="text-xs md:text-sm font-medium dark:text-zinc-500">{{ logo.name }}</span>
                </div>
              }
            </div>
          </div>
          <!-- Faders for smooth carousel edges -->
          <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#050505] to-transparent pointer-events-none z-10"></div>
          <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#050505] to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
     </section>
  `
})
export class SocialProofComponent {
  private sanitizer = inject(DomSanitizer);
  i18n = inject(I18nService);
  t = this.i18n.t;

  logos = [
    { name: 'Angular', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.7 3.7l1.6 13.9L12 24l8.7-6.4 1.6-13.9L12 0zm0 3.3l6.5 2.3-.9 7.6H6.4l-.9-7.6 6.5-2.3z"/></svg>' },
    { name: 'Ionic', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.818C6.577 21.818 2.182 17.423 2.182 12c0-5.423 4.395-9.818 9.818-9.818 5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818zM12 5.455c-3.615 0-6.545 2.93-6.545 6.545S8.385 18.545 12 18.545 18.545 15.615 18.545 12 15.615 5.455 12 5.455zm0 10.91c-2.41 0-4.364-1.955-4.364-4.364 0-2.41 1.954-4.364 4.364-4.364 2.41 0 4.364 1.954 4.364 4.364 0 2.41-1.954 4.364-4.364 4.364z"/></svg>' },
    { name: 'Node.js', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M6.163 12.306v-3.41l3.003-1.714 3.004 1.714v3.41L9.166 14.02l-3.003-1.714zm6.007-4.42v1.715l3.004 1.714v3.41L12.17 16.44l-3.003-1.716v-1.714l-3.004-1.714v-3.41l3.004-1.714 3.003 1.714z"/></svg>' },
    { name: 'TypeScript', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM17.41 14.25c.11.02.21.05.31.08.1.03.2.06.29.1.09.04.18.08.27.13.09.05.17.1.25.16.08.06.15.12.21.19.06.07.12.14.17.21.05.08.09.16.12.25.04.09.06.19.06.31 0 .2-.04.38-.13.56-.09.18-.21.34-.36.48-.15.14-.32.26-.52.36-.2.1-.42.17-.65.22-.23.05-.46.08-.69.08-.18 0-.35-.01-.52-.03-.17-.02-.34-.05-.51-.08-.17-.04-.33-.08-.5-.13-.17-.05-.33-.11-.48-.19-.15-.08-.29-.16-.42-.25l.89-1.4c.14.1.28.19.43.27.15.08.31.15.48.2.17.06.35.1.53.13.18.03.36.04.53.04.16 0 .31-.02.46-.06.15-.04.28-.1.39-.17.11-.07.21-.16.27-.27.06-.11.09-.23.09-.37 0-.15-.05-.28-.15-.39-.1-.11-.23-.21-.38-.28-.15-.07-.32-.12-.51-.17-.19-.05-.39-.1-.58-.13-.19-.03-.39-.08-.57-.12-.18-.04-.36-.1-.51-.18-.15-.08-.29-.18-.39-.31-.1-.13-.15-.29-.15-.49 0-.2.05-.39.14-.57.09-.18.21-.34.37-.47.16-.13.34-.23.55-.32.21-.09.43-.16.67-.2.24-.04.48-.06.72-.06.16 0 .32.01.48.02.16.01.32.03.48.06.16.03.32.07.47.12.15.05.29.1.44.17.15.07.28.13.4.21l-.77 1.4c-.11-.07-.22-.12-.34-.17-.12-.05-.25-.1-.39-.13-.14-.03-.3-.06-.46-.08-.16-.02-.33-.03-.5-.03-.13 0-.26.02-.38.05-.12.03-.23.08-.32.14-.09.06-.16.14-.21.23-.05.09-.08.2-.08.31 0 .15.05.27.15.37.1.1.24.19.4.26.16.07.34.13.54.18.2.05.41.09.62.13.21.04.41.09.61.14zM4.14 5.34h6.05V6.9H8.22v11.75h-2.1V6.9H4.14V5.34z"/></svg>' },
    { name: 'Sass', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12.008 24c-3.141 0-5.83-1.666-8.775-1.666-1.745 0-2.834.783-2.834 1.954V24H0v-.321c0-2.316 1.838-3.557 4.148-3.557 3.557 0 6.64 1.745 9.172 1.745 1.55 0 2.51-.783 2.51-1.884v-.023c0-1.171-.85-1.63-2.317-2.181-2.915-1.125-5.325-1.928-5.325-4.82v-.023c0-2.686 2.387-4.223 5.348-4.223 2.387 0 4.154 1.056 5.325 2.55l-1.445 1.354c-.94-.964-2.18-1.56-3.79-1.56-1.859 0-3.053 1.01-3.053 2.158v.024c0 1.285 1.102 1.744 2.64 2.317 2.914 1.079 4.98 1.974 4.98 4.706v.023c0 2.87-2.387 4.498-5.385 4.498zm11.332-1.905l.3-.298c.138-.138.163-.3.072-.416l-.23-.275c-.114-.138-.3-.138-.415-.027l-.46.46-.3-.299c.137-.137.163-.298.071-.415l-.23-.275c-.113-.138-.299-.138-.415-.027l-.459.46-.23-.229c-.114-.112-.275-.091-.392.025l-.32.32c-.114.113-.137.275-.024.391l.23.23-.3.298c-.137.138-.162.299-.071.416l.23.275c.114.137.299.137.414.027l.46-.46.3.299c-.137.137-.162.298-.071.415l.23.275c.113.138.299.138.414.027l.46-.46.298.298c.113.111.274.091.391-.025l.321-.321zm-2.022-7.854s-.485-.27-.63-.382a.256.256 0 01-.06-.347c.189-.283.475-.7.475-.7s.352.4.526.697a.262.262 0 01-.067.348c-.082.062-.244.134-.244.134v.25h-.25v-.25z"/></svg>' },
    { name: 'Firebase', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3.89 15.67L5.27 1.73l3.05 4.29-4.43 9.65zM20.11 15.67l-1.38-13.94-3.04 4.29 4.42 9.65zM12 4.43v15.14l8.11-8.11-8.11-7.03z"/></svg>' },
    { name: 'Tailwind', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624.425.43.856.865 1.347 1.234.42.316.896.536 1.411.696.533.166 1.144.246 1.754.246 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z"/></svg>' },
    { name: 'Workday', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M11.902 4.212c-4.148 0-7.518 3.37-7.518 7.518 0 .8.125 1.569.358 2.29L1.93 21.01h3.337l1.795-5.385c1.396.634 2.949.99 4.588.99 4.148 0 7.518-3.37 7.518-7.518 0-4.148-3.37-7.518-7.518-7.518zm0 11.277c-2.479 0-4.603-1.423-5.613-3.483l-1.03 3.09C4.168 13.593 4 12.2 4 11.73c0-4.383 3.553-7.936 7.936-7.936s7.936 3.553 7.936 7.936-3.553 7.936-7.936 7.936z"/></svg>' },
    { name: 'Next.js', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21.6c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm4.8-11.4c0-1.1-.9-2-2-2-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2zM9 9h2v6H9V9z"/></svg>' }
  ].map(l => ({
    ...l,
    safeIcon: this.sanitizer.bypassSecurityTrustHtml(l.icon)
  }));

  // Tripled for infinite scroll effect
  allLogos = [...this.logos, ...this.logos, ...this.logos];
}
