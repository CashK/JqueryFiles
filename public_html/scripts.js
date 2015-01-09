/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
   
    $('').css({'visibility': 'hidden', 'position': 'absolute'});
    
    $("td").css("padding", "6px 10px");
    $(".hero").css("color", "red");
    $("ul li.villian").css("background-color", "yellow");
    $("#article1").css("background-color", "lightgray");
    $("#article1").css("border-style", "ridge");
    $("h3, th").css("background-color", "orange");
    $("p + h3").css("background-color", "purple");
    $("#head1 ~ h1,b").css("background-color", "red");
    $("#head1 ~ h1,b").css("border-style", "solid");
    $("#superhumans > *").css("font-style", "italic");
    $("#html1").css("background-color", "darkgray");
    
    $("#head1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
});

function mouseOverME() {
    $("#h1").html("MouseOn")
}

function mouseOutME() {
    $("#h1").html("MouseOff");
    $("p").html("")
}