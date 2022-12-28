$(document).ready(function(){
    var answer;
    $(".start").click(function() {
        function random() {
          var a = new Array();
          while (a.length < 4) {
            const num = Math.floor(Math.random() * 10);
            if (!a.includes(num)) {
              a.push(num);
            }
          }
          return a;
        }
        answer = random();
        alert("新的謎底已產生");
      });    
      
  
    $(".enter").click(function() {
        var aa = 0
        var bb = 0;
        var guess = $(".number").val().split('').map(function(n){ return parseInt(n) });
        $(".number").val('');
        if(guess.length != 4){
            alert("請輸入四位數字");
        }
        for (var i=0; i<4; i++) {
            var idx = answer.indexOf(guess[i]);
            if (idx != -1) {
                if (guess[i] == answer[i]) {
                    aa++;
                } else {
                    bb++;
                }
            }
        }
        if (aa == 4 && bb == 0) {
            alert("恭喜答對！！");
          }          
        for (var j = 0; j < guess.length; j++) {
            var g = "<div>" + guess[j] + "</div>";
            $(".guess").append(g);
        }
        $(".guess").append("--" + aa + "A" + bb + "B" + "     ");
    });
  });