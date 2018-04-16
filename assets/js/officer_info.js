// Sorry for the hack
// Author: Ryan Chang
var officer_info = 
{
    "Ryan Chang 2017" :
    {
        imgSrc : "assets/images/officers/2017-2018/RyanChang2.jpg",
        whatever :
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum augue felis, accumsan a dictum non, " +
        "scelerisque a purus. Proin quis cursus dui. Donec luctus dolor eu mi convallis posuere. " +
        "Pellentesque sed rutrum enim. Aliquam interdum aliquet mi ac pharetra. Maecenas nisi dui, accumsan mollis aliquet sed, " +
        "tempor malesuada sem. Curabitur nec nisl aliquet, mollis nibh ut, pulvinar risus. Cras blandit nulla sit amet dui sodales aliquet. " +
        "Pellentesque porta tellus et neque posuere luctus. "
    }
}

var change_officer_info = function(key)
{
    // jquery?
    if (officer_info[key] != undefined)
    {
        htmlStr = "";
        htmlStr += "<img src='" + officer_info[key].imgSrc + "' style='height:190px; width:auto; padding-right:10px; float:left'>"
        htmlStr += officer_info[key].whatever;

        $("#officer-info").html(htmlStr);
    }
    else
    {
        $("#officer-info").html("<h2>Nothing found!</h2>");
    }
}