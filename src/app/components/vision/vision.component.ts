import { Component, ChangeDetectionStrategy, signal, ElementRef, ViewChild, AfterViewInit, inject, PLATFORM_ID, computed } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-32 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div class="container mx-auto px-6 max-w-5xl">
        <!-- Header -->
        <div class="text-center mb-24">
          <h2 class="text-4xl md:text-6xl font-montserrat mb-10 dark:text-white leading-tight font-bold">{{ t().vision.title }}</h2>
          <div class="space-y-8 max-w-4xl mx-auto">
            <p class="text-zinc-500 dark:text-zinc-300 text-lg md:text-xl leading-relaxed">
              {{ t().vision.p1 }}
            </p>
            <p class="text-zinc-500 dark:text-zinc-300 text-lg md:text-xl leading-relaxed">
              {{ t().vision.p2 }}
            </p>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid md:grid-cols-3 gap-12 mb-32" #statsRef>
          <!-- Projects -->
          <div class="text-center group">
            <div class="text-5xl md:text-6xl font-bold text-brand-light mb-4 transition-transform group-hover:scale-105">
              {{ formattedProjects() }}+
            </div>
            <div class="text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-widest text-sm">
              {{ t().vision.stats.projects.label }}
            </div>
          </div>
          <!-- Lines -->
          <div class="text-center group border-x-0 md:border-x border-zinc-100 dark:border-white/10">
            <div class="text-5xl md:text-6xl font-bold text-brand-light mb-4 transition-transform group-hover:scale-105">
              {{ formattedLines() }}+
            </div>
            <div class="text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-widest text-sm">
              {{ t().vision.stats.lines.label }}
            </div>
          </div>
          <!-- Coffee -->
          <div class="text-center group">
            <div class="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 transition-transform group-hover:scale-105">
              {{ formattedCoffee() }}
            </div>
            <div class="text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-widest text-sm">
              {{ t().vision.stats.coffee.label }}
            </div>
          </div>
        </div>

        <!-- Core Values Section -->
        <div class="text-center mb-16">
          <h3 class="text-3xl font-bold dark:text-white tracking-tight">{{ t().vision.valuesTitle }}</h3>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          @for (val of safeValues(); track val.title) {
            <div class="p-10 rounded-[32px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-white/5 transition-all duration-500 hover:border-brand-light/30 hover:shadow-2xl hover:shadow-brand-light/5 group text-center">
              <div class="mb-6 flex justify-center text-brand-light transform transition-transform group-hover:scale-110 duration-500">
                <div class="w-16 h-16 rounded-2xl bg-brand-light/10 flex items-center justify-center" [innerHTML]="val.safeIcon"></div>
              </div>
              <h4 class="text-xl font-bold mb-4 dark:text-white">{{ val.title }}</h4>
              <p class="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {{ val.desc }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class VisionComponent implements AfterViewInit {
  private sanitizer = inject(DomSanitizer);
  i18n = inject(I18nService);
  t = this.i18n.t;
  platformId = inject(PLATFORM_ID);

  safeValues = computed(() => {
    return this.t().vision.values.map(v => ({
      ...v,
      safeIcon: this.sanitizer.bypassSecurityTrustHtml(v.icon)
    }));
  });

  @ViewChild('statsRef') statsRef!: ElementRef;

  projectsValue = signal(0);
  linesValue = signal(0);
  coffeeValue = signal(0);

  formattedProjects = computed(() => this.formatNumber(this.projectsValue()));
  formattedLines = computed(() => this.formatNumber(this.linesValue()));
  formattedCoffee = computed(() => this.formatNumber(this.coffeeValue()));

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const stats = this.t().vision.stats;
        this.animateValue(this.projectsValue, stats.projects.val, 2000);
        this.animateValue(this.linesValue, stats.lines.val, 2500);
        this.animateValue(this.coffeeValue, stats.coffee.val, 3000);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(this.statsRef.nativeElement);
  }

  animateValue(signalRef: any, end: number, duration: number) {
    const startTime = performance.now();
    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: easeOutExpo for a premium feel
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      signalRef.set(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }

  private formatNumber(val: number): string {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}

