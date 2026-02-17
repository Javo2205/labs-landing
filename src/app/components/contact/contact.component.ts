import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-32 bg-white dark:bg-[#050505] relative overflow-hidden">
      <!-- Toast Notification -->
      <div *ngIf="showToast()" 
           class="fixed top-12 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md animate-in fade-in slide-in-from-top-4 duration-500">
        <div [class.bg-emerald-500]="status() === 'success'"
             [class.bg-red-500]="status() === 'error'"
             class="p-4 rounded-2xl shadow-2xl flex items-center gap-4 text-white ring-4 ring-black/5">
          <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <svg *ngIf="status() === 'success'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <svg *ngIf="status() === 'error'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </div>
          <div class="flex-1">
            <p class="font-bold leading-tight">{{ status() === 'success' ? t().contact.alerts.success : t().contact.alerts.error }}</p>
          </div>
          <button (click)="showToast.set(false)" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </div>
      <div class="container mx-auto px-6 max-w-6xl">
        <!-- Section Header -->
        <div class="text-center mb-20 max-w-2xl mx-auto">
          <h2 class="text-4xl md:text-6xl font-bold mb-4 dark:text-white">{{ t().contact.title }}</h2>
          <p class="text-zinc-500 dark:text-zinc-400 text-lg">{{ t().contact.subtitle }}</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-20">
          <!-- Left: Form -->
          <div class="space-y-12">
            <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-10">
              <div class="space-y-8">
                <!-- Name -->
                <div class="group">
                  <label for="name" class="block text-sm font-medium text-zinc-500 mb-2">{{ t().contact.labels.name }}</label>
                  <input type="text" id="name" formControlName="name" 
                    class="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 outline-none focus:border-brand-light transition-colors dark:text-white">
                </div>

                <!-- Email -->
                <div class="group">
                  <label for="email" class="block text-sm font-medium text-zinc-500 mb-2">{{ t().contact.labels.email }}</label>
                  <input type="email" id="email" formControlName="email" 
                    class="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 outline-none focus:border-brand-light transition-colors dark:text-white">
                </div>

                <!-- Message -->
                <div class="group">
                  <label for="message" class="block text-sm font-medium text-zinc-500 mb-2">{{ t().contact.labels.message }}</label>
                  <textarea id="message" formControlName="message" rows="4" 
                    class="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 outline-none focus:border-brand-light transition-colors dark:text-white resize-none"></textarea>
                </div>
              </div>

              <div class="flex flex-col gap-6">
                <!-- Status Message -->
                <div *ngIf="status()" 
                     [class.text-green-500]="status() === 'success'" 
                     [class.text-red-500]="status() === 'error'"
                     class="text-sm font-medium transition-all duration-300">
                  {{ status() === 'success' ? t().contact.alerts.success : t().contact.alerts.error }}
                </div>

                <button type="submit" [disabled]="form.invalid || isSending()" 
                  class="bg-brand-light hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed group w-fit relative overflow-hidden">
                  
                  <!-- Loader Spinner -->
                  <svg *ngIf="isSending()" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>

                  <span class="flex items-center gap-3">
                    {{ isSending() ? t().contact.alerts.sending : t().contact.submit }}
                    <svg *ngIf="!isSending()" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <!-- Right: Info -->
          <div class="space-y-16">
            <div class="space-y-8">
              <h3 class="text-2xl font-bold dark:text-white">{{ t().contact.getInTouch }}</h3>
              <p class="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
                {{ t().contact.body }}
              </p>

              <!-- Contacts -->
              <div class="space-y-6">
                <!-- Email -->
                <div class="flex items-center gap-6">
                  <div class="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 class="font-bold dark:text-white">{{ t().contact.info.email.label }}</h4>
                    <p class="text-zinc-500 dark:text-zinc-400">{{ t().contact.info.email.val }}</p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-center gap-6">
                  <div class="w-12 h-12 rounded-2xl bg-green-600/10 dark:bg-green-500/10 flex items-center justify-center text-green-500">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 class="font-bold dark:text-white">{{ t().contact.info.phone.label }}</h4>
                    <p class="text-zinc-500 dark:text-zinc-400">{{ t().contact.info.phone.val }}</p>
                  </div>
                </div>

                <!-- Location -->
                <div class="flex items-center gap-6">
                  <div class="w-12 h-12 rounded-2xl bg-orange-600/10 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 class="font-bold dark:text-white">{{ t().contact.info.location.label }}</h4>
                    <p class="text-zinc-500 dark:text-zinc-400 whitespace-pre-line">{{ t().contact.info.location.val }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Office Hours Card -->
            <div class="p-8 rounded-[32px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-white/5">
              <h4 class="font-bold dark:text-white mb-4 text-xl">{{ t().contact.hours.title }}</h4>
              <div class="space-y-2 text-zinc-500 dark:text-zinc-400">
                <p>{{ t().contact.hours.week }}</p>
                <p>{{ t().contact.hours.weekend }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  i18n = inject(I18nService);
  t = this.i18n.t;
  fb = inject(FormBuilder);
  http = inject(HttpClient);

  isSending = signal(false);
  status = signal<'success' | 'error' | null>(null);
  showToast = signal(false);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  submit() {
    if (this.form.invalid || this.isSending()) return;

    this.isSending.set(true);
    this.status.set(null);
    this.showToast.set(false);

    // Formspree requires a POST request
    this.http.post('https://formspree.io/f/maqdjkkv', this.form.value)
      .subscribe({
        next: () => {
          this.status.set('success');
          this.showToast.set(true);
          this.form.reset();
          this.isSending.set(false);
          // Auto-hide toast
          setTimeout(() => this.showToast.set(false), 5000);
        },
        error: (err) => {
          console.error('Email sending failed', err);
          this.status.set('error');
          this.showToast.set(true);
          this.isSending.set(false);
          setTimeout(() => this.showToast.set(false), 5000);
        }
      });
  }
}
