
function translate(promptText){
  var dares = [];

  //console.log(promptText);

  while(true){
    //find start of dare
    var dareTextStart = promptText.indexOf("The Dare:");

    if(dareTextStart == -1){
      break;
    }

    //find end of dare
    var dareTextEnd = promptText.indexOf("Point Value:");

    //extract dare
    var extractedText = promptText.slice(dareTextStart+10, dareTextEnd);

    //extract point Value
    var extractedPointValue = promptText.slice(dareTextEnd+13, dareTextEnd+14);

    //extract challengeable
    var extractedChallengeable = promptText.slice(dareTextEnd+30, dareTextEnd+32);

    if(extractedChallengeable == "Ye"){
      extractedChallengeable = promptText.slice(dareTextEnd+30, dareTextEnd+33);
      //cut string
      promptText = promptText.slice(dareTextEnd+33);
    } else {
      //cut string
      promptText = promptText.slice(dareTextEnd+32);
    }

    //new object
    dares.push(
      {
        text: extractedText,
        pointValue: extractedPointValue,
        challengeable: extractedChallengeable
      }
    );
  }

  return dares;

}

export default translate;
