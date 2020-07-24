function updateObjectWithKeyAndValue(object, key, value){
  var object = Object.assign({}, object, {[key]:value})
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value 
  return object 
}

function deleteFromObjectByKey(object, key){
  var object = Object.assign ({})
  return object 
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key] 
  return object 
}