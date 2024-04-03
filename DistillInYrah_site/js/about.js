function textValues(date){
    let txt = "";
    switch(date){
        case 1800:
            txt = "1";
            break;
        case 1805:
            txt = "2";
            break;
        case 1806:
            txt = "3";
            break;
        case 1810:
            txt = "4";
            break;
        case 1870:
            txt = "5";
            break;
        case 1905:
            txt = "6";
            break;
        case 1940:
            txt = "7";
            break;
        case 1980:
            txt = "8";
            break;
        case 2005:
            txt = "9";
            break;
        default: break;
    }
    document.getElementById("datestxt").innerHTML = txt;
}