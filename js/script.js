// const mioTitolo = document.getElementById('titolo-click');
// mioTitolo.addEventListener('click', function(){
//     alert(`ciao mi hai cliccato`);
// });

const generaBtn = document.getElementById('genera');
generaBtn.addEventListener('click',
    function() {
        // Raccolgo le informazioni dell'utente (se mi serve le converto)
        const userName = document.getElementById('nome').value;
        const userKm = parseInt( document.getElementById('km').value );
        const userAge = document.getElementById('fascia-eta').value;

        // Calcolare price, carrozza, codice cp...
        let coach = Math.floor(Math.random() * 7) + 1;
        let cpCode = Math.floor(Math.random() * 9000) + 1000;
        let price = userKm * 0.21;
        let offer = 'Tariffa standard';
        
        // Aggiustiamo il prezzo in caso di sconti
        if( userAge === 'minorenne' ) {
            price = price - (price * 0.2);
            offer = 'Tariffa minorenne';
        } else if( userAge === 'over65' ) {
            price = price - (price * 0.4);
            offer = 'Tariffa Silver';
        }

        // Popolo il biglietto
        document.getElementById('nome-passeggero').innerHTML = userName;
        document.getElementById('offerta-applicata').innerHTML = offer;
        document.getElementById('carrozza').innerHTML = coach;
        document.getElementById('codice-cp').innerHTML = cpCode;
        document.getElementById('costo').innerHTML = price.toFixed(2) + ' Euro';

        // Lo mostro
        document.getElementById('biglietto').classList.remove('hidden');
    }
);

const annullaBtn = document.getElementById('annulla');

annullaBtn.addEventListener('click',
    function() {
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('fascia-eta').value = 'maggiorenne';

        document.getElementById('biglietto').classList.add('hidden');
    }
);