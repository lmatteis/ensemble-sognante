'use strict';

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
        videos: document.querySelector('#videos').innerHTML,
        fotos: document.querySelector('#fotos').innerHTML,
        contact: document.querySelector('#contact').innerHTML,
    };
    var root = null;
    var useHash = true; // Defaults to: false

    var hash = '#!'; // Defaults to: '#'

    var router = new Navigo(root, useHash, hash);
    var converter = new showdown.Converter();
    var home = document.querySelector('#PAGES_CONTAINER');
    var main = document.querySelector('#main');
    console.log(home, main);

    router
        .on({
            biografie: function biografie() {
                setContent('biografie');
            },
            videos: function videos() {
                setContent('videos');
            },
            fotos: function fotos() {
                setContent('fotos');
            },
            agenda: function agenda() {
                setContent('agenda');
            },
            contact: function contact() {
                setContent('contact');
            },
            '*': function _() {
                alert('fuck what');
                home.style = 'display: block';
                main.style = 'display: none';
                alert('hsdfhsf');
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
    alert('1');
    navPs.forEach(function(el) {
        // remove selected
        el.className = ''; // find p with this page

        if (el.innerHTML.replace("'", '', 'g').match(new RegExp(page, 'ig'))) {
            el.className = 'selected';
        }
        alert('2', el.innerHTML);
    });
}
