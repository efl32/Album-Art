var linesToLine = gsap.timeline({paused: true});

linesToLine.to("#top-line", {duration: 0.25, scaleX:.5},"moveLines")
.to("#bottom-line", {duration: 0.25, scaleX:.5},"moveLines");


$("#burgerContainer").on("mouseenter", function(){
    console.log("mouse enter");

    if(canYouSeeNav === false){
        linesToLine.play();
    }
});
