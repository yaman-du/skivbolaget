context("Admin page", () => {

    beforeEach(() => {
        cy.visit("http://localhost:4000/login");
        cy.clearCookies();
        cy.get("#username").type("balthazar");
        cy.get("#password").type("1234");
        cy.get("#post-login-form").submit();
        cy.url().should('eq', 'http://localhost:4000/admin');
    })

    it("Add 30 albums and go to root location", () => {
        
        cy.get('#urlLastFm').type('https://www.last.fm/music/Madonna/The+Immaculate+Collection').should('have.value', 'https://www.last.fm/music/Madonna/The+Immaculate+Collection');
        cy.get('#post-album-form').submit();
        
        cy.get('#urlLastFm').type('https://www.last.fm/music/The+Beatles/Abbey+Road').should('have.value', 'https://www.last.fm/music/The+Beatles/Abbey+Road');
        cy.get('#post-album-form').submit();
        
        cy.get('#urlLastFm').type('https://www.last.fm/music/Madonna/Celebration').should('have.value', 'https://www.last.fm/music/Madonna/Celebration');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Nas/Illmatic').should('have.value', 'https://www.last.fm/music/Nas/Illmatic');
        cy.get('#post-album-form').submit();
        
        cy.get('#urlLastFm').type('https://www.last.fm/music/The+xx/I+See+You').should('have.value', 'https://www.last.fm/music/The+xx/I+See+You');
        cy.get('#post-album-form').submit();
        
        cy.get('#urlLastFm').type('https://www.last.fm/music/2Pac/Me+Against+the+World').should('have.value', 'https://www.last.fm/music/2Pac/Me+Against+the+World');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Nirvana/Nevermind').should('have.value', 'https://www.last.fm/music/Nirvana/Nevermind');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Nirvana/Nirvana').should('have.value', 'https://www.last.fm/music/Nirvana/Nirvana');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Radiohead/In+Rainbows').should('have.value', 'https://www.last.fm/music/Radiohead/In+Rainbows');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/R.E.M./Automatic+for+the+People').should('have.value', 'https://www.last.fm/music/R.E.M./Automatic+for+the+People');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Pixies/Surfer+Rosa').should('have.value', 'https://www.last.fm/music/Pixies/Surfer+Rosa');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/The+Dandy+Warhols/...The+Dandy+Warhols+Come+Down').should('have.value', 'https://www.last.fm/music/The+Dandy+Warhols/...The+Dandy+Warhols+Come+Down');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Daft+Punk/Discovery').should('have.value', 'https://www.last.fm/music/Daft+Punk/Discovery');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Daft+Punk/Homework').should('have.value', 'https://www.last.fm/music/Daft+Punk/Homework');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Daft+Punk/Random+Access+Memories').should('have.value', 'https://www.last.fm/music/Daft+Punk/Random+Access+Memories');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Daft+Punk/Human+After+All').should('have.value', 'https://www.last.fm/music/Daft+Punk/Human+After+All');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Nas/It+Was+Written').should('have.value', 'https://www.last.fm/music/Nas/It+Was+Written');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Bryson+Tiller/T+R+A+P+S+O+U+L').should('have.value', 'https://www.last.fm/music/Bryson+Tiller/T+R+A+P+S+O+U+L');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Bryson+Tiller/True+to+Self').should('have.value', 'https://www.last.fm/music/Bryson+Tiller/True+to+Self');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Trey+Songz/Ready').should('have.value', 'https://www.last.fm/music/Trey+Songz/Ready');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Sam+Cooke/The+Man+and+His+Music').should('have.value', 'https://www.last.fm/music/Sam+Cooke/The+Man+and+His+Music');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Drake/Views').should('have.value', 'https://www.last.fm/music/Drake/Views');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Drake/Take+Care').should('have.value', 'https://www.last.fm/music/Drake/Take+Care');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Drake/Thank+Me+Later').should('have.value', 'https://www.last.fm/music/Drake/Thank+Me+Later');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Drake/So+Far+Gone').should('have.value', 'https://www.last.fm/music/Drake/So+Far+Gone');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Foo+Fighters/The+Colour+and+the+Shape').should('have.value', 'https://www.last.fm/music/Foo+Fighters/The+Colour+and+the+Shape');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Foo+Fighters/Echoes,+Silence,+Patience+&+Grace').should('have.value', 'https://www.last.fm/music/Foo+Fighters/Echoes,+Silence,+Patience+&+Grace');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Foo+Fighters/There+Is+Nothing+Left+to+Lose').should('have.value', 'https://www.last.fm/music/Foo+Fighters/There+Is+Nothing+Left+to+Lose');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Foo+Fighters/One+by+One').should('have.value', 'https://www.last.fm/music/Foo+Fighters/One+by+One');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Lady+Gaga/The+Fame').should('have.value', 'https://www.last.fm/music/Lady+Gaga/The+Fame');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Lady+Gaga/Born+This+Way').should('have.value', 'https://www.last.fm/music/Lady+Gaga/Born+This+Way');
        cy.get('#post-album-form').submit();

    });

    afterEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:4000/');
    });

});