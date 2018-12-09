var counts = 0;
var elem = document.createElement('script');
elem.src = 'https://api.vk.com/method/photos.get?owner_id=-37512548&album_id=164359161&access_token=b90de1bdb90de1bdb90de1bdf8b96aa58abb90db90de1bde50e1574bb91f26336ad6d70&v=5.92&callback=callbackCount';
document.head.appendChild(elem);
function callbackCount(res) {
    counts = res.response.count;
    CountsApi(counts);
};
function CountsApi(counts) {
    var elem = document.createElement('script');
    elem.src = 'https://api.vk.com/method/photos.get?owner_id=-37512548&album_id=164359161&access_token=b90de1bdb90de1bdb90de1bdf8b96aa58abb90db90de1bde50e1574bb91f26336ad6d70&v=5.92&count='+counts+'&callback=callbackFunc';
    document.head.appendChild(elem);};
function callbackFunc(result) {
    window.onload = function () {
        for (var i = 0; i <= counts; i++) {
            var elem = document.createElement("img");
            elem.setAttribute("src", result.response.items[i].sizes[1].url);
            elem.setAttribute("lowsrc", result.response.items[i].sizes[6].url);
            elem.setAttribute("alt", result.response.items[i].sizes[8].url);
            elem.setAttribute("id", i);
            elem.setAttribute("class", "my-flex-block");
            elem.setAttribute("onclick", "PopUpWIn(this.id)");
            document.getElementById("images").appendChild(elem);
        };
    };
    overlayNone();
};
function PopUpWIn(id) {
    var BlackBackground = document.createElement('div');
    BlackBackground.id = 'shadow';
    document.body.appendChild(BlackBackground);
    var WindowModal = document.getElementById('popupWin');
    var elem = document.createElement('img');
    var currentImg = document.getElementById(id);
    elem.setAttribute('src', currentImg.lowsrc);
    elem.setAttribute('id', 'modalImg', 'fullscreen');
    document.getElementById("image").appendChild(elem);
    WindowModal.style.opacity = '1';
    WindowModal.style.visibility = 'visible';
    document.getElementById("item-number").innerHTML = (parseInt(id)+1)+"/"+counts;
    BlackBackground.onclick = function () {
        BlackBackground.parentNode.removeChild(BlackBackground);
        WindowModal.style.opacity = '0';
        WindowModal.style.visibility = 'hidden';
        document.getElementById("image").removeChild(elem);
        return false;
    };
    var clsBut = document.getElementById("close-button");
    var nextBut = document.getElementById("next");
    var prevBut = document.getElementById("prev");
    var fullBut = document.getElementById("full-button");
    clsBut.onclick = function () {
        BlackBackground.parentNode.removeChild(BlackBackground);
        WindowModal.style.opacity = '0';
        WindowModal.style.visibility = 'hidden';
        document.getElementById("image").removeChild(elem);
        return false;
    };
    fullBut.onclick = function () {
        var fullImg = document.getElementById(id);
        elem.setAttribute('src', fullImg.alt);
        document.getElementById("fullscreen").appendChild(elem);
        fullscreen.style.opacity = '1';
        fullscreen.style.visibility = 'visible';
    };
    fullscreen.onclick = function () {
        var fullImg = document.getElementById(id);
        fullscreen.style.opacity = '0';
        fullscreen.style.visibility = 'hidden';
        elem.setAttribute('src', fullImg.lowsrc);
        document.getElementById("image").appendChild(elem);
    };
    nextBut.onclick = function(){
        if (id<(counts-1)) {
            var SlideShow = document.getElementById(++id);
            document.getElementById("item-number").innerHTML = (id+1)+"/"+counts;
            elem.setAttribute('src', SlideShow.lowsrc);
        };
    };
    prevBut.onclick = function(){
        if (id>0) {
            var SlideShow = document.getElementById(--id);
            document.getElementById("item-number").innerHTML = (id+1)+"/"+counts;
            elem.setAttribute('src', SlideShow.lowsrc);
        };
    };
};
function overlayNone() {
    var overlay = document.getElementById("overlay");
    window.addEventListener('load', function(){overlay.style.display = 'none';});
}