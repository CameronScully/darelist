
function translate(promptText){
  var dares = [];
  var penalties = [];

  //console.log(promptText);

  //load dares
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

    console.log(extractedPointValue)

    //extract challengeable
    var challengableStart = promptText.indexOf("Challengeable:");
    var extractedChallengeable = promptText.slice(challengableStart+15, challengableStart+17);

    if(extractedChallengeable == "Ye"){
      extractedChallengeable = true;
      //cut string
      promptText = promptText.slice(dareTextEnd+33);
    } else {
      extractedChallengeable = false;
      //cut string
      promptText = promptText.slice(dareTextEnd+32);
    }

    //new object
    dares.push(
      {
        text: extractedText,
        pointValue: parseInt(extractedPointValue),
        challengable: extractedChallengeable,
        nsfw: false
      }
    );
  }

  //load penalties
  while(true){
    //find start of penalty
    var penaltyTextStart = promptText.indexOf("The Penalty:");

    if(penaltyTextStart == -1){
      break;
    }

    promptText = promptText.slice(penaltyTextStart+13);

    //find end of penalty
    var penaltyTextEnd = promptText.indexOf("The Penalty:");

    //extract penalty
    var extractedText = promptText.slice(0, penaltyTextEnd);

    promptText = promptText.slice(penaltyTextEnd);

    //new object
    penalties.push(
      {
        text: extractedText
      }
    );
  }

  var translation = {
    dares: dares,
    penalties: penalties
  };

  return translation;

}

export default translate;
