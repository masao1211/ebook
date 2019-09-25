function getID() {
    const value = window.location.href.match(new RegExp("[?&]id=(.*?)(&|$|#)"));
    if (value == null) return '';
    return decodeURIComponent(value[1]);
}
function searchShowData(id){
    for(var i=0; i<data.length; i++){
        if(data[i].id == id) return data[i];
    }
}
function goEditPage(){
    window.location.href = "../edit/edit.html?id="+getID();
}
function goIndexPage(){
    window.location.href = "../index.html";
}
function showStar(){
    var star = document.getElementById("star");
    if(bookmark){
        star.innerHTML = "<i class=\"star icon\"></i>"
    } else {
        star.innerHTML = "<i class=\"star outline icon\"></i>"
    }
}

var bookmark;
window.onload = function(){
    // alert(getID());
    showData = searchShowData(getID());
    // alert(showData.tags);
    bookmark = showData.is_bookmark;
    document.getElementById("title").innerHTML = showData.title;
    document.getElementById("tags").innerHTML = "";
    for(var i=0; i<showData.tags.length; i++){
        document.getElementById("tags").innerHTML += "<a class=\"ui tag label\">"+showData.tags[i]+"</a>";
    }
    document.getElementById("memo").innerHTML = showData.memo;
    showStar();
};