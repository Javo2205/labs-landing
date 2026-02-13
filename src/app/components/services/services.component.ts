import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-32 bg-white dark:bg-[#050505]">
      <div class="container mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-20 max-w-3xl mx-auto">
          <span class="text-brand-light font-bold text-xs tracking-[0.2em] mb-4 block uppercase">{{ t().services.lab }}</span>
          <h2 class="text-3xl md:text-5xl font-bold leading-tight dark:text-white">
            {{ t().services.headline }}
          </h2>
        </div>
        
        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (item of services; track item.id) {
            <div class="group relative p-8 rounded-[32px] transition-all duration-500 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-white/5 hover:border-brand-light/30 dark:hover:border-brand-light/30 hover:shadow-2xl hover:shadow-brand-light/5">
              
              <!-- Icon Container -->
              <div [class]="'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 bg-brand-light/10 text-brand-light'">
                <div class="w-7 h-7 flex items-center justify-center" [innerHTML]="item.safeIcon"></div>
              </div>

              <!-- Content -->
              <h3 class="text-xl font-bold mb-3 dark:text-white leading-tight">
                {{ t().services.items[item.id].title }}
              </h3>
              <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed text-base">
                {{ t().services.items[item.id].desc }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  private sanitizer = inject(DomSanitizer);
  i18n = inject(I18nService);
  t = this.i18n.t;

  services = [
    {
      id: 'frontend' as const,
      icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>'
    },
    {
      id: 'mobile' as const,
      icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>'
    },
    {
      id: 'architecture' as const,
      icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>'
    },
    {
      id: 'design' as const,
      icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 014 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3"></path></svg>'
    },
    {
      id: 'cloud' as const,
      icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm9 6h1m-1 3h1m3-3h1m-1 3h1"></path></svg>'
    },
    {
      id: 'performance' as const,
      icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>'
    }
  ].map(s => ({
    ...s,
    safeIcon: this.sanitizer.bypassSecurityTrustHtml(s.icon)
  }));
}
