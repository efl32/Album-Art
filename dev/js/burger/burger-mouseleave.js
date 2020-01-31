$("#burgerContainer").on("mouseleave", function(){
    console.log("mouse leave");

    if(canYouSeeNav === false){
        linesToShortLines.reverse();
    }
});
