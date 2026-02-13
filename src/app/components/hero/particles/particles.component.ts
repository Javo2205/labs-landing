import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, NgZone, ChangeDetectionStrategy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-particles',
    standalone: true,
    template: `<canvas #canvas class="absolute inset-0 w-full h-full pointer-events-none opacity-40"></canvas>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticlesComponent implements AfterViewInit, OnDestroy {
    @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

    private ngZone = inject(NgZone);
    private platformId = inject(PLATFORM_ID);
    private animationId: number | null = null;

    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) return;

        this.ngZone.runOutsideAngular(() => {
            this.initParticles();
        });
    }

    ngOnDestroy() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
    }

    private initParticles() {
        const canvas = this.canvasRef.nativeElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = Math.floor((width * height) / 15000);

        let mouse = { x: -1000, y: -1000 };

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        class Particle {
            x = Math.random() * width;
            y = Math.random() * height;
            vx = (Math.random() - 0.5) * 0.5;
            vy = (Math.random() - 0.5) * 0.5;
            size = Math.random() * 2 + 1;
            baseX = this.x;
            baseY = this.y;
            density = (Math.random() * 30) + 1;

            update() {
                // Mouse Repulsion
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                const maxDistance = 150;
                let force = (maxDistance - distance) / maxDistance;

                if (distance < maxDistance) {
                    this.vx -= forceDirectionX * force * 0.5;
                    this.vy -= forceDirectionY * force * 0.5;
                }

                this.x += this.vx;
                this.y += this.vy;

                // Friction
                this.vx *= 0.95;
                this.vy *= 0.95;

                // Return to base slightly
                if (distance > maxDistance) {
                    this.vx += ((Math.random() - 0.5) * 0.2);
                    this.vy += ((Math.random() - 0.5) * 0.2);
                }

                // Bounds
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = '#007AFF';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Connect particles
            ctx.strokeStyle = 'rgba(0, 122, 255, 0.05)';
            ctx.lineWidth = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let dis = Math.sqrt(dx * dx + dy * dy);
                    if (dis < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            this.animationId = requestAnimationFrame(animate);
        }
        animate();
    }
}
