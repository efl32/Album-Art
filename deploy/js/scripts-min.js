var canYouSeeNav=!1;gsap.set("#navBG",{transformOrigin:"50% 50%"}),gsap.set(".burgerLines",{transformOrigin:"50%, 50%"});var linesToLine=gsap.timeline({paused:!0});linesToLine.to("#top-line",{duration:.25,scaleX:.5},"moveLines").to("#bottom-line",{duration:.25,scaleX:.5},"moveLines"),$("#burgerContainer").on("mouseenter",(function(){console.log("mouse enter"),!1===canYouSeeNav&&linesToLine.play()})),$("#burgerContainer").on("mouseleave",(function(){console.log("mouse leave"),!1===canYouSeeNav&&linesToLine.reverse()}));var linesToArrow=gsap.timeline({paused:!0});linesToArrow.to("#top-line",{duration:.25,rotate:-45,transformOrigin:"100%, 50%",x:-8,y:2},"linesArrow").to("#bottom-line",{duration:.25,rotate:45,transformOrigin:"100%, 50%",x:-8,y:-2},"linesArrow").to("#burgerContainer",{duration:.25,scaleX:-1},"linesArrow"),$("#burgerContainer").on("click",(function(){console.log("click"),!1===canYouSeeNav?(linesToArrow.play(),gsap.to("#navBG",{duration:.5,scale:100,alpha:.85}),canYouSeeNav=!0):(linesToArrow.reverse(),gsap.to("#navBG",{duration:.5,scale:1}),canYouSeeNav=!1)})),$(document).ready((function(){}));