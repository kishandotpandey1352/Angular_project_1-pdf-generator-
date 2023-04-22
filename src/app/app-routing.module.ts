import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfCreatorComponent } from './features/pdf-creator/pdf-creator.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {  path: '',component:HomeComponent,pathMatch:'full'},
  {  path: 'pdfGenerator',component:PdfCreatorComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
