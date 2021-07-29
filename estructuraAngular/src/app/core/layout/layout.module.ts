import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule],

  //tenemos que exportarlo para podert usarlo en otro componente
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
