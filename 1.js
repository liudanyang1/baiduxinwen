(function() {
	 var img = document.getElementById('img');

    function change() {
        if (img.src.match('1.png')) {
            img.src = "2.png";
        } else if (img.src.match('2.png')) {
            img.src = "5.png";
        } else if (img.src.match('5.png')) {
            img.src = "6.png";
        } else if (img.src.match('6.png')) {
            img.src = "7.png";
        } else if (img.src.match('7.png')) {
            img.src = "8.png";
        } else if (img.src.match('8.png')) {
            img.src = "9.png";
        } else if (img.src.match('9.png')) {
            img.src = "10.png";
        } else if (img.src.match('10.png')) {
            img.src = "1.png";
        }
    }
    setInterval(change, 800);

    var ipt1 = document.getElementById('img1');
    var ipt2 = document.getElementById('img2');
    var ipt3 = document.getElementById('img3');
    var ipt4 = document.getElementById('img4');
    var ipt5 = document.getElementById('img5');
    var ipt6 = document.getElementById('img6');
    var ipt7 = document.getElementById('img7');
    var ipt8 = document.getElementById('img8');
    ipt1.onmouseover = function() {
        img.src = "1.png";
    }
    ipt2.onmouseover = function() {
        img.src = "2.png";
    }
    ipt3.onmouseover = function() {
        img.src = "5.png";
    }
    ipt4.onmouseover = function() {
        img.src = "6.png";
    }
    ipt5.onmouseover = function() {
        img.src = "7.png";
    }
    ipt6.onmouseover = function() {
        img.src = "8.png";
    }
    ipt7.onmouseover = function() {
        img.src = "9.png";
    }
    ipt8.onmouseover = function() {
        img.src = "10.png";
    }


}(window))