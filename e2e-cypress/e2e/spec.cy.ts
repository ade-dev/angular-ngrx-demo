describe('Home Page', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it("Should display correct heading 'Regions, countries...'", () => {
    cy.get('app-root .content h1').should('contain.text', 'Regions, countries and country details');
  });


  it('Should display dropdown for Asia and Europe', () => {
    cy.get('[data-cy="region"]').should('be.visible');
    cy.get('[data-cy="region"]').select('Europe').should('have.value', 'Europe');
    cy.get('[data-cy="region"]').select('Asia').should('have.value', 'Asia');
  });

  describe("Asian countries", () => {
    it("should display dropdown for Asian countries", () => {
      cy.get('[data-cy="region"]').select('Asia');
      cy.get('[data-cy="country"]').find('option')
        .should('be.visible')
        .and('have.length.to.be.greaterThan', 50);
      cy.get('[data-cy="country"]').select('Japan').should('have.value', 'Japan');
    });

    it("Is sould show details for 'India'", () => {
      cy.get('[data-cy="region"]').select('Asia');
      cy.get('[data-cy="country"]').select('India');
      cy.get('app-country-details').should('be.visible');
      cy.get('[data-cy="countryCapital"]').should('have.text', 'New Delhi');
    });

    it("Is should show details for 'Hong Kong'", () => {
      cy.get('[data-cy="region"]').select('Asia');
      cy.get('[data-cy="country"]').select('Hong Kong');
      cy.get('app-country-details').should('be.visible');
      cy.get('[data-cy="countryCapital"]').should('have.text', 'City of Victoria');
    });
  });

  describe("European countries", () => {
    it("should display dropdown for European countries", () => {
      cy.get('[data-cy="region"]').select('Europe');
      cy.get('[data-cy="country"]').find('option')
        .should('be.visible')
        .should('have.length.to.be.greaterThan', 50);
      cy.get('[data-cy="country"]').select('Croatia').should('have.value', 'Croatia');
    });

    it("should show details for 'Finland'", () => {
      cy.get('[data-cy="region"]').select('Europe');
      cy.get('[data-cy="country"]').select('Finland');
      cy.get('app-country-details').should('be.visible');
      cy.get('[data-cy="countryCapital"]').should('have.text', 'Helsinki');
    });

    it("should show details for 'Spain'", () => {
      cy.get('[data-cy="region"]').select('Europe');
      cy.get('[data-cy="country"]').select('Spain');
      cy.get('app-country-details').should('be.visible');
      cy.get('[data-cy="countryCapital"]').should('have.text', 'Madrid');
    });
  });
});
