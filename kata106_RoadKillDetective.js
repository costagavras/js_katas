// The Road-Kill Detective

const ANIMALS = [ 'aardvark',
                  'alligator',
                  'armadillo',
                  'antelope',
                  'baboon',
                  'bear',
                  'bobcat',
                  'butterfly',
                  'cat',
                  'camel',
                  'cow',
                  'chameleon',
                  'dog',
                  'dolphin',
                  'duck',
                  'dragonfly',
                  'eagle',
                  'elephant',
                  'emu',
                  'echidna',
                  'fish',
                  'frog',
                  'flamingo',
                  'fox',
                  'goat',
                  'giraffe',
                  'gibbon',
                  'gecko',
                  'hyena',
                  'hippopotamus',
                  'horse',
                  'hamster',
                  'insect',
                  'impala',
                  'iguana',
                  'ibis',
                  'jackal',
                  'jaguar',
                  'jellyfish',
                  'kangaroo',
                  'kiwi',
                  'koala',
                  'killerwhale',
                  'lemur',
                  'leopard',
                  'llama',
                  'lion',
                  'monkey',
                  'mouse',
                  'moose',
                  'meercat',
                  'numbat',
                  'newt',
                  'ostrich',
                  'otter',
                  'octopus',
                  'orangutan',
                  'penguin',
                  'panther',
                  'parrot',
                  'pig',
                  'quail',
                  'quokka',
                  'quoll',
                  'rat',
                  'rhinoceros',
                  'racoon',
                  'reindeer',
                  'rabbit',
                  'snake',
                  'squirrel',
                  'sheep',
                  'seal',
                  'turtle',
                  'tiger',
                  'turkey',
                  'tapir',
                  'unicorn',
                  'vampirebat',
                  'vulture',
                  'wombat',
                  'walrus',
                  'wildebeast',
                  'wallaby',
                  'yak',
                  'zebra' ]


// const roadKill = photo => {
// const animal = [...new Set(photo.replace(/=/g,''))];
// let trooperPatrolled = ANIMALS.filter(beast => animal.every(char => beast.includes(char)));
// trooperPatrolled = trooperPatrolled.filter(an => an.replace(new RegExp('['+animal.join('')+']','g'),'').length === 0)                                        // ad hoc llama, moose cases
//   .filter(anml => anml[0] === animal[0] || anml[0] === animal.pop() || anml.slice(-1) === animal[0] || anml.slice(-1) === animal.pop()); // ad hoc flydragon cases
// let grammarNaziPatrolled = trooperPatrolled.filter(animal => animal !== 'alligator'); // ad hoc alligator

// return grammarNaziPatrolled.length === 1 ? grammarNaziPatrolled[0] : grammarNaziPatrolled.filter(critter => critter.length <= animal.length)[0] || '??';
// }
// return result.length > 0 ? result : '??';


// console.log(roadKill("====rraabbiitt=="));
// console.log(roadKill("==a======a=a=a=llig===a=t====o=r=r=r=r=="));
// console.log(roadKill("=======fly===dragon===="));
// console.log(roadKill("======mm==mo===o==oo==o=s=s=e====="));
// console.log(roadKill("=====k====r=a=vvvv==d=d=d=d=r==a=a======="));

// const IDS = ANIMALS.map(a => RegExp(`^${a.split('').join('+')}+$`))
// let roadKill = (p,q=p.replace(/=/g,'')) => ANIMALS[IDS.findIndex((a,i) => a.test(q) || a.test(q.split``.reverse().join``))] || '??'


// const roadKill = (photo) => {
//   const isA = (a, p) => new RegExp('^=*' + a.split('').map(c => c + '[=' + c + ']*').join('') + '=*$').test(p)
//   for (const animal of ANIMALS) {
//     if (isA(animal, photo) || isA(animal.split('').reverse().join(''), photo)) return animal
//   }
//   return "??"
// }

// function roadKill(photo, animal = photo.replace(/=/g, "")) {
//   const found = ANIMALS.find(a => {
//     const pattern = a.split("").join("+") + "+";
//     const exp = new RegExp(`^${pattern}$`);
//     const reversed = [...animal].reverse().join("");
    
//     return exp.test(animal) || exp.test(reversed);
//   });
  
//   return found || "??";
// }


function roadKill(photo) {
  const IDS = ANIMALS.map(a => RegExp(`^${a.split('').join('+')}+$`))
  const roadkillPhoto = photo.replace(/=+/g,'') 
  const animalIndex = IDS.findIndex((animal,idx) => animal.test(roadkillPhoto) || animal.test(roadkillPhoto.split``.reverse().join``)); 
  // console.log(animalIndex);
  return ANIMALS[animalIndex] || '??'
  }

  console.log(roadKill("==a======a=a=a=lig===a=t====o=r=r=r=r=="));