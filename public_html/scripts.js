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

//Video 3
$("document").ready(function() {
    
    $('#oneButton').bind('click', alertButtonClick);
    
    $('(#textBox1)').bind('blur', onBLurEvent)
                    .bind('focus', onFocusEvent)
                    .bind('onmousedown', onMDownEvent)
                    .bind('onmouseup', onMUpEvent)
                    .bind('change', onChangeEvent)
            
    $(window).resize(resizedWindow);
    
    $('#logo').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('#twoButton').bind('dblclick', dblClickedMe);
    
    $('form').submit(function() { alert("Submit button clicked") });
    
    $('#threeButton').bind('click', unbindLogo);
    
    $('#theBody').bind('keyup', checkKeyPressed).bind('mousemove', 
    theMouseMoved).click(event,eventTriggered);
    });
    
    function alertButtonClick() {
        alert("There was a button clicked");
    }
    
    function onBlurEvent() {
        $("#second").html("You left the box");
    }
    
    function onFocusEvent() {
        $("#second").html("you entered the box");
    }
    
    function onMDownEvent() {
        $("#second").html("you left the textbox");
    }
    
    function onMUpEvent() {
        $("#second").html("you entered the box");
    }
    
    function onChangeEvent() {
        $("#second").html("you changed the box");
    }
    
    function resizedWindow() {
        $("#second").html("Window was resized W: " + $(window).width() + "H:" +
                $(window).height());
    }
    
    
    function mouseOverMe() {
        $("#second").html("You put your cursor on my logo");
    }
    
    function mouseOutMe() {
        $("#second").html("You stopped touching my logo");
    }
    
    function onFocusEvent() {
        $("#second").html("You double clicked my button");
    }
    
    function unbindLogo() {
        $("#logo").unbind('mouseover', mouseOverMe).unbind('mouseout', mouseOut);
    }
    
    function checkKeyPressed(event) {
        $("#fifth").text(String.fromCharCode(event.keyCode));
    }
    
    function theMouseMoved(event) {
        $("#seventh").html(event.screenX);
        $(#ninth).html(event.screenY);
    }
    
    function eventTriggered(event) {
        $("#tenth").html(event.target.nodeName);
        $("eleventh").html(event.timeStamp);
    }
//Video 3