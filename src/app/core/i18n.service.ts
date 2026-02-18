import { Injectable, signal, computed } from '@angular/core';

const DICTIONARY = {
    en: {
        nav: { home: 'Home', services: 'Services', vision: 'Vision', work: 'Work', trust: 'About', contact: "Let's Talk" },
        hero: { prefix: 'We build', suffix: 'digital products', focus: 'Experts in', typing: ['Angular Development', 'Workday Consulting', 'System Development', 'IT Consulting', 'Mobile Apps', 'Web Design', 'Landing Pages'] },
        vision: {
            title: 'The Vision',
            p1: 'At Shepsoft Labs, we don\'t just write code—we act as your dedicated technology partner. Our mission is to transform your ideas into polished digital products that resonate with your users.',
            p2: 'As a boutique consultancy, we focus on quality over quantity. Every project is handled with precision and a personal touch, ensuring that your vision is built on a solid, scalable foundation from day one.',
            stats: {
                projects: { val: 12, label: 'Products Launched' },
                lines: { val: 156000, label: 'Lines of Code' },
                coffee: { val: 1540, label: 'Coffees Consumed' }
            },
            valuesTitle: 'Our Approach',
            values: [
                { title: 'Personalized', desc: 'No cookie-cutter solutions. We build what you actually need.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>' },
                { title: 'Agile', desc: 'Move fast without breaking things. We iterate based on real feedback.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>' },
                { title: 'Reliable', desc: 'We are in this with you. Your success is our reputation.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.127l1.414-1.414a3.42 3.42 0 014.828 0l1.414 1.414a3.42 3.42 0 001.946 1.127 3.42 3.42 0 012.35 2.35 3.42 3.42 0 001.127 1.946l1.414 1.414a3.42 3.42 0 010 4.828l-1.414 1.414a3.42 3.42 0 00-1.127 1.946 3.42 3.42 0 01-2.35 2.35 3.42 3.42 0 00-1.127 1.946l-1.414 1.414a3.42 3.42 0 01-4.828 0l-1.414-1.414a3.42 3.42 0 00-1.946-1.127 3.42 3.42 0 01-2.35-2.35 3.42 3.42 0 00-1.127-1.946l-1.414-1.414a3.42 3.42 0 010-4.828l1.414-1.414a3.42 3.42 0 001.127-1.946 3.42 3.42 0 012.35-2.35z"></path></svg>' }
            ]
        },
        about: {
            title: "Boutique Engineering",
            subtitle: "Northern roots, national impact",
            content: "Based in Chihuahua and Monterrey, Shepsoft Labs operates as a high-performance engineering unit for clients across Mexico. We are a boutique consultancy focused on building robust digital foundations without the corporate overhead.",
            locations: [
                { city: "Chihuahua", state: "CUU" },
                { city: "Monterrey", state: "MTY" },
                { city: "Mexico", state: "Nationwide" }
            ]
        },
        services: {
            title: 'Our Craft',
            lab: 'THE STUDIO',
            headline: 'Specialized solutions for modern businesses.',
            items: {
                frontend: { title: 'Modern Web Apps', desc: 'Crafting responsive and interactive interfaces with Angular and React.' },
                mobile: { title: 'Mobile Solutions', desc: 'Native-feel hybrid apps that provide a seamless user experience.' },
                architecture: { title: 'System Design', desc: 'Building the backbone of your product with scalable and secure code.' },
                design: { title: 'Visual Strategy', desc: 'Designing brand-aligned interfaces that users actually enjoy using.' },
                cloud: { title: 'Workday Solutions', desc: 'Expert consulting and optimization for Workday ecosystems.' },
                performance: { title: 'Speed & Scale', desc: 'Optimizing every millisecond to ensure your users stay happy.' }
            }
        },
        contact: {
            title: "Let's Build Together",
            subtitle: "Ready to start your next project?",
            getInTouch: "Contact Us",
            body: "Have an idea or a project in mind? We'd love to hear about it. Let's discuss how we can help you grow.",
            submit: "Start Conversation",
            labels: { name: "Your Name", email: "Email Address", message: "Tell us about your project" },
            info: {
                email: { label: "Email", val: "contacto@shepsoftlabs.com" },
                phone: { label: "Phone", val: "+52 1 81 1798 3479" },
                whatsapp: "Chat with us",
                location: { label: "Location", val: "Available for worldwide projects" }
            },
            hours: {
                title: "Availability",
                week: "Monday - Friday: 9:00 AM - 6:00 PM",
                weekend: "Weekend: On demand"
            },
            alerts: {
                sending: "Sending message...",
                success: "Message sent! We'll get back to you soon.",
                error: "Something went wrong. Please try again."
            }
        },
        projects: {
            title: 'Selected Works',
            subtitle: 'A showcase of our most challenging and rewarding engineering projects.',
            sonicsafe: {
                category: 'Audio Therapeutics',
                title: 'SonicSafe',
                desc: 'A high-fidelity application designed for tinnitus relief, deep concentration (ADHD), and sleep improvement, using real-time generative audio processing and a professional-grade minimalist user interface.'
            },
            elise: {
                category: 'Industrial Engineering',
                title: 'Elise',
                desc: 'Professional landing page for industrial engineering company with minimalist design, advanced SEO (100/100 Lighthouse), bilingual i18n (ES/EN), and Vercel optimization. Stack: Angular 19, Tailwind CSS v4, TypeScript.'
            },
            valora: {
                category: 'Business Operations',
                title: 'Valora Control Maestro',
                desc: 'The ultimate SaaS for craft professionals. Centralized management for projects, quotes, and client tracking. Specifically tailored for carpenters, architects, and industrial designers looking to scale their operations with precision.'
            }
        }
    },
    es: {
        nav: { home: 'Inicio', services: 'Servicios', vision: 'Visión', work: 'Modelos', trust: 'Nosotros', contact: 'Hablemos' },
        hero: { prefix: 'Creamos', suffix: 'productos digitales', focus: 'Expertos en', typing: ['Desarrollo Angular', 'Consultoría Workday', 'Desarrollo de Sistemas', 'Consultoría TI', 'Apps Móviles', 'Diseño Web', 'Landing Pages'] },
        heroButtons: { contact: 'Hablemos', work: 'Nuestros Proyectos' },
        vision: {
            title: 'La Visión',
            p1: 'En Shepsoft Labs, no somos solo programadores; somos tu brazo tecnológico de confianza. Nuestra misión es transformar tus ideas en productos digitales pulidos que conecten con tus usuarios.',
            p2: 'Como consultoría boutique, priorizamos la calidad sobre la cantidad. Cada proyecto se maneja con precisión y un trato personalizado, asegurando que tu visión se construya sobre una base sólida y escalable desde el primer día.',
            stats: {
                projects: { val: 12, label: 'Productos Lanzados' },
                lines: { val: 156000, label: 'Líneas de Código' },
                coffee: { val: 1540, label: 'Cafés Consumidos' }
            },
            valuesTitle: 'Nuestro Enfoque',
            values: [
                { title: 'Personalizado', desc: 'Sin soluciones genéricas. Construimos lo que realmente necesitas.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>' },
                { title: 'Ágil', desc: 'Avanzamos rápido pero con paso firme, iterando según feedback real.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>' },
                { title: 'Confiable', desc: 'Estamos en esto contigo. Tu éxito es nuestra carta de presentación.', icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.127l1.414-1.414a3.42 3.42 0 014.828 0l1.414 1.414a3.42 3.42 0 001.946 1.127 3.42 3.42 0 012.35 2.35 3.42 3.42 0 001.127 1.946l1.414 1.414a3.42 3.42 0 010 4.828l-1.414 1.414a3.42 3.42 0 00-1.127 1.946 3.42 3.42 0 01-2.35 2.35 3.42 3.42 0 00-1.127 1.946l-1.414 1.414a3.42 3.42 0 01-4.828 0l-1.414-1.414a3.42 3.42 0 00-1.946-1.127 3.42 3.42 0 01-2.35-2.35 3.42 3.42 0 00-1.127-1.946l-1.414-1.414a3.42 3.42 0 010-4.828l1.414-1.414a3.42 3.42 0 001.127-1.946 3.42 3.42 0 012.35-2.35z"></path></svg>' }
            ]
        },
        about: {
            title: "Ingeniería Boutique",
            subtitle: "Raíces en el norte, impacto nacional",
            content: "Con sede en Chihuahua y Monterrey, Shepsoft Labs opera como una unidad de ingeniería de alto rendimiento para clientes en todo México. Somos una consultoría boutique enfocada en construir bases digitales robustas sin la burocracia corporativa.",
            locations: [
                { city: "Chihuahua", state: "CUU" },
                { city: "Monterrey", state: "MTY" },
                { city: "México", state: "Nacional" }
            ]
        },
        services: {
            title: 'Nuestro Oficio',
            lab: 'EL ESTUDIO',
            headline: 'Soluciones especializadas para negocios modernos.',
            items: {
                frontend: { title: 'Web Apps Modernas', desc: 'Creamos interfaces responsivas e interactivas con Angular y React.' },
                mobile: { title: 'Soluciones Móviles', desc: 'Apps híbridas con sensación nativa para una experiencia fluida.' },
                architecture: { title: 'Diseño de Sistemas', desc: 'Construimos el núcleo de tu producto con código escalable y seguro.' },
                design: { title: 'Estrategia Visual', desc: 'Diseñamos interfaces alineadas a tu marca que los usuarios disfrutan usar.' },
                cloud: { title: 'Consultoría Workday', desc: 'Servicio experto en optimización y despliegue de soluciones Workday.' },
                performance: { title: 'Velocidad y Escala', desc: 'Optimización de cada milisegundo para mantener a tus usuarios felices.' }
            }
        },
        contact: {
            title: "Construyamos Juntos",
            subtitle: "¿Listo para iniciar tu próximo proyecto?",
            getInTouch: "Contáctanos",
            body: "¿Tienes una idea o un proyecto en mente? Nos encantaría saber de él. Hablemos sobre cómo podemos ayudarte a crecer.",
            submit: "Iniciar Conversación",
            labels: { name: "Tu Nombre", email: "Correo Electrónico", message: "Cuéntanos sobre tu proyecto" },
            info: {
                email: { label: "Correo", val: "contacto@shepsoftlabs.com" },
                phone: { label: "Teléfono", val: "+52 1 81 1798 3479" },
                whatsapp: "Escríbenos por WhatsApp",
                location: { label: "Ubicación", val: "Disponibles para proyectos en todo el mundo" }
            },
            hours: {
                title: "Disponibilidad",
                week: "Lunes - Viernes: 9:00 AM - 6:00 PM",
                weekend: "Fines de semana: Bajo demanda"
            },
            alerts: {
                sending: "Enviando mensaje...",
                success: "¡Mensaje enviado! Te contactaremos pronto.",
                error: "Algo salió mal. Por favor intenta de nuevo."
            }
        },
        projects: {
            title: 'Proyectos Seleccionados',
            subtitle: 'Una muestra de nuestros desafíos de ingeniería más gratificantes.',
            sonicsafe: {
                category: 'Terapéutica de Audio',
                title: 'SonicSafe',
                desc: 'Una aplicación de alta fidelidad diseñada para el alivio del tinnitus, la concentración profunda (ADHD) y la mejora del sueño, utilizando procesamiento de audio generativo en tiempo real y una interfaz de usuario minimalista de grado profesional.'
            },
            elise: {
                category: 'Ingeniería Industrial',
                title: 'Elise',
                desc: 'Landing page profesional para empresa de ingeniería industrial con diseño minimalista, SEO avanzado (100/100 Lighthouse), i18n bilingüe (ES/EN), y optimización para Vercel. Stack: Angular 19, Tailwind CSS v4, TypeScript.'
            },
            valora: {
                category: 'Gestión de Operaciones',
                title: 'Valora Control Maestro',
                desc: 'El SaaS definitivo para profesionales de la construcción y diseño. Gestión centralizada de proyectos, cotizaciones y seguimiento de clientes. Diseñado específicamente para carpinteros, arquitectos y herreros que buscan escalar su negocio con precisión técnica.'
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
