$(document).ready(function(){
    var a = 0;
    function n(){
        a++;
    }
    var count = 0;
    const time = setInterval(()=>{
        count++;
        console.log(count);
        if (count === 30) {
            clearInterval(time);
            alert("時間到！");
            $(".times").html(a+"下/每三十秒");
        }
    }, 1000)
    $(".click").click(n);
});
