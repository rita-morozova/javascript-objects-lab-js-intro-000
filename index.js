function updateObjectWithKeyAndValue(object, key, value){
  var object = Object.assign({}, object, {[key]:value})
  return object
}