/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    
    $("td").css("padding", "6px 10px");
    
    $(".hero").css("color", "red");
    
    $("ul li.villian").css("background-color", "yellow");
    
    $("h3, th").css("background-color", "orange");
    
    $("p + h3").css("background-color", "purple");
    
    $("#randstuff ~ h4,h5").css("background-color", "purple");
    
    $("#superhumans > *").css("font-style", "italic");
    
    $("div:has(h4)").css("text-decoration", "underline");
    
    $("div[id]").css("border", "3px solid black");
    
    $("li[class= 'hero']").css("border", "2px solid blue");
    
    $("li[class^= 'v']").css("border", "2px solid purple");
    
    $("li[class$= 'wn']").css("border", "2px solid orange");
    
    $("li:contains('Richards')").css("background-color", "cyan");
    
    $("#numbers tr:odd").addClass("nice");
    
    $("#numbers tr").mouseover(function() { $(this).addClass("mouseon"); });
    $("#numbers tr").mouseout(function() { $(this).removeClass("mouseon");
    });
});
//Video 1

//Video 2
$("document").ready(function() {
    
    $('p:last').css({"background-color": "purple", "color": "white"});
    
    $("p span:first-child").css("background-color", "orange");
    
    $("div p:last-child").css("background-color", "cyan");
    
    $("div :nth-child(1)").css("background-color", "pink");
    
    $("div :eq(2)").css("background-color", "purple");
    
    $("h4:lt(2)").css("background-color", "olive");
    
    $("#clickToHide").click(function() {
        $("#clickToHide").hide(); });
    
    $('#bringItBack').click(function() {
        if ($('#clickToHide').is(':visible')) {
            $('#clickToHide').fadeOut(2000);
            $(this).val('Bring Back');
        }
        else
        {
            $('#clickToHide').fadeIn(2000);
            $(this).val('Delete Text');
        }
    }); 
});
//Video 2