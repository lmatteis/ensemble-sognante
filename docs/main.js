if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, scope) {
        for (var i = 0, len = this.length; i < len; ++i) {
            fn.call(scope, this[i], i, this);
        }
    };
}

var pages;

window.onload = function() {
    pages = {
        biografie: document.querySelector('#biografie').innerHTML,
        ["video's"]: document.querySelector('#videos').innerHTML,
        ["foto's"]: document.querySelector('#fotos').innerHTML,
        contact: document.querySelector('#contact').innerHTML,
    };

    var root = null;
    var useHash = true; // Defaults to: false
    var hash = '#!'; // Defaults to: '#'
    var router = new Navigo(root, useHash, hash);

    var converter = new showdown.Converter();

    var home = document.querySelector('#PAGES_CONTAINER');
    var main = document.querySelector('#main');
    router
        .on({
            biografie: function() {
                setContent('biografie');
            },
            videos: function() {
                setContent("video's");
            },
            fotos: function() {
                setContent("foto's");
            },
            agenda: function() {
                setContent('agenda');
            },
            contact: function() {
                setContent('contact');
            },
            '*': function() {
                home.style = 'display: block';
                main.style = 'display: none';
                navHighlight('HOME');
            },
        })
        .resolve();
};

function setContent(page) {
    var home = document.querySelector('#PAGES_CONTAINER');
    var main = document.querySelector('#main');
    main.className = page;
    var converter = new showdown.Converter();
    home.style = 'display: none';
    main.style = 'display: block';
    navHighlight(page);
    main.innerHTML = converter.makeHtml(pages[page]);
}

function navHighlight(page) {
    var navPs = document.querySelectorAll('nav a p');
    navPs.forEach(function(el) {
        // remove selected
        el.className = '';
        // find p with this page
        if (el.innerHTML.match(new RegExp(page, 'ig'))) {
            el.className = 'selected';
        }
    });
}
