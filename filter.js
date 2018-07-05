_ = {};
_.filter = function(list, callback) {
  const storage = [];
  for (let i = 0, length = list.length; i < length; i++) {
    // Make this explicit to equal to true
    if (callback(list[i], i, list) === true) {
      storage.push(list[i]);
    }
  }
  return storage;
};

_.filter2 = function(list, callback) {
  const storage = [];
  _.each(list, (item, index, arr) => {
    if (callback(item, index, arr) === true) {
      storage.push(item);
    }
  });
  return storage;
};

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    // Loop through array
    for (let i = 0, length = list.length; i < length; i++) {
      // Value, index, list
      callback(list[i], i, list);
    }
  } else {
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
};

const numbers = [1,2,3,4,5];
_.filter(numbers, v => v > 3);

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const suspects = _.filter(videoData, person => person.present);