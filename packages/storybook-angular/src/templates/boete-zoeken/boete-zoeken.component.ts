import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  form = new FormGroup(
    {
      cjibNummer: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      datum: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      tijd: new FormControl('', [Validators.required, Validators.pattern('^([01]\\d|2[0-3]):[0-5]\\d$')]),
    },
    { updateOn: 'blur' },
  );

  get cjibNummer() {
    return this.form.controls.cjibNummer;
  }

  get datum() {
    return this.form.controls.datum;
  }

  get tijd() {
    return this.form.controls.tijd;
  }
}
