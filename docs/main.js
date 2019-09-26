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

var pages = {};

function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(
        replacePattern1,
        '<a href="$1" target="_blank">$1</a>'
    );

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(
        replacePattern2,
        '$1<a href="http://$2" target="_blank">$2</a>'
    );

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(
        replacePattern3,
        '<a href="mailto:$1">$1</a>'
    );

    return replacedText;
}

window.onload = function() {
    var root = null;
    var useHash = true; // Defaults to: false

    var hash = '#!'; // Defaults to: '#'

    var router = new Navigo(root, useHash, hash);
    var converter = new showdown.Converter();
    var home = document.querySelector('#PAGES_CONTAINER');
    var main = document.querySelector('#main');

    router
        .on({
            biografie: function biografie() {
                setContent('biografie');
            },
            ["video's"]: function videos() {
                setContent("video's");
            },
            ["foto's"]: function fotos() {
                setContent("foto's");
            },
            agenda: function agenda() {
                setContent('agenda');
            },
            contact: function contact() {
                setContent('contact');
            },
            runa: function contact() {
                setContent('runa');
            },
            kalle: function contact() {
                setContent('kalle');
            },
            elisa: function contact() {
                setContent('elisa');
            },
            laurens: function contact() {
                setContent('laurens');
            },
            '*': function _() {
                document.querySelector('#home').style.display = 'block';
                document.querySelector('#page').style.display = 'none';
                navHighlight('HOME');
            },
        })
        .resolve();
};

function setContent(page) {
    var p = pages[page];
    var content = p.reduce(function(acc, curr) {
        return acc + curr;
    }, '');
    var home = document.querySelector('#home');
    var pageDiv = document.querySelector('#page');
    // main.className = page;
    var converter = new showdown.Converter({ simplifiedAutoLink: true });
    home.style.display = 'none';
    pageDiv.style.display = 'block';
    pageDiv.className = page;
    navHighlight(page);
    pageDiv.innerHTML = converter.makeHtml(content);
}

function navHighlight(page) {
    var navPs = document.querySelectorAll('#nav li a');
    for (var i = 0; i < navPs.length; i++) {
        var el = navPs[i];
        // remove selected
        el.className = ''; // find p with this page

        if (el.innerHTML.replace("'", '', 'g').match(new RegExp(page, 'ig'))) {
            el.className = 'selected';
        }
    }
}

function init(data) {
    var columns1 = data.feed.entry.filter(function(entry) {
        if (entry['gs$cell'].col == 1) {
            return true;
        }
    });

    columns1.forEach(function(columnEntry) {
        // get all entries at this row
        var row = columnEntry['gs$cell'].row;
        var atThisRow = data.feed.entry.filter(function(entry) {
            if (entry['gs$cell'].row == row && entry['gs$cell'].col != 1) {
                return true;
            }
        });
        pages[columnEntry.content.$t.toLowerCase()] = atThisRow.map(function(
            entry
        ) {
            return entry.content.$t;
        });
    });
}
