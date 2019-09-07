'use strict';

if (!document.querySelectorAll) {
    document.querySelectorAll = function(selectors) {
        var style = document.createElement('style'),
            elements = [],
            element;
        document.documentElement.firstChild.appendChild(style);
        document._qsa = [];

        style.styleSheet.cssText =
            selectors +
            '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
        window.scrollBy(0, 0);
        style.parentNode.removeChild(style);

        while (document._qsa.length) {
            element = document._qsa.shift();
            element.style.removeAttribute('x-qsa');
            elements.push(element);
        }
        document._qsa = null;
        return elements;
    };
}

if (!document.querySelector) {
    document.querySelector = function(selectors) {
        var elements = document.querySelectorAll(selectors);
        return elements.length ? elements[0] : null;
    };
}

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
    alert(home);

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
    });
}
