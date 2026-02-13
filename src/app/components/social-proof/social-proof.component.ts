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
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 dark:text-white">{{ t().socialProof.title }}</h2>
          <p class="text-zinc-500 dark:text-zinc-400 text-lg">{{ t().socialProof.subtitle }}</p>
        </div>

        <!-- Brands Carousel -->
        <div class="relative w-full mb-32">
          <div class="flex overflow-hidden group">
            <div class="flex animate-infinite-scroll group-hover:paused">
              @for (logo of allLogos; track $index) {
                <div class="flex-none w-48 mx-8 flex flex-col items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div class="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-3">
                    <div class="text-2xl flex items-center justify-center" [innerHTML]="logo.safeIcon"></div>
                  </div>
                  <span class="text-sm font-medium dark:text-zinc-500">{{ logo.name }}</span>
                </div>
              }
            </div>
          </div>
          <!-- Faders for smooth carousel edges -->
          <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#050505] to-transparent pointer-events-none"></div>
          <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#050505] to-transparent pointer-events-none"></div>
        </div>

        <!-- Testimonials -->
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          @for (test of t().socialProof.testimonials; track test.author) {
            <div class="p-10 rounded-[32px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-white/5 relative group transition-all duration-500 hover:border-brand-light/30">
              <!-- Quote Icon -->
              <div class="mb-8 text-brand-light">
                <svg class="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
              </div>
              
              <p class="text-xl leading-relaxed dark:text-zinc-300 mb-10 italic">
                "{{ test.quote }}"
              </p>

              <div class="flex items-center gap-4">
                <div [class]="'w-12 h-12 rounded-full ' + test.colorClass"></div>
                <div>
                  <h4 class="font-bold dark:text-white">{{ test.author }}</h4>
                  <p class="text-zinc-500 text-sm">{{ test.role }}</p>
                </div>
              </div>
            </div>
          }
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
    { name: 'Microsoft', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/></svg>' },
    { name: 'Amazon', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>' },
    { name: 'Meta', icon: '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M15.4 15.6l-3.2-3.2m-1.4 4.6l-2.4-1.6c-2.4-1.6-4.4-4-5.6-7.2.4-.4.8-.8 1.2-1.2 1.2 2.8 2.8 5.2 4.8 6.4h0c1.2.8 2.8.8 4 .4h0l4.8-1.6 4.8 1.2c-.4 2.8-1.2 5.2-2.8 7.2l-2.8-1.2-2.8 1.2z"/></svg>' },
    { name: 'Netflix', icon: '<span class="font-bold text-2xl uppercase">N</span>' },
    { name: 'Tesla', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>' },
    { name: 'Spotify', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>' },
    { name: 'Adobe', icon: '<span class="font-bold text-2xl uppercase">A</span>' },
    { name: 'Airbnb', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>' },
    { name: 'Apple', icon: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C3.84 16.4 3.4 10.6 6.3 8.35c1.4-.98 2.97-.9 3.92-.3 1.05.65 1.63.68 2.68 0 1.12-.73 3.03-.92 4.14.3.42.3.93.73 1.25 1.2.98 1.44-.06 3.52-1.34 5.3-.15.42-.32.85-.5 1.28l.6.15zM12.03 7.25c-.2 0-.4 0-.6-.05 0-2.4 2-4.4 4.4-4.2.1 0 .22.02.32.04 0 2.4-2.12 4.2-4.12 4.2z"/></svg>' }
  ].map(l => ({
    ...l,
    safeIcon: this.sanitizer.bypassSecurityTrustHtml(l.icon)
  }));

  // Tripled for infinite scroll effect
  allLogos = [...this.logos, ...this.logos, ...this.logos];
}
