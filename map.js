//_.map([1,2,3], function(v, i, list){console.log(v)})
//_.each never return a thing
//_.map always return an array every time
//BTW, the first line of code will return undefined

//The quickest way to use underscore without any configuration is to access their website and use dev tool! Same as lodash and jquery~

const weapons = ['candlestick','lead pipe','revolver'];
const makeBroken = function(item){
    return `broken ${item}`;
}



_ = {};

_.map = function(list, callback){
    const storage = [];
    for(let i = 0, length = list.length; i < length; i++){
        storage.push(callback(list[i], i, list));
    }
    return storage;
}

// Second way
_.map2 = function(list, callback){
    const storage = [];
    _.each(list, (value, index, list) => storage.push(callback(value, index, list)));
    return storage;
}

_.each = function(list, callback){
    if (Array.isArray(list)) {
      // Loop through array
      for (let i = 0, length = list.length; i < length; i++) {
        // Value, index, list
        callback(list[i], i, list);
      }
    }else{
      for(let key in list){
        callback(list[key], key, list);
      } 
    }
  }
_.map(weapons, makeBroken);