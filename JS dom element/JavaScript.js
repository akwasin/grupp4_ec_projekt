var pageTitle = document.URL;

switch (pageTitle) {
    case (pageTitle.indexOf("ekonomi") >= 0):
        console.log("url innehåller ordet ekonomi"); break;
        //$("business-header").css("background", "url(http://suplugins.com/podium/images/placeholder-02.jpg) no-repeat"); break;
    case (pageTitle.indexOf("hr") >= 0):
        $("business-header").css("background", "url(/images/r-srchbg_white.png) no-repeat"); break;
    case (pageTitle.indexOf("it") >= 0):
        $("business-header").css("background", "url(/images/r-srchbg_white.png) no-repeat"); break;
    case (pageTitle.indexOf("personal") >= 0):
        $("business-header").css("background", "url(/images/r-srchbg_white.png) no-repeat"); break;
    default:
        $("business-header").css("background", "url(/images/r-srchbg_white.png) no-repeat"); break;
        break;
}

// version 2 fungerande

var pageURL = document.URL;
var pageTitleUnformatted = pageURL.split("/");
var pageTitle = pageTitleUnformatted[5];

if (pageTitle.includes("ekonomi")) {
    console.log("url innehaller ordet ekonomi");
    $("#getHeaderImage").css('background-image', 'url("http://suplugins.com/podium/images/placeholder-02.jpg")');
} else if (pageTitle.includes("hr")) {
    console.log("url innehaller ordet hr");
} else if (pageTitle.includes("it")) {
    console.log("url innehaller ordet it");
} else if (pageTitle.includes("personal")) {
    console.log("url innehaller ordet personal");
} else if (pageTitle.includes("nyheter")) {
    console.log("url innehaller ordet nyheter");
} else if (pageTitle.includes("sok")) {
    console.log("url innehaller ordet sok");
};

var pageURL = document.URL;
var pageTitleUnformatted = pageURL.split("/");
var pageTitle = pageTitleUnformatted[5];

if (pageTitle.includes("ekonomi")) {
    console.log("url innehaller ordet ekonomi");
    $("#getHeaderImage").css('background-image', 'url("http://devsp-04/sites/ica/_catalogs/masterpage/images/header_ekonomi.jpg")');
} else if (pageTitle.includes("hr")) {
    console.log("url innehaller ordet hr");
    $("#getHeaderImage").css('background-image', 'url("http://devsp-04/sites/ica/_catalogs/masterpage/images/header_hr.jpg")');
} else if (pageTitle.includes("it")) {
    console.log("url innehaller ordet it");
    $("#getHeaderImage").css('background-image', 'url("http://devsp-04/sites/ica/_catalogs/masterpage/images/header_it.jpg")');
} else if (pageTitle.includes("personal")) {
    console.log("url innehaller ordet personal");
    $("#getHeaderImage").css('background-image', 'url("http://devsp-04/sites/ica/_catalogs/masterpage/images/header_personal.jpg")');
} else if (pageTitle.includes("nyheter")) {
    console.log("url innehaller ordet nyheter");
    $("#getHeaderImage").css('background-image', 'url("http://devsp-04/sites/ica/_catalogs/masterpage/images/header_nyheter.jpg")');
} else if (pageTitle.includes("sok")) {
    console.log("url innehaller ordet sök");
};