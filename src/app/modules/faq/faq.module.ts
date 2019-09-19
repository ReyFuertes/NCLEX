import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { FaqContainerComponent } from './container/faq-container.component';
import { FaqService } from './services/faq.service';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { FaqItemComponent } from './components/faq-item/faq-item.component';

/**
 * Define your third party libs
 */
const materialModules = [];

const primeNgModules = [];

const routes: Routes = [
  {
    path: '',
    component: FaqContainerComponent,
  }
];

@NgModule({
  declarations: [
    FaqContainerComponent,
    FaqSectionComponent,
    FaqItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    ...materialModules,
    ...primeNgModules,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [ FaqService ]
})
export class FaqModule { }