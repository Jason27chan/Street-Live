$(document).ready(function(){var e,r=function(){$("#sparkline1").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:"100%",height:"165",chartRangeMax:50,lineColor:"#1ea69a",fillColor:"rgba(30, 166, 154, 0.3)",highlightLineColor:"rgba(255,255,255,.1)",highlightSpotColor:"rgba(255,255,255,.1)"}),$("#sparkline1").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:"100%",height:"165",chartRangeMax:40,lineColor:"#f7531f",fillColor:"rgba(247, 83, 31, 0.3)",composite:!0,highlightLineColor:"rgba(255,255,255,.1)",highlightSpotColor:"rgba(255,255,255,.1)"}),$("#sparkline2").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"165",barWidth:"10",barSpacing:"3",barColor:"#348cd4"}),$("#sparkline3").sparkline([20,40,30,10],{type:"pie",width:"165",height:"165",sliceColors:["#348cd4","#45bbe0","#78c350","#8892d6"]}),$("#sparkline4").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:"100%",height:"165",chartRangeMax:50,lineColor:"#78c350",fillColor:"transparent",highlightLineColor:"rgba(255,255,255,.1)",highlightSpotColor:"rgba(255,255,255,.1)"}),$("#sparkline4").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:"100%",height:"165",chartRangeMax:40,lineColor:"#348cd4",fillColor:"transparent",composite:!0,highlightLineColor:"rgba(255,255,255,.1)",highlightSpotColor:"rgba(255,255,255,.1)"}),$("#sparkline6").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"line",width:"100%",height:"165",lineColor:"#7fc1fc",fillColor:"rgba(127,193,292,0.5)",highlightLineColor:"rgba(255,255,255,.1)",highlightSpotColor:"rgba(255,255,255,.1)"}),$("#sparkline6").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"165",barWidth:"10",barSpacing:"5",composite:!0,barColor:"#f06292"})},l=function(){var r,l=-1,a=-1,o=0,t=[];$("html").mousemove(function(i){var e=i.pageX,r=i.pageY;-1<l&&(o+=Math.max(Math.abs(e-l),Math.abs(r-a))),l=e,a=r});var h=function(){var i=(new Date).getTime();if(r&&r!=i){var e=Math.round(o/(i-r)*1e3);t.push(e),30<t.length&&t.splice(0,1),o=0,$("#sparkline5").sparkline(t,{tooltipSuffix:" pixels per second",type:"line",width:"100%",height:"165",chartRangeMax:50,lineColor:"#1ea69a",fillColor:"rgba(30, 166, 154, 0.3)",highlightLineColor:"rgba(24,147,126,.1)",highlightSpotColor:"rgba(24,147,126,.2)"})}r=i,setTimeout(h,500)};setTimeout(h,500)};r(),l(),$(window).resize(function(i){clearTimeout(e),e=setTimeout(function(){r(),l()},300)})});