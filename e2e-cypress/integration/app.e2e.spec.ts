context('End to end', () => {

    describe('Home Page', () => {
        before(() => {
            cy.visit('/');
        });

        it("Should display correct heading 'Regions, countries...'", () => {
            cy.get('app-root .content h1').should('contain.text', 'Regions, countries and country details');
        });

        it('Should display regions dropdown', () => {
            // cy.get('select#region').should('be.visible');
            cy.get('[data-cy=region]').should('be.visible');
            cy.findByRole('option', { name: 'Europe' }).should('be.visible');
            cy.findByRole('option', { name: 'Asia' }).should('be.visible');
        });

        describe("European countries", () => {
            it("Is possible to show details for 'Finland'", () => {
                cy.get('[data-cy=region]').select('Europe');
                cy.get('[data-cy=country]').find('option')
                    .should('be.visible')
                    .should('have.length.to.be.greaterThan', 50);
                cy.get('[data-cy=country]').select('Finland');
                cy.get('app-country-details').should('be.visible');
                cy.get('[data-cy=countryCapital]').should('have.text', 'Helsinki');
            });

            it("Is possible to show details for 'Spain'", () => {
                cy.get('[data-cy=country]').select('Spain');
                cy.get('app-country-details').should('be.visible');
                cy.get('[data-cy=countryCapital]').should('have.text', 'Madrid');
            });
        });

        describe("Asian countries", () => {
            it("Is possible to show details for 'India'", () => {
                cy.get('[data-cy=region]').select('Asia');
                cy.get('[data-cy=country]').find('option')
                    .should('be.visible')
                    .should('have.length.to.be.greaterThan', 50);
                cy.get('[data-cy=country]').select('India');
                cy.get('app-country-details').should('be.visible');
                cy.get('[data-cy=countryCapital]').should('have.text', 'New Delhi');
            });

            it("Is possible to show details for 'Hong Kong'", () => {
                cy.get('[data-cy=country]').select('Hong Kong');
                cy.get('app-country-details').should('be.visible');
                cy.get('[data-cy=countryCapital]').should('have.text', 'City of Victoria');
            });
        });
    });
});