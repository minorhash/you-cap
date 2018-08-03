var getSub = require('youtube-captions-scraper').getSubtitles;
var vid="OHMjbsKN1p4"

var capSon={
  videoID: vid, // youtube video id
  lang: 'en' // default: `en`
}

var getCap=function(cap) {

console.log(cap.length);

for (var i=0;i<100;i++){
  console.log(cap[i].text);
   }
}

getSub(capSon).then(getCap);
