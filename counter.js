
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
    //Ϊ0����ֹͣ״̬
    if(checkFlag==0)
    {
        controlButton.value = "ֹͣ��ʱ";
        controlButton.setAttribute("checkFlag", 1);
        timedCount();
    }else
    {
        controlButton.value = "��ʼ��ʱ";
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
