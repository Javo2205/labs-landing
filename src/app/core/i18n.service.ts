import { Injectable, signal, computed } from '@angular/core';

const DICTIONARY = {
    en: {
        nav: { home: 'Home', services: 'Services', vision: 'Vision', work: 'Work', trust: 'Testimonials', contact: "Let's Talk" },
        hero: { prefix: 'We architect', suffix: 'digital experiences', focus: 'Focusing on', typing: ['Angular High Performance', 'UX/UI Design', 'Cloud Architecture'] },
        vision: {
            title: 'The Vision',
            p1: 'At ShepLabs, we don\'t just write code—we architect digital experiences that resonate with users on an emotional level. Our mission is to bridge the gap between cutting-edge technology and human-centered design.',
            p2: 'Founded by engineers who believe that software should be both powerful and beautiful, we\'ve dedicated ourselves to mastering the art of digital craftsmanship. Every line of code, every pixel, every interaction is carefully considered to create products that don\'t just work—they inspire.',
            stats: {
                projects: { val: 150, label: 'Projects Delivered' },
                lines: { val: 2500000, label: 'Lines of Code' },
                coffee: { val: 8547, label: 'Coffees Consumed' }
            },
            valuesTitle: 'Our Core Values',
            values: [
                { title: 'Precision', desc: 'Every detail matters. We obsess over perfection.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>' },
                { title: 'Innovation', desc: 'We push boundaries and challenge conventions.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>' },
                { title: 'Excellence', desc: 'Quality is not an option—it\'s our standard.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.127l1.414-1.414a3.42 3.42 0 014.828 0l1.414 1.414a3.42 3.42 0 001.946 1.127 3.42 3.42 0 012.35 2.35 3.42 3.42 0 001.127 1.946l1.414 1.414a3.42 3.42 0 010 4.828l-1.414 1.414a3.42 3.42 0 00-1.127 1.946 3.42 3.42 0 01-2.35 2.35 3.42 3.42 0 00-1.127 1.946l-1.414 1.414a3.42 3.42 0 01-4.828 0l-1.414-1.414a3.42 3.42 0 00-1.946-1.127 3.42 3.42 0 01-2.35-2.35 3.42 3.42 0 00-1.127-1.946l-1.414-1.414a3.42 3.42 0 010-4.828l1.414-1.414a3.42 3.42 0 001.127-1.946 3.42 3.42 0 012.35-2.35z"></path></svg>' }
            ]
        },
        socialProof: {
            title: "Trusted By Industry Leaders",
            subtitle: "Companies that believe in our vision",
            testimonials: [
                {
                    quote: "ShepLabs transformed our vision into a reality that exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
                    author: "Sarah Johnson",
                    role: "CEO, TechVision Inc.",
                    colorClass: "bg-blue-500"
                },
                {
                    quote: "Working with ShepLabs was a game-changer. They delivered a product that not only works flawlessly but looks absolutely stunning.",
                    author: "Michael Chen",
                    role: "CTO, Innovation Labs",
                    colorClass: "bg-green-500"
                }
            ]
        },
        services: {
            title: 'Expertise',
            lab: 'THE LAB',
            headline: 'We do not just write code; we solve business problems with engineering precision.',
            items: {
                frontend: { title: 'Frontend Development', desc: 'Angular, React, and Ionic ecosystems crafted with precision and performance in mind.' },
                mobile: { title: 'Mobile Applications', desc: 'Native and hybrid mobile experiences that users love and remember.' },
                architecture: { title: 'System Architecture', desc: 'Scalable backend solutions designed for growth and reliability.' },
                design: { title: 'UX/UI Design', desc: 'Interfaces that blend aesthetics with intuitive user experiences.' },
                cloud: { title: 'Cloud Infrastructure', desc: 'Modern cloud solutions for seamless deployment and scaling.' },
                performance: { title: 'Performance Optimization', desc: 'Lightning-fast applications that deliver exceptional user experiences.' }
            }
        },
        contact: {
            title: "Let's Talk",
            subtitle: "Ready to build something extraordinary?",
            getInTouch: "Get In Touch",
            body: "Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.",
            submit: "Send Message",
            labels: { name: "Your Name", email: "Email Address", message: "Your Message" },
            info: {
                email: { label: "Email", val: "hello@sheplabs.com" },
                phone: { label: "Phone", val: "+1 (234) 567-890" },
                location: { label: "Location", val: "San Francisco, CA\nUnited States" }
            },
            hours: {
                title: "Office Hours",
                week: "Monday - Friday: 9:00 AM - 6:00 PM",
                weekend: "Weekend: Closed"
            }
        }
    },
    es: {
        nav: { home: 'Inicio', services: 'Servicios', vision: 'Visión', work: 'Trabajos', trust: 'Testimonios', contact: 'Hablemos' },
        hero: { prefix: 'Arquitectos de', suffix: 'experiencias digitales', focus: 'Enfocados en', typing: ['Angular de Alto Rendimiento', 'Diseño UX/UI', 'Arquitectura Cloud'] },
        vision: {
            title: 'La Visión',
            p1: 'En ShepLabs, no solo escribimos código; arquitecturamos experiencias digitales que resuenan con los usuarios a nivel emocional. Nuestra misión es cerrar la brecha entre la tecnología de vanguardia y el diseño centrado en el ser humano.',
            p2: 'Fundada por ingenieros que creen que el software debe ser poderoso y hermoso, nos hemos dedicado a dominar el arte de la artesanía digital. Cada línea de código, cada píxel, cada interacción se considera cuidadosamente para crear productos que no solo funcionan, sino que inspiran.',
            stats: {
                projects: { val: 150, label: 'Proyectos Entregados' },
                lines: { val: 2500000, label: 'Líneas de Código' },
                coffee: { val: 8547, label: 'Cafés Consumidos' }
            },
            valuesTitle: 'Nuestros Valores Core',
            values: [
                { title: 'Precisión', desc: 'Cada detalle importa. Nos obsesionamos con la perfección.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>' },
                { title: 'Innovación', desc: 'Desafiamos los límites y las convenciones.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>' },
                { title: 'Excelencia', desc: 'La calidad no es una opción—es nuestro estándar.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.127l1.414-1.414a3.42 3.42 0 014.828 0l1.414 1.414a3.42 3.42 0 001.946 1.127 3.42 3.42 0 012.35 2.35 3.42 3.42 0 001.127 1.946l1.414 1.414a3.42 3.42 0 010 4.828l-1.414 1.414a3.42 3.42 0 00-1.127 1.946 3.42 3.42 0 01-2.35 2.35 3.42 3.42 0 00-1.127 1.946l-1.414 1.414a3.42 3.42 0 01-4.828 0l-1.414-1.414a3.42 3.42 0 00-1.946-1.127 3.42 3.42 0 01-2.35-2.35 3.42 3.42 0 00-1.127-1.946l-1.414-1.414a3.42 3.42 0 010-4.828l1.414-1.414a3.42 3.42 0 001.127-1.946 3.42 3.42 0 012.35-2.35z"></path></svg>' }
            ]
        },
        socialProof: {
            title: "Con la Confianza de Líderes de la Industria",
            subtitle: "Empresas que creen en nuestra visión",
            testimonials: [
                {
                    quote: "ShepLabs transformó nuestra visión en una realidad que superó nuestras expectativas. Su atención al detalle y experiencia técnica son inigualables.",
                    author: "Sarah Johnson",
                    role: "CEO, TechVision Inc.",
                    colorClass: "bg-blue-500"
                },
                {
                    quote: "Trabajar con ShepLabs fue un cambio de juego. Entregaron un producto que no solo funciona a la perfección, sino que se ve absolutamente impresionante.",
                    author: "Michael Chen",
                    role: "CTO, Innovation Labs",
                    colorClass: "bg-green-500"
                }
            ]
        },
        services: {
            title: 'Experiencia',
            lab: 'EL LABORATORIO',
            headline: 'No solo escribimos código; resolvemos problemas de negocio con precisión de ingeniería.',
            items: {
                frontend: { title: 'Desarrollo Frontend', desc: 'Ecosistemas Angular, React e Ionic creados con precisión y rendimiento en mente.' },
                mobile: { title: 'Aplicaciones Móviles', desc: 'Experiencias móviles nativas e híbridas que los usuarios aman y recuerdan.' },
                architecture: { title: 'Arquitectura de Sistemas', desc: 'Soluciones de backend escalables diseñadas para el crecimiento y la confiabilidad.' },
                design: { title: 'Diseño UX/UI', desc: 'Interfaces que combinan estética con experiencias de usuario intuitivas.' },
                cloud: { title: 'Infraestructura Cloud', desc: 'Soluciones en la nube modernas para despliegue y escalado fluidos.' },
                performance: { title: 'Optimización de Rendimiento', desc: 'Aplicaciones ultrarrápidas que ofrecen experiencias de usuario excepcionales.' }
            }
        },
        contact: {
            title: "Hablemos",
            subtitle: "¿Listo para construir algo extraordinario?",
            getInTouch: "Contacto",
            body: "¿Tienes un proyecto en mente? Nos encantaría saber de él. Hablemos sobre cómo podemos ayudarte a darle vida a tu visión.",
            submit: "Enviar Mensaje",
            labels: { name: "Tu Nombre", email: "Correo Electrónico", message: "Tu Mensaje" },
            info: {
                email: { label: "Correo", val: "hello@sheplabs.com" },
                phone: { label: "Teléfono", val: "+1 (234) 567-890" },
                location: { label: "Ubicación", val: "San Francisco, CA\nEstados Unidos" }
            },
            hours: {
                title: "Horario de Oficina",
                week: "Lunes - Viernes: 9:00 AM - 6:00 PM",
                weekend: "Fin de semana: Cerrado"
            }
        }
    }
};

export type Translation = typeof DICTIONARY['en'];

@Injectable({ providedIn: 'root' })
export class I18nService {
    readonly lang = signal<'en' | 'es'>('en');
    readonly t = computed(() => DICTIONARY[this.lang()]);

    toggle() {
        this.lang.update(l => l === 'en' ? 'es' : 'en');
    }
}
