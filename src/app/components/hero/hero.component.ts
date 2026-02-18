import { Component, ChangeDetectionStrategy, inject, signal, OnDestroy, PLATFORM_ID, effect } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { ThemeService } from '../../core/theme.service';
import { ParticlesComponent } from './particles/particles.component';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, ParticlesComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <!-- Background -->
      <app-particles />
      
      <!-- Gradient Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-light/10 blur-[120px] rounded-full pointer-events-none"></div>

      <!-- Content -->
      <div class="relative z-10 container mx-auto px-6 text-center">
        <!-- Logo Hero Integration -->
        <div class="mb-8 flex justify-center transform hover:scale-105 transition-transform duration-700">
            <img [src]="theme.isDark() ? 'assets/icons/sheplabs_logo_white.svg' : 'assets/icons/sheplabs_logo_black.svg'" alt="Shepsoft Labs Logo" class="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]" />
        </div>

        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span class="block text-gray-900 dark:text-white mb-2">{{ t().hero.prefix }}</span>
          <span class="text-gradient">{{ t().hero.suffix }}</span>
        </h1>
        
        <div class="h-12 flex items-center justify-center mb-8">
            <span class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-mono">
                > {{ t().hero.focus }} <span class="text-brand-light font-bold">{{ currentTypingText() }}</span><span class="animate-pulse">_</span>
            </span>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="bg-brand-light hover:bg-brand-dark text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,122,255,0.3)] hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] transform hover:-translate-y-1 text-center">
                {{ t().nav.contact }}
            </a>
            <a href="#work" class="glass text-gray-900 dark:text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-zinc-200 dark:border-white/10 text-center">
                {{ t().nav.work }}
            </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  `
})
export class HeroComponent implements OnDestroy {
    i18n = inject(I18nService);
    theme = inject(ThemeService);
    t = this.i18n.t;

    currentTypingText = signal('');
    private timeoutId: any;
    private platformId = inject(PLATFORM_ID);

    // Typing state
    private wordIndex = 0;
    private charIndex = 0;
    private isDeleting = false;

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            // Re-start typing when the word list changes (language toggle)
            effect(() => {
                const words = this.t().hero.typing;
                if (this.timeoutId) clearTimeout(this.timeoutId);

                // Reset state to start fresh with new language
                this.wordIndex = 0;
                this.charIndex = 0;
                this.isDeleting = false;
                this.type();
            });
        }
    }

    private type() {
        const words = this.t().hero.typing;
        const currentWord = words[this.wordIndex % words.length];

        if (this.isDeleting) {
            this.currentTypingText.set(currentWord.substring(0, this.charIndex - 1));
            this.charIndex--;
        } else {
            this.currentTypingText.set(currentWord.substring(0, this.charIndex + 1));
            this.charIndex++;
        }

        let delta = this.isDeleting ? 50 : 100;

        if (!this.isDeleting && this.charIndex === currentWord.length) {
            this.isDeleting = true;
            delta = 2000; // Pause at end of word
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex++;
            delta = 500; // Pause before next word
        }

        this.timeoutId = setTimeout(() => this.type(), delta);
    }

    ngOnDestroy() {
        if (this.timeoutId) clearTimeout(this.timeoutId);
    }
}

