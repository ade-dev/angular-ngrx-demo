import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryCurrenciesComponent } from './country-currencies.component';
import { ListCommasPipe } from '../pipes/list-commas.pipe';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CountryCurrenciesComponent', () => {
  let countryCurrenciesComponent: CountryCurrenciesComponent;
  let fixture: ComponentFixture<CountryCurrenciesComponent>;
  let currencyDe: DebugElement;
  let currencyEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryCurrenciesComponent, ListCommasPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCurrenciesComponent);
    countryCurrenciesComponent = fixture.componentInstance;
    fixture.detectChanges();
    currencyDe = fixture.debugElement.query(By.css('.currencies'));
    currencyEl = currencyDe.nativeElement;
  });

  it('Should be created', () => {
    expect(countryCurrenciesComponent).toBeTruthy();
  });

  it('Pipe should transform empty currency string', () => {
    fixture.detectChanges();
    expect(currencyEl.textContent).toBe('Currency unknown');
  });

  it('Pipe should transform list of two currencies', () => {
    fixture.componentInstance.countryCurrencies = ['Euro', 'Pound'];
    fixture.detectChanges();
    expect(currencyEl.textContent).toBe('Euro and Pound');
  });

  it('Pipe should transform list of three currencies', () => {
    fixture.componentInstance.countryCurrencies = ['Euro', 'Pound', 'Dollar'];
    fixture.detectChanges();
    expect(currencyEl.textContent).toBe('Euro, Pound and Dollar');
  });

  it('Pipe should transform list of four currencies', () => {
    fixture.componentInstance.countryCurrencies = ['Euro', 'Pound', 'Dollar', 'krona'];
    fixture.detectChanges();
    expect(currencyEl.textContent).toBe('Euro, Pound, Dollar and krona');
  });

});
