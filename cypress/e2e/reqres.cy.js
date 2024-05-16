describe('API Request', () => {
    it('Get List Users', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })
    it('Create User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "elva",
                "job": "QA"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
        })
    })
})