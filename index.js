function updateObjectWithKeyAndValue(object, key, value){
  var object = Object.assign({}, object, {[key]:value})
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return object[key] = value 
}