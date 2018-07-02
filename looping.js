const game = {
  suspect: [
    {
      name: 'Rusty',
      color: 'orange'
    },
    {
      name: 'Miss Scarlet',
      color: 'red'
    }
  ]
};

const suspects = game.suspect;

function printSuspect() {
  for (let i = 0, length = suspects.length; i < length; i++) {
    console.log("Outer loop");
    const person = suspects[i];
    exploreSuspect(person);
  }

  for (let key in suspects) {
    const person = suspects[key];
    exploreSuspect(person);
  }

  for(prop in suspects){
    const person = suspects[prop];
    destructSuspect(person);
  }
}

function exploreSuspect(person){ 
    for(prop in person){
        console.log(`Inner Loop ${prop}: ${person[prop]}`);
        if(person[prop] === 'Rusty'){
            console.log('Find you!');
        }else{
            console.log('None related');
        }
    }
}

function destructSuspect(person){
    const {name, color} = person;
    console.log(`destruction - name: ${name}, color: ${color}`);
}

function destructSuspectColor(){
    const[{color: firstColor}, {color: secondColor}] = suspects;
    console.log(`destruction - firstColor: ${firstColor}, secondColor: ${secondColor}`);
}

printSuspect();
