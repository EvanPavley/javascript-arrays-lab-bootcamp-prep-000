<<<<<<< HEAD
var kittens = [ 'Milo', 'Otis', 'Garfield' ]

function destructivelyAppendKitten (Ziggy){
  kittens.push(Ziggy)
  return kittens
}

function destructivelyPrependKitten (Angel){
  kittens.unshift(Angel)
  return kittens
}

function destructivelyRemoveLastKitten (){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten (){
  kittens.shift()
  return kittens
}

function appendKitten (Maisie){
  return [...kittens, Maisie];
}

function prependKitten (Punky){
  return [Punky, ...kittens];
}

function removeLastKitten (){
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten (){
  return kittens.slice(1);
}
=======
var kittens = ['Milo', 'Otis', 'Garfield']
>>>>>>> ad564ff7d8d49254c9cb94fed20a580a92ed7ce1

