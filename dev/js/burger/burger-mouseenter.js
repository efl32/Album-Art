var burgerRotate = gsap.timeline({paused: true});

burgerRotate.to("#burgerContainer", {duration: 0.25, rotate: 90},"moveLines");


$("#burgerContainer").on("mouseenter", function(){
    console.log("mouse enter");

    if(canYouSeeNav === false){
        burgerRotate.play();
    }
});
