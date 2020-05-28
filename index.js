
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
  }
//   var deep_copy = Object.assign({}, object);
//   var combined_deep_copy = Object.assign(deep_copy, {[key]: value});
//   return combined_deep_copy
//console.log(updateObjectWithKeyAndValue)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value
   return object
  // var updated_object = Object.assign(object,{[key]: value})
  // return updated_object()
}

function deleteFromObjectByKey(object, key){
  return Object.assign({}, delete object.key)
  
}

function destructivelyDeleteFromObjectByKey(object, key){
 delete object[key]
 return object
}
