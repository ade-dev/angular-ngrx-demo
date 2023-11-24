import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-countries-select',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgFor],
  templateUrl: './countries-select.component.html',
  styleUrls: ['./countries-select.component.css']
})
export class CountriesSelectComponent {

  @Input() dropDownData!: string[] | null;
  @Input() actionType!: string;
  @Output() selectedItemEvent = new EventEmitter<string>();

  regionsForm = new FormGroup({
    area: new FormControl<string>('')
  });

  getSelectedOption() {
    this.selectedItemEvent.emit(this.regionsForm.controls.area.value as string);
  }

}
