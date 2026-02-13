import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SocialProofComponent } from './components/social-proof/social-proof.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { VisionComponent } from './components/vision/vision.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FadeInDirective } from './core/fade-in.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, HeroComponent, SocialProofComponent,
    PortfolioComponent, VisionComponent, ServicesComponent,
    ContactComponent, FooterComponent, FadeInDirective
  ],
  template: `
    <app-header />
    <main class="flex flex-col w-full relative z-10">
      <app-hero id="home" />
      <app-social-proof id="trust" appFadeIn />
      <app-services id="services" appFadeIn />
      <app-vision id="vision" appFadeIn />
      <app-portfolio id="work" appFadeIn />
      <app-contact id="contact" appFadeIn />
    </main>
    <app-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent { }
