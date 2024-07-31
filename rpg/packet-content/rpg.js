//creates character class
class Character {
    constructor(name, charClass, str, agil, intel, dex) {
        this.name = name;
        this.charClass = charClass;
        this.str = str;
        this.agil = agil;
        this.intel = intel;
        this.dex = dex;

        //obtains details of character
        this.getDetails = function () {
            return `
            <div class="character">
                <h3>${this.name} (${this.charClass})</h3>
                <p>Strength: ${this.str}<p>
                <p>Agility: ${this.agil}<p>
                <p>Intelligence: ${this.intel}<p>
                <p>Dexterity: ${this.dex}<p>
            </div>
        `;
        };
    }
}

//store character(s)
let characters = []

//creation of character
function createCharacter() {
    const name = document.getElementById('name').value;
    const charClass = document.getElementById('class').value;
    const str = parseInt(document.getElementById('str').value);
    const agil = parseInt(document.getElementById('agil').value);
    const intel = parseInt(document.getElementById('intel').value);
    const dex = parseInt(document.getElementById('dex').value);
    
    //making sure field input by user is correct
    if (!name || !charClass || isNaN(str) || isNaN(agil) || isNaN(intel) || isNaN(dex)) {
    alert('All fields must be filled with valid data.')
    return false;
    };

    //input fields and push to characters array
    const newCharacter = new Character(name, charClass, str, agil, intel, dex);
    characters.push(newCharacter);
    document.getElementById('characters').innerHTML += newCharacter.getDetails();
    console.log(characters)
    return true;
};

function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('visible');
};

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('visible');
};

//creates appropriate alerts
document.addEventListener('DOMContentLoaded', () => {
    const createCharacterBtn = document.getElementById('createCharacterBtn');
    const openFormerOverlayBtn = document.getElementById('openFormerOverlayBtn');
    const closeFormerOverlayBtn = document.getElementById('closeFormerOverlayBtn'); 
    const closeOverlayBtn = document.getElementById('closeOverlayBtn'); 
    const formerOverlay = document.getElementById('formerOverlay');
    const overlay = document.getElementById('overlay');

    openFormerOverlayBtn.addEventListener('click', () => {
        formerOverlay.classList.add('visible');
    });

    closeFormerOverlayBtn.addEventListener('click', () => {
        formerOverlay.classList.remove('visible');
    });

    createCharacterBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (createCharacter()) {
        formerOverlay.classList.remove('visible');
        document.getElementById('name').value = '';
        document.getElementById('class').value = '';
        document.getElementById('str').value = '';
        document.getElementById('agil').value = '';
        document.getElementById('intel').value = '';
        document.getElementById('dex').value = '';
        showOverlay();
    };
});

    closeOverlayBtn.addEventListener('click', () => {
        overlay.classList.remove('visible');
    });
});


//creates class tbc...
class Interact {
    constructor(greet, leave, intrigue, ask) {
        this.greet = greet;
        this.leave = leave;
        this.intrigue = intrigue;
        this.ask = ask;
    }
    
        //funnction to talk to characters
        talkTo() {
            return `
            <div class="talkTo">
                <h3>Talk to me!</h3>
                <button>Dexterity: ${this.greet}</button>
                <button>Dexterity: ${this.leave}</button>
                <button>Dexterity: ${this.intrigue}</button>
                <button>Dexterity: ${this.ask}</button>
            </div>
        `;
    }
}