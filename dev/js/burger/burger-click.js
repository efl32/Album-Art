var linesToArrow = gsap.timeline({paused: true});

linesToArrow.to("#top-line", {duration: .25, y: 8},"linesArrow")
.to("#bottom-line", {duration: .25, y: -9},"linesArrow")
.to("#triangle", {duration: .25, alpha:1, x: 3},"linesArrow")
.to("#burgerContainer", {duration: .25, rotate: 180}, "linesArrow");


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
