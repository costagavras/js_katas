// function songDecoder(song){

//   // var songNew = song.replace(/WUB/gi, " ").replace(/\s+/g, " ").trim();
//   // console.log(songNew);
//   // var songNew2 = song.split("WUB").join(" ").replace(/\s+/g, " ").trim();
//   // console.log(songNew2);
//   var songNew1 = song.split('WUB');
//   console.log(songNew1);
//   var songNew2 = songNew1.filter(Boolean);
//   // var songNew3 = song.split('WUB').filter(Boolean).join(" ");
//   console.log(songNew2);
//   // console.log(songNew3);
//   // var songNew4 = song.replace(/(WUB)+/g," ").trim();
//   // console.log(songNew4);
// }

// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");

// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];

//   return str.split("").filter(el => {
//     return vowels.indexOf(el.toLowerCase()) === -1;
//   }).join('');
// }

// console.log(disemvowel("This website is for losers LOL!"));