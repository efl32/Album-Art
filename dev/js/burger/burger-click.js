var linesToArrow = gsap.timeline({paused: true});

linesToArrow.to("#top-line", {duration: .25, rotate: -45, transformOrigin: "100%, 50%", x: -8, y: 2},"linesArrow")
.to("#bottom-line", {duration: .25, rotate: 45, transformOrigin: "100%, 50%", x: -8, y: -2},"linesArrow")
.to("#burgerContainer", {duration: .25, scaleX: -1}, "linesArrow");


$("#burgerContainer").on("click", function(){

    console.log("click");

    if(canYouSeeNav === false){
        linesToArrow.play();
        canYouSeeNav = true;
    }else{
        linesToArrow.reverse();
        canYouSeeNav = false;
    }

});
