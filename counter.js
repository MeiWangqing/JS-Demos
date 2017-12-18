
var c=0
var t
function timedCount()
{
document.getElementById('txt').value=c
c=c+1
t=setTimeout("timedCount()",1000)
}
function time(controlButton)
{
    var checkFlag = parseInt(controlButton.getAttribute("checkFlag"));
    //为0代表停止状态
    if(checkFlag==0)
    {
        controlButton.value = "停止计时";
        controlButton.setAttribute("checkFlag", 1);
        timedCount();
    }else
    {
        controlButton.value = "开始计时";
        controlButton.setAttribute("checkFlag", 0);
        stopCount();
    }
}

function stopCount()
{
c=0;
setTimeout("document.getElementById('txt').value=0",0);
clearTimeout(t);
}
