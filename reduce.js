//To not conflict with real lodash
__ = {};

// Not consider the object reduce in this case
__.reduce = (collection, callback, initialValue) => {
  let accumulator = initialValue;
    const length = collection.length;
    for (let i = 0; i < length; i++) {
      if(i === 0 && accumulator === undefined){
        accumulator = collection[0];
      }else{
        accumulator = callback(accumulator, collection[i], i, collection);
      }
    }

  return accumulator;
};

__.forEachRight = (collection, callback) => {
    if(Array.isArray(collection)){
      for(let i = collection.length; i >= 0 ; i--){
        callback(collection[i], i, collection);
      }
    }else{
      let keyArray = [];
      for(let key in collection){
        keyArray.push(key);
      }
      for(let i = keyArray.length; i >= 0; i--){
        const key = keyArray[i];
        callback(collection[key], key, collection);
      }
    }
};


const newDevelopment = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': true},
          {'billiard room': false},
          {library: true}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': true},
          {'billiard room': false},
          {library: false}
      ]
  }
];

// Get the room that suspects never go to, which in this case is ballroom
//Solution 1
// _.intersection(..._.map(newDevelopment, (suspect) => {
//   return _.reduce(suspect.rooms, (accumulator, room) => {
//     // get first value of the property
//     const key = _.keys(room)[0];
//     const value = room[key];
//     // if false, add the key into the array
//     if(value === false){
//       accumulator.push(key);
//     } 
//     return accumulator;
//   }, []);
// }))
//

