function superbowlWin(footballStats) {
    for (const obj of footballStats) {
        if (obj.result === 'W') {
            return obj.year;
        } else {
            return undefined;
        }
      }
}

console.log(superbowlWin([{result: "W", year: "2014"}, {result: "L", year: "2015"}]))