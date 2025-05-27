import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@rijkshuisstijl-community/components-angular/src/button/button.component';
import { FormFieldTextInputComponent } from '@rijkshuisstijl-community/components-angular/src/form-field-text-input/form-field-text-input.component';
import { HeadingComponent } from '@rijkshuisstijl-community/components-angular/src/heading/heading.component';
import { IconComponent } from '@rijkshuisstijl-community/components-angular/src/icon/icon.component';
import { ParagraphComponent } from '@rijkshuisstijl-community/components-angular/src/paragraph/paragraph.component';
import { PageLayoutComponent } from '../shared/page-layout/page-layout.component';

@Component({
  selector: 'boete-zoeken-template',
  imports: [
    PageLayoutComponent,
    HeadingComponent,
    ParagraphComponent,
    ReactiveFormsModule,
    FormFieldTextInputComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './boete-zoeken.component.html',
  styleUrl: './boete-zoeken.component.css',
})
export class BoeteZoekenTemplate {
  form = new FormGroup({
    cjibNummer: new FormControl(''),
    datum: new FormControl(''),
    tijd: new FormControl(''),
  });
}
