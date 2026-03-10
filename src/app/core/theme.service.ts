import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private platformId = inject(PLATFORM_ID);
    readonly isDark = signal<boolean>(true);

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            const stored = localStorage.getItem('theme');
            if (stored) {
                this.isDark.set(stored === 'dark');
            } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                this.isDark.set(false);
            }
            this.applyTheme(this.isDark());
        }

        effect(() => {
            const dark = this.isDark();
            if (isPlatformBrowser(this.platformId)) {
                this.applyTheme(dark);
                localStorage.setItem('theme', dark ? 'dark' : 'light');
            }
        });
    }

    private applyTheme(isDark: boolean) {
        if (!isPlatformBrowser(this.platformId)) return;

        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            root.style.colorScheme = 'dark';
        } else {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
        }
    }

    toggle() {
        this.isDark.update(d => !d);
    }
}
