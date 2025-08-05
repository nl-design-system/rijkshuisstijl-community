import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablerIconComponent } from 'angular-tabler-icons';
import { ButtonComponent } from '../../../../components-angular/src/button/button.component';
import { FormFieldTextInputComponent } from '../../../../components-angular/src/form-field-text-input/form-field-text-input.component';
import { HeadingComponent } from '../../../../components-angular/src/heading/heading.component';
import { IconComponent } from '../../../../components-angular/src/icon/icon.component';
import { ParagraphComponent } from '../../../../components-angular/src/paragraph/paragraph.component';
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
    TablerIconComponent,
  ],
  templateUrl: './boete-zoeken.component.html',
  styleUrl: './boete-zoeken.component.css',
})
export class BoeteZoekenTemplate {
  form = new FormGroup(
    {
      cjibNummer: new FormControl('', [Validators.required]),
      datum: new FormControl('', [Validators.required]),
      tijd: new FormControl('', [Validators.required]),
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
