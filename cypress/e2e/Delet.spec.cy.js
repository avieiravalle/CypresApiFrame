
describe('API', () => {
    it('Delete', () => {
        cy.request({
            method: "DELETE",
            url: ""

        })
            .its('status')
            .should('equal', 200)
    });
})