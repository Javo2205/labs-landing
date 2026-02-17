import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/theme.service';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="fixed top-0 w-full z-50 transition-all duration-300 glass border-b-0 border-white/5">
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 group">
          <img [src]="theme.isDark() ? 'assets/icons/sheplabs_logo_white.svg' : 'assets/icons/sheplabs_logo_black.svg'" alt="ShepsoftLabs Logo" class="hidden md:block w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300">
          <span class="font-montserrat font-bold text-xl tracking-tight dark:text-white">ShepsoftLabs</span>
        </a>


        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8">
          @for (link of links; track link.id) {
            <a [href]="'#' + link.id" 
               class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-light dark:hover:text-brand-light transition-colors">
              {{ t().nav[link.key] }}
            </a>
          }
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2 md:gap-4">
          <!-- Lang Switcher -->
          <button (click)="i18n.toggle()" class="text-[10px] md:text-sm font-bold px-2 py-1 rounded border border-gray-700 hover:border-brand-light transition-colors leading-none">
            {{ i18n.lang().toUpperCase() }}
          </button>

          <!-- Theme Toggle -->
          <button (click)="theme.toggle()" class="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Toggle Theme">
             @if (theme.isDark()) {
               <!-- Sun Icon -->
               <svg class="w-4 h-4 md:w-5 md:h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
             } @else {
               <!-- Moon Icon -->
               <svg class="w-4 h-4 md:w-5 md:h-5 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
             }
          </button>

          <!-- CTA -->
          <a href="#contact" class="bg-brand-light hover:bg-brand-dark text-white px-3 md:px-5 py-2 rounded-full font-medium text-xs md:text-sm transition-all shadow-lg shadow-brand-light/20 hover:shadow-brand-light/40 whitespace-nowrap">
            {{ t().nav.contact }}
          </a>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  theme = inject(ThemeService);
  i18n = inject(I18nService);

  t = this.i18n.t;

  links = [
    { id: 'home', key: 'home' as const },
    { id: 'trust', key: 'trust' as const },
    { id: 'services', key: 'services' as const },
    { id: 'vision', key: 'vision' as const },
    { id: 'work', key: 'work' as const },
    { id: 'contact', key: 'contact' as const }
  ];
}
