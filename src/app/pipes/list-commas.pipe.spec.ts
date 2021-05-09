import { ListCommasPipe } from './list-commas.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ListCommasPipe', () => {

  let listCommasPipe: ListCommasPipe;
  let fixture: ComponentFixture<ListCommasPipe>;

  beforeEach(() => {
    listCommasPipe = new ListCommasPipe();
  });

  describe('Instance', () => {
    it('Should create an instance', () => {
      const pipe = new ListCommasPipe();
      expect(pipe).toBeTruthy();
    });
  });

  describe('Transform list of 1 currency', () => {
    it("Should transform ['Euro'] to 'Euro'", () => {
      expect(listCommasPipe.transform(['Euro'])).toEqual('Euro');
    });
  });

  describe('Transform list of 2 currencies', () => {
    it("Should transform ['Euro','Pound'] to 'Euro and Pound'", () => {
      expect(listCommasPipe.transform(['Euro', 'Pound'])).toEqual('Euro and Pound');
    });
  });

  describe('Transform list of 3 currencies', () => {
    it("Should transform ['Euro', 'Pound', 'Dollar'] to 'Euro, Pound and Dollar'", () => {
      expect(listCommasPipe.transform(['Euro', 'Pound', 'Dollar'])).toBe(
        'Euro, Pound and Dollar'
      );
    });
  });

  describe('Transform empty currency list', () => {
    it("Should transform [] to 'Currency Unknown'", () => {
      expect(listCommasPipe.transform([], 'Currency', 'unknown')).toEqual('Currency unknown');
    });
  });

});
