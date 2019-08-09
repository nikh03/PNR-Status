var CL = [];
var RLWL = [];
var RLGL = [];
var RQWL = [];
var PQWL = [];
var LDWL = [];
var GNWL = [];
var CKWL = [];

var i;
for(i=1;i<=135;i++)
{
    CL[i] = i ;
}
for(i=136;i<=270;i++)
{
    RLWL[i] = i;
}
for(i=271;i<=405;i++)
{
    RLGL[i]=i;
}
for(i=406;i<=540;i++)
{
    RQWL[i]=i;
}
for(i=541;i<=675;i++)
{
    PQWL[i]=i;
}
for(i=676;i<=810;i++)
{
    LDWL[i]=i;
}
for(i=811;i<=945;i++)
{
    GNWL[i]=i;
}
for(i=946;i<=1080;i++)
{
    CKWL[i]=i;
}

function check1()
{
    var input=document.getElementById("RLWL");
    var output=document.getElementById("Ans");

    var key=Number(input.value);
    if(RLWL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Still in Waiting List!!! TRY AGAIN LATER!!! "
    }
    else if(CL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Confirmed!!1 Your seat no is "+CL.indexOf(key);
    }
    else
    {
        output.innerHTML="PNR yet to Generate!!!";
    }
}   
function check2()
{
    var input=document.getElementById("RLGL");
    var output=document.getElementById("Ans");

    var key=Number(input.value);
    if(RLGL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Still in Waiting List!!! TRY AGAIN LATER!!! "
    }
    else if(CL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Confirmed!!1 Your seat no is "+CL.indexOf(key);
    }
    else
    {
        output.innerHTML="PNR yet to Generate!!!";
    }
}   
function check3()
{
    var input=document.getElementById("RQWL");
    var output=document.getElementById("Ans");

    var key=Number(input.value);
    if(RQWL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Still in Waiting List!!! TRY AGAIN LATER!!! "
    }
    else if(CL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Confirmed!!! Your seat no is "+CL.indexOf(key);
    }
    else
    {
        output.innerHTML="PNR yet to Generate!!!";
    }
}   
function check4()
{
    var input=document.getElementById("PQWL");
    var output=document.getElementById("Ans");

    var key=Number(input.value);
    if(PQWL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Still in Waiting List!!! TRY AGAIN LATER!!! "
    }
    else if(CL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Confirmed!!! Your seat no is "+CL.indexOf(key);
    }
    else
    {
        output.innerHTML="PNR yet to Generate!!!";
    }
}   
function check5()
{
    var input=document.getElementById("LDWL");
    var output=document.getElementById("Ans");

    var key=Number(input.value);
    if(LDWL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Still in Waiting List!!! TRY AGAIN LATER!!! "
    }
    else if(CL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Confirmed!!! Your seat no is "+CL.indexOf(key);
    }
    else
    {
        output.innerHTML="PNR yet to Generate!!!";
    }
}   
function check6()
{
    var input=document.getElementById("GNWL");
    var output=document.getElementById("Ans");

    var key=Number(input.value);
    if(GNWL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Still in Waiting List!!! TRY AGAIN LATER!!! "
    }
    else if(CL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Confirmed!!! Your seat no is "+CL.indexOf(key);
    }
    else
    {
        output.innerHTML="PNR yet to Generate!!!";
    }
}   
function check7()
{
    var input=document.getElementById("CKWL");
    var output=document.getElementById("Ans");

    var key=Number(input.value);
    if(CKWL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Still in Waiting List!!! TRY AGAIN LATER!!! "
    }
    else if(CL.indexOf(key)!=-1)
    {
        output.innerHTML="Seat Confirmed!!! Your seat no is "+CL.indexOf(key);
    }
    else
    {
        output.innerHTML="PNR yet to Generate!!!";
    }
}   
