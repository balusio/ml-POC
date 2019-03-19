function recursiveValuesCat(array){
  for(index=0; index < array.length; index++){
    if(array[index].hasOwnProperty('id') && array[index]['id'] === 'category'){
      return  array[index]['values'];
    }
  }
}

// find name
function getName(objElement){
  let names = [];
  for(i = 0; i < objElement.length; i++){
    if(objElement[i].hasOwnProperty('path_from_root') && objElement[i].path_from_root.length > 0){
      for(j = 0; j < objElement[i].path_from_root.length; j++){
        names.push(objElement[i].path_from_root[j].name);
      }
    } else{
      if (i < 3){
        names.push(objElement[i].name);
      }

    }
  }
  return names;
}


exports.sortCategory = function(filters) {
    let foundedElements = recursiveValuesCat(filters);
    let names = getName(foundedElements);
    return(names);
};  


