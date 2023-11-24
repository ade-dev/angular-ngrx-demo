import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailsComponent } from './country-details.component';

describe('CountryDetailsComponent', () => {
  let countryDetailsComponent: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    countryDetailsComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(countryDetailsComponent).toBeTruthy();
  });

  describe('toggleDetails method', () => {

    it("should return false OnInit, when the selectedOption property equals ''", () => {
      countryDetailsComponent.selectedOption = '';
      expect(countryDetailsComponent.toggleDetails()).toBe(false);
    });

    it("should return false if the selectedOption property equals 'Asia'", () => {
      countryDetailsComponent.selectedOption = 'Asia';
      expect(countryDetailsComponent.toggleDetails()).toBe(false);
    });

    it("should return false if the selectedOption property equals 'Europe'", () => {
      countryDetailsComponent.selectedOption = 'Europe';
      expect(countryDetailsComponent.toggleDetails()).toBe(false);
    });

    it("should return true if the selectedOption property is a country", () => {
      countryDetailsComponent.selectedOption = 'England';
      expect(countryDetailsComponent.toggleDetails()).toBe(true);
    });
  });
});
