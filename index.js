const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let index = 0; index < newCollection.length; index++) {
        callback(newCollection[index]);
      }

      return collection

    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = [];

      for (let index = 0; index < collection.length; index++) {
        newArr.push(callback(collection[index]));
      }

      return newArr;

    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;

    },
    find: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let idx = 0; idx < collection.length; idx++)
        if (callback(collection[idx])) return collection[idx]

      return undefined
    },
    filter: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = [];

      for (let index = 0; index < collection.length; index++) {
        if (callback(collection[index])) 
          newArr.push(collection[index])
      }
      return newArr;
    },
    size: function(collection) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      let size = 0;

      for (let index = 0; index < collection.length; index++) {
        size++;
      }
      return size;
    },
    first: function(collection, num =  1) {
      
      return (num === 1) ? collection[0] : collection.slice(0,num)
    },
    last: function(collection, num = 1) {
      return (num === 1) ? collection[collection.length - num] : collection.slice(collection.length - num, collection.length)
    },
    compact: function(collection) {
      const newArr = [];

      for (let index = 0; index < collection.length; index++) {
        if (collection[index]) newArr.push(collection[index])
      }
      return newArr;
    },
    sortBy: function(collection, cb) {
      const newArr = [...collection];
      return newArr.sort((a,b) => cb(a) - cb(b))
    },
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },
    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },
    uniq: function(collection, sorted=false, iteratee = false) {
      if (!iteratee) {
        let uniqueCollection = [...new Set(collection)];
        return uniqueCollection;
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return [...uniqVals]
      }
    },
    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
      
    },
    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()

    },


  }
})()

fi.libraryMethod()
