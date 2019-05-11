// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// WE ARE THE CHAMPIONS MY FRIEND


function songDecoder(song){

  var songNew = song.replace(/WUB/gi, " ").replace(/\s+/g, " ").trim();
  console.log(songNew);
  var songNew2 = song.split("WUB").join(" ").replace(/\s+/g, " ").trim();
  console.log(songNew2);
  var songNew3 = song.split('WUB').filter(Boolean).join(" ");
  console.log(songNew3);
  var songNew4 = song.replace(/(WUB)+/g," ").trim();
  console.log(songNew4);
}

songDecoder("AWUBBWUBC");
songDecoder("AWUBWUBWUBBWUBWUBWUBC");
songDecoder("WUBAWUBBWUBCWUB");
