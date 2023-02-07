
/* du må både ændre koden her, og i din HTML, hvis det er nødvendigt.. */


/*Opgave 1: skriv en validering af svar i koden herunder. resultatet skal vises i myAnsverFeedbackElement når bruger trykker på myAnsverButton .
der et korrekte svar:
nej 
*/


const myAnsverInput = document.getElementById('answerOne');
const myAnsverButton = document.getElementById('answerButton');
const myAnsverFeedbackElement = document.getElementById('answerFeedback');

myAnsverButton.addEventListener('click', (e) => {
    /* din kode her.  husk at skrive view funktion der viser om svaret er korrekt i myAnsverFeedbackElement, brug evt. innerHTML*/

    // console.log('Ikke korrekt');
    // displayResult('Ikke korrekt');
});

function displayResult(myData) {
  myDisplayElement.innerHTML = myData;
}

/*Opgave 2: udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film
*/


/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .lengt til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/

// FORM VALIDATION

// function validateEmail(email) {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// if (validateEmail("gogo@gmail.com")) {
//   console.log("Valid email address");
// } else {
//   console.log("Invalid email address");
// }


const validate = (form) => {
  console.log("dette er fra vores form ", form);

  let errors = [];

  console.log(form.fname.value);

  if (form.fname.value === "") {
    errors.push("Navn er påkrævet\n");
  }

  if (form.email.value === "") {
    errors.push("Email er påkrævet\n");
  }

  if (form.age.value === "") {
    errors.push("Alder er påkrævet\n");
  }

  if (form.age.value.value >= 12) {
    errors.push("Du skal være over 12 år for at måtte fortsætte\n");
  } 
  else {
    (form.age.value.value <= 12) 
    {
      errors.push("prøv igen\n");
    }
}

  if (errors.length > 0) {
    console.log("Number of errors are ", errors.length);
    let msg = "Følgende fejl var fundet: \n\n";
    for (let i = 0; i < errors.length; i++) {
      msg += errors[i];
    }
    alert(msg);
    return false;
  }

  return true;
};



/* helper functions*/
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/* eks på kald:
if (validateEmail("test@example.com")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
*/
