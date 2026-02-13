import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <section class="py-32 bg-white dark:bg-[#050505]">
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

              <button type="submit" [disabled]="form.invalid" 
                class="bg-brand-light hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group">
                {{ t().contact.submit }}
                <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
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

    form = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required]
    });

    submit() {
        if (this.form.valid) {
            console.log('Form Submitted', this.form.value);
            alert('Thank you! We will contact you shortly.');
            this.form.reset();
        }
    }
}
