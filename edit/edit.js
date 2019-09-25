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
function goIndividualPage(){
    window.location.href = "../individual/individual.html?id="+getID();
}
function editRequest(){
    newData = {
        "id": getID(),
        "title": document.getElementById("title").value,
        "tags": document.getElementById("tags").value.split(','),
        "is_bookmark": bookmark,
        "memo": document.getElementById("memo").value
    };
    alert(newData.id);
    alert(newData.title);
    alert(newData.tags);
    alert(newData.is_bookmark);
    alert(newData.memo);
}
function showStar(){
    var star = document.getElementById("star");
    if(bookmark){
        star.innerHTML = "<i class=\"star icon\"></i>"
    } else {
        star.innerHTML = "<i class=\"star outline icon\"></i>"
    }
}
function reverseBookmark(){
    bookmark = !bookmark;
    showStar();
}

var bookmark;
window.onload = function(){
    // alert(getID());
    showData = searchShowData(getID());
    // alert(showData.tags);
    bookmark = showData.is_bookmark;
    document.getElementById("title").innerHTML = showData.title;
    document.getElementById("tags").innerHTML = showData.tags;
    document.getElementById("memo").innerHTML = showData.memo;
    showStar();
};