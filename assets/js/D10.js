const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("****** ESERCIZIO A ******");

let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("****** ESERCIZIO B ******");

let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("****** ESERCIZIO C ******");

let me = {
  name: "Pietro",
  surname: "Romano",
  age: "25",
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("****** ESERCIZIO D ******");

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("****** ESERCIZIO E ******");

me.skills = ["HTML", "CSS", "JavaScript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("****** ESERCIZIO F ******");

me.skills.push("React.js");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("****** ESERCIZIO G ******");

function removeLastElement(array) {
  me.skills.pop();
}

removeLastElement();
console.log(me);

//---------------------------------------------------------------------------------------//

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("****** ESERCIZIO 1 ******");

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("****** ESERCIZIO 2 ******");

function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(whoIsBigger(12, 32));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("****** ESERCIZIO 3 ******");

function splitMe(stringa) {
  return stringa.split(" ");
}
console.log(splitMe("I Love Coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("****** ESERCIZIO 4 ******");

function deleteOne(stringa, booleano) {
  if (booleano) {
    return stringa.slice(1, 7);
  } else {
    return stringa.slice(0, -1);
  }
}
console.log(deleteOne("Romano", true));
console.log(deleteOne("Romano", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("****** ESERCIZIO 5 ******");
//esercizio fatto con ciclo for ma lungo

/*function onlyLetters(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!isDigit(string[i])) {
      result += string[i];
    }
  }
  return result;
}
function isDigit(char) {
  return char >= "0" && char <= "9";
}*/

function onlyLetters(string) {
  return (string = string.replace(/\d+/g, " ")); // \d indica tutti i numeri, e /g indica di fare la sostituzione globale, e con gli apici vuoti effettivamente mi toglie
}
console.log(onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("****** ESERCIZIO 6 ******");

function isThisAnEmail(string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(string);
}
console.log(isThisAnEmail("test@example.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("****** ESERCIZIO 7 ******");

function whatDayIsIt() {
  let dayOfWeek = [
    "domenica",
    "Lunedì",
    "Martei",
    "Mercoledi",
    "Giovedì",
    "Venerdi",
    "Sabato",
  ];
  let today = new Date();
  let dayIndex = today.getDay();
  return dayOfWeek[dayIndex];
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("****** ESERCIZIO 8 ******");

function rollTheDice(number) {
  let sum = 0; //num di volte che la funzione dice deve essere chiamata
  let values = [];

  for (let i = 0; i < number; i++) {
    // uso il for per richiamare la funzione dice();
    let number = dice();
    sum += number;
    values.push(number); // durante ogni iterazione del ciclo, il valore viene aggiunto all'array 'values'.
  }
  return {
    sum: sum, // ritornerà la somma dei valori estratti da dice(), e 'value' conterrà un array di tutti i valori estratti.
    values: values,
  };
}

console.log(rollTheDice(6));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("****** ESERCIZIO 9 ******");

function howManyDays(date) {
  let today = new Date(); //scrivo la data di oggi

  let diff = today.getTime() - date.getTime(); // Calcolo la differenza in millisecondi tra oggi e la data x.

  let oneDay = 1000 * 60 * 60 * 24; // Calcolo il numero di millisecondi in un giorno

  let daysDiff = Math.floor(diff / oneDay); // Calcola il numero di giorni arrotondato verso il basso

  return daysDiff;
}
console.log(howManyDays(new Date("2024-06-16"))); // ho fatto la diff con il girono del mio compleanno e anche con l'anno della mia nascita (1998, 9509 giorni trascorsi).

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("****** ESERCIZIO 10 ******");

function isTodayMyBirthday() {
  let today = new Date(); // scrivo la data di oggi
  let birthDate = new Date(today.getFullYear(), 5, 28); //scrivo la data del mio compleanno nell'anno corrente , essendo  il mese indicizzato a partire da 0, sara 5=giugno e 28 la data di oggi.

  return (
    today.getMonth() === birthDate.getMonth() &&
    today.getDate() === birthDate.getDate()
  ); //Confronto il mese e il giorno di oggi con il mese e il giorno di birthDate.
}

console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("****** ESERCIZIO 11 ******");
// Per svolgere questo esercizio ho preso in considerazione l'oggetto creato nell'esercizio numero C : (me).

// Do come oggetto ed una stringa come paramentri
const deleteProp = (oggetto, stringa) => {
  const oggettoModificato = { ...oggetto }; //copio dall'oggetto originale
  delete oggettoModificato[stringa]; //elimino la proprietà specificata
  return oggettoModificato; // ritorna l'oggetto modificato
};
const nomeProprieta = "surname"; //scrivo la proprietà da eliminare passata come secondo paramento all'inizio
const oggettoSenzaProprieta = deleteProp(me, nomeProprieta); //applico la funzione

console.log("Oggetto originale:", me);
console.log("oggetto senza proprietà:", oggettoSenzaProprieta);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("****** ESERCIZIO 12 ******");

const newestMovie = (movies) => {
  let filmPiuRecente = movies[0];
  for (let i = 1; i < movies.length; i++) {
    if (movies[i].Year > filmPiuRecente.Year) {
      filmPiuRecente = movies[i];
    }
  }

  return filmPiuRecente;
};

const filmPiuRecente = newestMovie(movies);
console.log("Film più recente:", filmPiuRecente);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("****** ESERCIZIO 13 ******");

const countMovies = (movies) => {
  return movies.length;
};
const numeroDiFilm = countMovies(movies);

console.log("Film contenuti nell'array:", numeroDiFilm);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("****** ESERCIZIO 14 ******");

const onlyTheYears = (movies) => {
  const anniFilm = movies.map((film) => film.Year);
  return anniFilm;
};

const anniFilm = onlyTheYears(movies);

console.log("Anno uscita film:", anniFilm);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("****** ESERCIZIO 15 ******");

const onlyInLastMillennium = (movies) => {
  const filmMillennioScorso = movies.filter((film) => {
    const annoProduzione = film.Year;
    return annoProduzione < "2000";
  });

  return filmMillennioScorso;
};

const filmMillennioScorso = onlyInLastMillennium(movies);
console.log("Film prodotti nel millennio scorso:", filmMillennioScorso);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("****** ESERCIZIO 16 ******");

const sumAllTheYears = (movies) => {
  let sommaAnni = 0;
  for (let i = 0; i < movies.length; i++) {
    // uso il ciclo for per iterare su titti gli elementi dell'array
    sommaAnni += Number(movies[i].Year); //aggiungo l'anno di ogni film a sommaAnni e scrivo la funzione number che prende da movies la stringa contenente l'anno e la converte in num intero.
  }
  return sommaAnni;
};

const sommaAnniDeiFilm = sumAllTheYears(movies);

console.log("Il risultato è: ", sommaAnniDeiFilm);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("****** ESERCIZIO 17 ******");

const searchByTitle = (movies, stringa) => {
  const filmRicercati = movies.filter((film) => {
    return film.Title.includes(stringa);
  });
  return filmRicercati;
};
const ricerca = searchByTitle(movies, "Lord");
console.log(ricerca);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("****** ESERCIZIO 18 ******");

const searchAndDivide = (movies, searchString) => {
  const match = [];
  const unmatch = []; //scrivo gli array che devono contenere i film specifici

  movies.reduce((acc, film) => {
    if (film.Title.includes(searchString)) {
      match.push(film);
    } else {
      unmatch.push(film);
    }
    return acc;
  });

  return { match, unmatch };
};

const risultatoRicerca = searchAndDivide(movies, "Avengers");
console.log(risultatoRicerca);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("****** ESERCIZIO 19 ******");

const removeIndex = (indexToRemove, movies) => {
  if (indexToRemove >= 0 && indexToRemove < movies.length) {
    //verifico che l'indice sia maggiore o uguale a zero e anche che l'indice non superi la lunghezza dell'array
    movies.splice(indexToRemove, 1); //uso splice per rimuovere l'elemento dall'array l'indice specificato e con 1 dico che deve essere rimosso un solo elemento , mentre se l'indice non è valido stamperà in console il messaggio di errore
  } else {
    console.log("Indice non valido.");
  }
  return movies; //ritorna all'array movies se non trova l'indice e lo stampa senza rimuovere niente
};

const indexToRemove = 5; // in questo caso sto togliendo il sesto fim dell'array movies, se do come indice 14, quindi più della lughezza dell'array mi darà il comando 'indice non valido'.
const updatedMovies = removeIndex(indexToRemove, movies.slice());
console.log(updatedMovies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("****** ESERCIZIO 20 ******");

const selectContainer = () => {
  const containerElement = document.getElementById("container");
  return containerElement;
};

const containerElement = selectContainer();

if (containerElement) {
  console.log("container trovato", containerElement);
} else {
  console.log("container non trovato"); //se tolgo il container da html mi spunterà il messaggio di errore.
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("****** ESERCIZIO 21 ******");

const selectTd = () => {
  const tdElements = document.querySelectorAll("td");
  return tdElements;
};

console.log(selectTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("****** ESERCIZIO 22 ******");

function stampaTd() {
  const tdElements = document.querySelectorAll("td");
  for (let i = 0; i < tdElements.length; i++) {
    console.log(tdElements[i].innerHTML);
  }
}
stampaTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("****** ESERCIZIO 23 ******");

const aggiungiColoreRed = () => {
  const linkElements = document.querySelectorAll("a");

  linkElements.forEach((linkElement) => {
    linkElement.style.backgroundColor = "red";
  });
};

aggiungiColoreRed();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("****** ESERCIZIO 24 ******");

function newElement() {
  const newList = document.getElementById("myList");
  const nuovoElemento = document.createElement("li");
  nuovoElemento.innerText = "Pasta al forno";
  newList.appendChild(nuovoElemento);
}
newElement();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("****** ESERCIZIO 25 ******");

function svuotaLista() {
  const newList = document.getElementById("myList");
  newList.innerHTML = "";
}
// svuotaLista(); //togliendo il commendo la lista si svuota

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("****** ESERCIZIO 26 ******");

function aggiungiClasse() {
  const trElements = document.querySelectorAll("tr");
  trElements.forEach((t) => {
    t.classList.add("test");
  });
}

aggiungiClasse();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("****** ESERCIZIO 27 ******");

const halfTree = (altezzaAlbero) => {     // do un paramentro ad halfTree che prende l'altezza come parametro
  if (typeof altezzaAlbero === "number" && altezzaAlbero > 0) {  //verifico che 'laltezzaAlbero sia un numero e anche positivo maggiore di 0
    for (let i = 1; i <= altezzaAlbero; i++) {   //ciclo for che va da 1 ad altezzaAlbero
      console.log("*".repeat(i));
    }
  }
};

halfTree(8);
console.log("** ");
console.log("Buon natale!");

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("****** ESERCIZIO 28 ******");

const tree = (altezzaAlbero) => {
  if (
    typeof altezzaAlbero === "number" &&
    altezzaAlbero > 0 &&
    Number.isInteger(altezzaAlbero) // verifico che altezzaAlbero sia un numero
  ) {
    for (let i = 1; i <= altezzaAlbero; i++) {
      //creo una stringa di spazi vuoti per centrare gli asterischi
      // Diminuisco il numero degli spazi ogni volta che altezzaAlbero diminuisce
      const linea = " ".repeat(altezzaAlbero - i) + "*".repeat(2 * i - 1);  //creo una stringa di asterischi con incremento dispari in modo che l'albero si mette al centro
      console.log(linea);
    }
  }
};
tree(8)
console.log("      **");
console.log("Buon natale!");
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log("****** ESERCIZIO 29 ******");

