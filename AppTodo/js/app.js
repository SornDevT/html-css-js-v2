

// ສະແດງ x ໃນລາຍການ
var myNodekist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodekist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodekist[i].appendChild(span);
    
}

/// ກົດປິດລາຍການ
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
    
}

// ການເພີ່ມລາຍການ

function newElement(){
    
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);

    if( inputValue === ''){
        alert("ທ່ານຕ້ອປ້ອນຂໍ້ມູນ");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    // ຫຼັງຈາກເພີ່ມຂໍ້ມູນແລ້ວ ເຄຼຍ input
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    
}