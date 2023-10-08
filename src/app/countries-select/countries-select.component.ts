import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Region } from '../models/region';
import { Country } from '../models/country';

@Component({
  selector: 'app-countries-select',
  templateUrl: './countries-select.component.html',
  styleUrls: ['./countries-select.component.css']
})
export class CountriesSelectComponent {

  @Input() dropDownData!: Region[] | Country[] | null;
  @Input() actionType!: string;
  @Output() selectedItemEvent = new EventEmitter<string>();

  regionsForm = new FormGroup({
    area: new FormControl<string>('')
  });

  getSelectedOption() {
    this.selectedItemEvent.emit(this.regionsForm.controls.area.value as string);
  }

}
