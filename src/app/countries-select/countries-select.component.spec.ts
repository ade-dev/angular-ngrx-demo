import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesSelectComponent } from './countries-select.component';

describe('CountriesSelectComponent', () => {
  let countriesSelectComponent: CountriesSelectComponent;
  let fixture: ComponentFixture<CountriesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesSelectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesSelectComponent);
    countriesSelectComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(countriesSelectComponent).toBeTruthy();
  });

  it('Should emit an event when an option is selected', () => {
    const selected = 'Europe';
    countriesSelectComponent.regionsForm.controls.area.setValue(selected);
    spyOn(countriesSelectComponent.selectedItemEvent, 'emit');
    countriesSelectComponent.getSelectedOption();
    expect(countriesSelectComponent.selectedItemEvent.emit).toHaveBeenCalledWith(selected);
  });
});
