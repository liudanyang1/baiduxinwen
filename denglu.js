(function() {

    var dll = document.getElementById('denglu');
    var div_denglu = document.getElementById('denglu_baidu');
    var denglu_btn = document.getElementById("denglu_btn");
    var denglu_baidu_input1 = document.getElementById('denglu_baidu_input1');
    var denglu_baidu_tishi = document.getElementById('denglu_baidu_tishi');
    dll.onclick = function() {
        div_denglu.style = "display:block";
    }
    var x = document.getElementById('denglu_baidu_a');
    x.onclick = function() {
        div_denglu.style = "display:none";
        denglu_baidu_tishi.style = "display:none";
    }
    x.onmouseover = function() {
        x.style = "color:red";
    }
    x.onmouseout = function() {
        x.style = "color:#666";
    }
    denglu_btn.onclick = function() {
        if (denglu_baidu_input1.value == "") {
            denglu_baidu_tishi.style = "display:block";
            denglu_baidu_input1.focus();
        }
    }
}(window))
