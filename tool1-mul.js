$(document).ready(function(){
    $(".enter").click(
        function enter(){
            var n1 = Number($(".number1").val());
            var n2 = Number($(".number2").val());
            var ans = n1 * n2;
            $(".answer").html("answer: " + ans.toString());
        }
    );
});