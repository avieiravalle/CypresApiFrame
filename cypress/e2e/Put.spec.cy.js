describe('API', () => {
    it('PUT', () => {
        cy.request({
            method: 'PUT',
            url: '',
            body: {
                title: '',
                body: '',
                userid: '',
                id: ''
            }
        })
        .its('status')
        .should('equal', 200);
    });
})