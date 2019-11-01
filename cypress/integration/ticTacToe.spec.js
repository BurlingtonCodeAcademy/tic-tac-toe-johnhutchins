describe("Tic Tac Toe", () => {
  beforeEach(() => {
    cy.visit("/ticTac.html");
  })

  describe("Smoke Test", () => {
    it("successfully visits the homepage", () => {
    });

/*     it("contains a title header", () => {
      cy.contains("h2", "Tic Tac Toe")
    }) */
  });

  describe("At first", () => {
    it('the game board is empty', () => {
      cy.get(".board").should(($el) => {
        const text = $el.text();
        expect(text.trim()).to.be.empty
      });
    });

/*     it('the Start button is clickable', ()=>{
      cy.get('button#start').click()
    }) */
  });

  describe("After starting a game", ()=>{
    beforeEach(()=>{
      cy.get('button#start').click()
    })

/*     it('the Start button is disabled', ()=>{
      cy.get('button#start').should('be.disabled');
    })

    it('the status area should say whose turn it is', ()=>{
      cy.get('.status').contains("Player X's turn")
    }) */
  })

  describe('X selects a cell',()=>{
    it("is clickable",()=>{
      cy.get('#1').click()
    })
  })

  //why does this overwrite the above? I want this to show O, not X!
/*   describe('O selects a cell',()=>{
    it("is clickable",()=>{
      cy.get("#2").click()
    })
  }) */

})
