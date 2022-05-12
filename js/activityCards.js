const cardData = {
    surfSchool: {
        title: 'Surf School',
        image: {
            file: 'surfschool.png',
            posX: '0',
            posY: '80%'
        },
        description: [
            'Surfschool Texel is al meer dan 10 jaar gevestigd op één van de mooiste (surf)stranden van Nederland. ',
            'Aan de zuidkant van het strand van Paal 17 vind je onze surfschool.',
            'Iemand leren surfen verveelt nooit. ',
            'Wij helpen je graag bij je eerste golven. Daarbij staan veiligheid en plezier voorop! ',
            'Genieten van deze uitdagende sport in een mooie, relaxte omgeving zorgt voor een onvergetelijke ervaring! ',
            'Na het surfen kun je nog lekker vertoeven op het strand of uitrusten in de hangmat.'
        ],
        websitePage: 'https://www.surfschool-texel.nl/',
        infoPage: 'https://www.surfschool-texel.nl/surfschool-texel',
        buyPage: 'https://www.surfschool-texel.nl/direct-boeken',
        prices: [9.89, 19.99, 48.49, 54.88, 65.02],
        color: '#9bcae9',
        shadow: '#277dad'
    },
    zeeDieren: {
        title: 'Zee Dieren',
        image: {
            file: 'zee-dieren.png',
            posX: '0',
            posY: '30%'
        },
        description: [
            'Ben je op Texel, dan ga je naar Ecomare',
            'Een bezoek aan dit centrum is leuk en boeiend voor alle leeftijden',
            'Geniet van de jonge zeehonden in de opvang, bekijk de zeehonden in de vaste groep boven én onder water en verbaas je over alles wat er leeft in de zee in het Zeeaquarium',
            'De interactieve tentoonstelling Wonderlijk Wad laat een diepe indruk achter; wat is de natuur toch bijzonder',
            'De Waddenzee is niet voor niets een UNESCO Werelderfgoed-gebied',
            'Hulpbehoevende vogels worden verzorgd in de Vogelopvang',
            'Daar zie je ook een groep jan-van-genten: indrukwekkende, mooie zeevogels',
            'Ze delen hun verblijf met aalscholvers en bergeenden',
            'In de Walviszaal sta je tussen de gigantische skeletten van een potvis en een bultrug en je ontdekt er wat wordt bedoeld met ‘een schat uit de darmen van de potvis’',
            'Er valt zoveel te beleven',
            'Koop vooraf je kaartjes op www',
            'ecomare',
            'nl',
            'Ecomare is dagelijks van 09',
            '30 uur - 17',
            '00 uur geopend (m',
            'u',
            'v',
            '1e kerstdag en nieuwjaarsdag)',
            'De kassa sluit om 16',
            '30 uur'
        ],
        websitePage: 'https://www.ecomare.nl/',
        infoPage: 'https://www.ecomare.nl/verdiep/',
        buyPage: 'https://www.ecomare.nl/plan/',
        prices: [9.89, 19.99, 48.49, 54.88, 65.02],
        color: '#76b997',
        shadow: '#053f94'
    }
}

const cardDisplay = document.getElementById('card-display');

function init() {
    for (const card in cardData) {
        const data = cardData[card];
        var rawHtml = createCard(card);

        cardDisplay.innerHTML += rawHtml;
        console.log(rawHtml);
    }
}
function createCard(card) {
    const data = cardData[card];
    const formatDescription = (arr) => {
        var description = arr[0];
        for (let i = 0; i < arr.length; i++) {
            const line = arr[i];
            description += '\n\t\t' + line;
        }
        return description;
    }
    const borderOutset = 
        `border-style: solid;
        border-top-color: ${data.color};
        border-left-color: ${data.color};
        border-bottom-color: ${data.shadow};
        border-right-color: ${data.shadow};`;
    const borderInset = 
        `border-style: solid;
        border-top-color: ${data.shadow};
        border-left-color: ${data.shadow};
        border-bottom-color: ${data.color};
        border-right-color: ${data.color};`;

    const html = `
<div class="${card} card" id="${card}">
    <style>
        #${card} {
            ${borderOutset}
        }
        .${card} .card-image {
            ${borderInset}
        }
        .${card} .card-line-seperator {
            ${borderInset}
        }
        .${card} .card-button {
            ${borderOutset}
        }
        .${card} .card-button:active {
            ${borderInset}
        }
    </style>
    <div class="${card} card-top">
        <p class="${card} card-title">${data.title}</p>

        <img 
            class="${card} card-image" 
            src="images/activiteiten/cards/${data.image.file}" 
            alt="${data.image.file.replace(/(.*)(?:.png|.jpg|.svg)/g, '$1')}" 
            style="object-position: ${data.image.posX} ${data.image.posY};"
        >

        <div class="${card} card-description">
            ${formatDescription(data.description)}
        </div>
    </div>
    <!----><div class="${card} card-line-seperator"></div><!---->
    <div class="${card} card-bottom">
        <div class="${card} card-bottom-links">
            <div class="${card} card-button card-button-website" onclick="loadPage('${data.websitePage}', true)">Website</div>
            <div class="${card} card-button card-button-info" onclick="loadPage('${data.infoPage}', true)">Informatie</div>
        </div>
        <div class="${card} card-bottom-buy">
            <div class="${card} card-price">€${data.prices[randomNum(0, data.prices.length)]}</div>
            <div class="${card} card-button card-button-buy" onclick="loadPage('${data.buyPage}', true)">Boeken</div>
        </div>
    </div>
</div>
    `
    return html;
}


init();



{
/* 
    <div class="card" id="example-card">
        <div class="card-top">
            <p class="card-title">Surf School 1</p>
            <img class="card-image" src="images/activiteiten/cards/surfschool.png" alt="surfschool">
            <div class="card-description">
                Some text to describe this activity here.
                Some text to describe this activity here.
            </div>
        </div>
        <!----><div class="card-line-seperator"></div><!---->
        <div class="card-bottom">
            <div class="card-bottom-links">
                <div class="card-button card-button-website" onclick="loadPage('https:\/\/www.surfschool-texel.nl/', true)">Website</div>
                <div class="card-button card-button-info" onclick="loadPage('https:\/\/www.surfschool-texel.nl/surfschool-texel', true)">Informatie</div>
            </div>
            <div class="card-bottom-buy">
                <div class="card-price">€28.99</div>
                <div class="card-button card-button-buy" onclick="loadPage('https:\/\/www.surfschool-texel.nl/direct-boeken', true)">Boeken</div>
            </div>
        </div>
    </div> 
*/
}