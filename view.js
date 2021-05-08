var waiting_users = [
    { username: "lyingOrange6", skill: 62, user_level: 2, waiting_time: 4 },
    { username: "betrayedSnipe6", skill: 25, user_level: 4, waiting_time: 32 },
    { username: "morbidDove1", skill: 92, user_level: 0, waiting_time: 47 },
    { username: "decimalCheese8", skill: 94, user_level: 4, waiting_time: 82 },
    { username: "lazySnail8", skill: 29, user_level: 2, waiting_time: 47 },
    { username: "shamefulBuzzard5", skill: 72, user_level: 2, waiting_time: 51 },
    { username: "giddyBuck3", skill: 71, user_level: 1, waiting_time: 30 },
    { username: "panickyToucan5", skill: 23, user_level: 2, waiting_time: 62 },
    { username: "cynicalCordial3", skill: 26, user_level: 2, waiting_time: 15 },
    { username: "zestyMagpie5", skill: 26, user_level: 2, waiting_time: 46 },
    { username: "dearEggs6", skill: 47, user_level: 2, waiting_time: 88 },
    { username: "grudgingPup3", skill: 72, user_level: 4, waiting_time: 0 },
    { username: "artisticMallard1", skill: 75, user_level: 3, waiting_time: 42 },
    { username: "solidSausage3", skill: 9, user_level: 1, waiting_time: 24 },
    { username: "awedAntelope0", skill: 33, user_level: 3, waiting_time: 13 },
    { username: "jealousBoars7", skill: 28, user_level: 2, waiting_time: 84 },
    { username: "pridefulBobolink8", skill: 5, user_level: 1, waiting_time: 22 },
    { username: "needyEagle6", skill: 49, user_level: 1, waiting_time: 1 },
    { username: "cockyBustard3", skill: 88, user_level: 4, waiting_time: 15 },
    { username: "pleasedBuck8", skill: 64, user_level: 4, waiting_time: 63 },
    { username: "hushedJaguar8", skill: 77, user_level: 1, waiting_time: 47 },
    { username: "pitifulCaribou6", skill: 47, user_level: 3, waiting_time: 67 },
    { username: "adoringSeafowl8", skill: 53, user_level: 3, waiting_time: 74 },
    { username: "peskyMandrill7", skill: 53, user_level: 4, waiting_time: 21 },
    { username: "kindSeafowl4", skill: 44, user_level: 4, waiting_time: 72 },
    { username: "shyCheetah0", skill: 92, user_level: 4, waiting_time: 76 },
    { username: "grizzledBoa6", skill: 96, user_level: 4, waiting_time: 37 },
    { username: "similarSeagull6", skill: 51, user_level: 3, waiting_time: 48 },
    { username: "obsessedMoth2", skill: 10, user_level: 1, waiting_time: 79 },
    { username: "sincereBoa1", skill: 23, user_level: 4, waiting_time: 67 },
    { username: "humorousHoopoe5", skill: 4, user_level: 0, waiting_time: 33 },
    { username: "thriftyLapwing1", skill: 39, user_level: 1, waiting_time: 44 },
    { username: "outlyingApricots1", skill: 64, user_level: 3, waiting_time: 69 },
    { username: "eagerCow2", skill: 94, user_level: 4, waiting_time: 89 },
    { username: "shyCockatoo9", skill: 62, user_level: 2, waiting_time: 59 },
    { username: "worriedChile9", skill: 72, user_level: 3, waiting_time: 2 },
    { username: "dopeyWhiting7", skill: 37, user_level: 2, waiting_time: 5 },
    { username: "cheerfulMoth9", skill: 4, user_level: 2, waiting_time: 46 },
    { username: "grudgingPorpoise3", skill: 76, user_level: 4, waiting_time: 40 },
    { username: "trustingOrange7", skill: 80, user_level: 4, waiting_time: 72 },
    { username: "dopeyChamois3", skill: 80, user_level: 0, waiting_time: 50 },
    { username: "peacefulGatorade4", skill: 19, user_level: 4, waiting_time: 26 },
    { username: "cruelEland7", skill: 47, user_level: 0, waiting_time: 21 },
    { username: "aboardWasp3", skill: 12, user_level: 4, waiting_time: 34 },
    { username: "grudgingGelding4", skill: 75, user_level: 1, waiting_time: 36 },
    { username: "cockyHare2", skill: 41, user_level: 0, waiting_time: 56 },
    { username: "guiltyPolenta9", skill: 91, user_level: 0, waiting_time: 42 },
    { username: "scornfulTacos5", skill: 48, user_level: 1, waiting_time: 64 },
    { username: "pluckyAntelope3", skill: 93, user_level: 0, waiting_time: 88 },
    { username: "holisticChough1", skill: 25, user_level: 3, waiting_time: 78 },
  ];
  var match_config = { s_weight: 5, l_weight: 25, t_weight: 2 };


  function getMatches() {
    let result = [];
   var j= waiting_users.length-1   
   for (let i = 0; i < waiting_users.length/2; i++) {
    let d_score = [];
  //let j= waiting_users.length -1 
   let distance_score =
   match_config.s_weight *
     (waiting_users[i].skill - waiting_users[j].skill) +
   match_config.t_weight *
     (waiting_users[i].waiting_time - waiting_users[j].waiting_time) +
   match_config.l_weight *
     (waiting_users[i].user_level - waiting_users[j].user_level);
 d_score.push({
   distance_score: distance_score,
   user1: waiting_users[i].username,
   user2: waiting_users[j].username,
 });
 result.push(d_score);
 j-=1
}

    let recordArray = [];
    let matches = {};
    // Filter d_score to match users by criteria.
    for (const iterator of result) {
      // sorting resultArray to find least distance_score
      let sortedArray = iterator.sort(function (a, b) {
        return a.distance_score - b.distance_score;
      });
       

      for (const iterator of sortedArray) {
        let user1 = iterator.user1;
        let user2 = iterator.user2;
        // The users should not be duplicate while matching
        if (!recordArray.includes(user1) && !recordArray.includes(user2)) {
          matches[user1] = user2;
          recordArray.push(user1);
          recordArray.push(user2);
        }
      }
    }
    console.log(matches);
  }
  getMatches();