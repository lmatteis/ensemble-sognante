window.onload = function() {
    var root = null
    var useHash = true // Defaults to: false
    var hash = '#!' // Defaults to: '#'
    var router = new Navigo(root, useHash, hash)

    var converter = new showdown.Converter()

    var home = document.querySelector('#PAGES_CONTAINER')
    var main = document.querySelector('#main')
    router
        .on({
            biografie: function() {
                setContent('biografie')
            },
            videos: function() {
                setContent("video's")
            },
            fotos: function() {
                setContent("foto's")
            },
            agenda: function() {
                setContent('agenda')
            },
            contact: function() {
                setContent('contact')
            },
            '*': function() {
                home.style = 'display: block'
                main.style = 'display: none'
                navHighlight('HOME')
            },
        })
        .resolve()
}

function setContent(page) {
    var home = document.querySelector('#PAGES_CONTAINER')
    var main = document.querySelector('#main')
    main.className = page
    var converter = new showdown.Converter()
    home.style = 'display: none'
    main.style = 'display: block'
    navHighlight(page)
    main.innerHTML = converter.makeHtml(pages[page])
}

function navHighlight(page) {
    var navPs = document.querySelectorAll('nav a p')
    navPs.forEach(el => {
        // remove selected
        el.className = ''
        // find p with this page
        if (el.innerHTML.match(new RegExp(page, 'ig'))) {
            el.className = 'selected'
        }
    })
}

var pages = {
    biografie: `
# Biografie 
Het Ensemble Sognante is een nieuw initiatief van vier jonge en bevlogen musici. Met een basisbezetting van viool, altviool, cello en piano creëren Ruña ‘t Hart, Elisa Karen Tavenier, Kalle de Bie en Laurens de Man eindeloze mogelijkheden voor boeiende programma’s, waarin bekende meesterwerken en onbekendere stukken in flexibele bezetting worden gepresenteerd.
De drie strijkers leerden elkaar kennen in het strijkersensemble “The Fancy Fiddlers”, geleid door de bekende vioolpedagoge Coosje Wijzenbeek. Tijdens hun studie aan de conservatoria van Amsterdam en Den Haag verdiepte zij hun passie voor kamermuziek. In regelmatige optredens in verschillende ensembles, vaak met pianist Laurens de Man, ontstond het idee voor een samenwerking als Ensemble Sognante.

De veelzijdige violiste Ruña ‘t Hart (1992) maakt indruk door haar kwaliteiten als soliste en als warm pleitbezorgster van de kamermuziek. Haar muzikale interesse beslaat een breed gebied, uiteenlopend van barok tot hedendaagse muziek.
In december 2016 ontving zij in het Concertgebouw de prestigieuze vioolbeurs van het Kersjes Fonds, een belangrijke prijs die ieder jaar wordt uitgereikt aan een jong viooltalent in Nederland. Het Kersjes Fonds roemt in het juryrapport “het gloedvolle, intense spel met een persoonlijk verhaal” van Ruña en noemt haar “een (groei)diamantje dat van binnenuit straalt en muzikaal oplicht.”
Ruña begon op tweejarige leeftijd met vioolspelen. Vanaf haar tiende studeerde ze bij de bekende viooldocente Coosje Wijzenbeek en een jaar later werd ze toegelaten tot de School voor Jong Talent van het Koninklijk Conservatorium in Den Haag. In 2011 begon Ruña haar studie aan het Conservatorium van Amsterdam bij Vera Beths. Ze behaalde haar masterdiploma in september 2018 cum laude. Tijdens haar studie volgde zij tevens lessen van Shunske Sato, zowel op moderne als op barokviool. 
Ruña speelt op een viool van de achttiende-eeuwse Italiaanse bouwer Landolfi, met een negentiende-eeuwse strijkstok van de Franse bouwer Bazin. Deze viool en stok heeft zij kunnen aanschaffen met steun van de Stichting Eigen Muziekinstrument, het Dorrie Stoopfonds en het Prins Bernhard Cultuurfonds. www.runathart.com

Elisa Karen Tavenier (1996) begon op driejarige leeftijd met vioolspelen. Op haar zesde werd ze toegelaten tot de School voor Jong Talent van het Koninklijk Conservatorium in Den Haag, waar ze les kreeg van Coosje Wijzenbeek. Vanaf 2013 besloot ze haar studie voort te zetten op de altviool bij Marjolein Dispa aan het Conservatorium van Amsterdam. Vervolgens studeerde ze bij Mikhail Zemtsov aan het Koninklijk Conservatorium Den Haag, waar ze in 2018 cum laude haar masterdiploma behaalde.
Naast haar solistische capaciteiten heeft Elisa Karen vanaf zeer jonge leeftijd het samenspel in de kamermuziek ontwikkeld. 
Elisa Karen maakte deel uit van de academie van het Koninklijk Concertgebouworkest in het seizoen 2017-2018. In 2014 won ze een eerste prijs op het Prinses Christina Concours West 1 in Rotterdam en ontving een eervolle vermelding op de Dag van de Genomineerden. In 2017 was ze Laureaat bij Classic Young Masters. 
Sinds 2013 speelt ze in het Animato kwartet, waarmee ze veelvuldig optrad en in 2017 het kwartetstipendium van het prestigieuze Anton Kerjes Fonds won.
Elisa Karen speelt met een prachtige stok die ze heeft aan kunnen schaffen met behulp van de Stichting Eigen Muziekinstrumentfonds en het Prinses Christina Concours. Ook heeft ze een altviool in bruikleen van het Nationaal Muziekinstrumentenfonds. www.ektavenier.com

Kalle de Bie (1994) begon op zesjarige leeftijd met cellospelen. Vanaf 2008 studeerde Kalle aan de Sweelinck Academie voor Jong Talent bij Jeroen den Herder. Sinds 2012 vervolgde hij zijn studie bij Den Herder en Jelena Očić aan het Conservatorium van Amsterdam. In 2018 rondde hij aan hetzelfde instituut zijn masterstudie af bij Dmitri Ferschtman.
Kalle is laureaat van meerdere nationale en internationale concoursen, waaronder het Prinses Christina Concours (2013), de III Elsky Competition te Minsk (2014) en de 12th International Competition for Young Musicians ‘Ferdo Livadic’ te Samobor (Kr.) (2015). In 2016 won Kalle de aanmoedigingsprijs en de Start in Splendorprijs bij het Nationaal Cello Concours te Amsterdam. Daarnaast volgde hij masterclasses bij o.a. Anne Bijlsma, Uzi Wiesel, Itamar Golan, Leonid Gorokhov, Valter Dešpalj en Reinhard Latzko.
Kalle speelde in meerdere vaste bezettingen. Momenteel is hij cellist in het Brackman Trio en het Arkovsky Sextet. Hij kreeg hiermee uitgebreide coaching van onder meer verschillende leden van het Jeruzalem Kwartet, het Borodin Kwartet en het Emerson Kwartet.
Kalle bespeelt een prachtige Italiaanse cello uit 1870, gebouwd door Gaetano Chiocchi, hem ter beschikking gesteld door het Nationaal Muziekinstrumenten Fonds.

Laurens de Man (1993) is een veelzijdig musicus, actief als pianist en organist, zowel solistisch als in kamermuziekverband. Hij studeerde piano, orgel en bijvak klavecimbel aan het Conservatorium van Amsterdam bij resp. David Kuyken, Jacques van Oortmerssen en Johan Hofmann (predicaat resp. "uitmuntend" en "cum laude"). Vanaf oktober 2017 zet hij zijn studie voort aan de Berlijnse Universität der Künste bij Leo van Doeselaar (Konzertexamen Orgel).
Laurens won diverse prijzen, o.a. tijdens de Nationale Finale van het Prinses Christina Concours in Den Haag (eerste prijs), bij het Internationaler Klavierwettbewerb “J.S. Bach” in Würzburg, de International Martini Organ Competition in Groningen (eerste prijs, publieksprijs en Jan Welmersprijs) en het Felix Mendelssohn Hochschulwettbewerb te Berlijn (orgel, derde prijs en prijs voor opdrachtwerk). In 2017 verscheen een piano-CD met klavierwerken van J.S. Bach. In april 2018 won hij de Sweelinck-Mullerprijs, een stipendium voor veelbelovende jonge organisten.
Sinds 2012 is hij pianist van het Chimaera Trio, dat veelvuldig optreedt en prijzen won bij de Storioni Ensemblewedstrijd in ’s-Hertogenbosch en het Tristan Keuris Kamermuziekconcours in Amersfoort (beide 2013). Voor dit trio arrangeert Laurens ook regelmatig muziek, van Pachelbel tot Mahler.
Sinds 2012 is Laurens hoofdorganist van de Janskerk in Utrecht, waar hij een Bätz-Witte orgel uit 1861 bespeelt. www.laurensdeman.nl
`,
    ["video's"]: `## J. Brahms 
Piano kwartet in C klein opus 60: Scherzo
<iframe width="560" height="315" src="https://www.youtube.com/embed/IDcgEiVSNOU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## R. Schumann 
Piano kwartet in Es groot opus 47: Andante Cantabile
<iframe width="560" height="315" src="https://www.youtube.com/embed/gr1hCsuB_dU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## W. A. Mozart 
Piano kwartet in G klein KV 478: Rondeau
<iframe width="560" height="315" src="https://www.youtube.com/embed/IbkB4eb-yRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `,
    ["foto's"]: `# Foto's
    `,
    contact: `
    Photo. Maybe the one from far where we are smiling?? 

Ensemblesognante@gmail.com

links to insta, youtube and fb
    `,
}