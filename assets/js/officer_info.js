// Sorry for the hack
// Author: Ryan Chang
var officer_info = 
{
    "Ryan Chang 2017" :
    {
        imgSrc : "assets/images/officers/2017-2018/RyanChang2.jpg",
        whatever :
        "<h2> Maybe Game Dev </h2>" +
        "<p>" + 
        "\"I really just started game development for the general programming experience. " +
        "I started in freshman year, I think. I used LibGDX to work in pure Java. " +
        "There's no engine. Nothing. It was really a trial by fire. " +
        "Powering through, I learned a lot about design. I didn't really apply the algorithms and data structures I was aiming to learn. " +
        "But, in an academic setting, you don't really learn about design patterns much, but actually writing something forces you to. " +
        "So, I really recommend that programmers try game design.\" <br>" +
        "\"But use an engine though.\" </p> <hr>" +
        "<h4> Ryan is now using Godot engine to try to make a Super Smash Bros. clone, again. </h4>" 
    }
}

var change_officer_info = function(key)
{
    // apparently jquery is bad?
    if (officer_info[key] != undefined)
    {
        htmlStr = "";
        if (officer_info[key].imgSrc != undefined)
        {
            htmlStr += "<img src='" + officer_info[key].imgSrc + "' style='height:200px; width:auto; padding-right:10px; float:left;'>"
        }
        htmlStr += officer_info[key].whatever;

        $("#officer-info").html(htmlStr);
    }
    else
    {
        $("#officer-info").html("<h2>Nothing found! :(</h2>");
    }
}