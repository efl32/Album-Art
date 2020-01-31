var linesToShortLines = gsap.timeline({paused: true});

linesToShortLines.to("#top-line", {duration: 0.25, scaleX:.5, color:"rgb(186,9,9)"},"moveLines")
.to("#bottom-line", {duration: 0.25, scaleX:.5, color: "rgb(186,9,9)"},"moveLines");


$("#burgerContainer").on("mouseenter", function(){
    console.log("mouse enter");

    if(canYouSeeNav === false){
        linesToShortLines.play();

    }
});
