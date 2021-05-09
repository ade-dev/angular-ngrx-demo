import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-countries-select',
  templateUrl: './countries-select.component.html',
  styleUrls: ['./countries-select.component.css']
})
export class CountriesSelectComponent implements OnInit {

  constructor() { }

  @Input() dropDownData!: any;
  @Input() actionType!: string;
  @Output() selectedItemEvent = new EventEmitter<any>();

  regionsForm = new FormGroup({
    area: new FormControl('')
  });

  getSelectedOption() {
    this.selectedItemEvent.emit(this.regionsForm.controls.area.value);
  };

  ngOnInit(): void {

  }

}
