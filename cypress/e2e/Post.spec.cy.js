describe('API', () => {
    it('POST', () => {
        cy.request({
            method: 'POST',
            url: "",
            body: {
                title: '',
                body: '',
                userID: ''
            }
        })
        .its('status')
        .should('equal', 200);
    })
})