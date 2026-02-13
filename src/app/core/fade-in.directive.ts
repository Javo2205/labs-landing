import { Directive, ElementRef, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[appFadeIn]',
    standalone: true
})
export class FadeInDirective implements OnInit, OnDestroy {
    private element = inject(ElementRef);
    private platformId = inject(PLATFORM_ID);
    private observer: IntersectionObserver | null = null;

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.element.nativeElement.classList.add('fade-in-section');
            this.setupObserver();
        }
    }

    private setupObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.element.nativeElement.classList.add('is-visible');
                    if (this.observer) this.observer.unobserve(entry.target);
                }
            });
        }, options);

        this.observer.observe(this.element.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
