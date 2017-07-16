var light_status = false;
fetch("http://192.168.1.149:3000/0");
function myfunc()
{
    if(light_status)
        {
            light_status = false;
            fetch("http://192.168.1.149:3000/0");
            document.getElementById("light").style.backgroundColor = "#fff";
        }
    else
        {
            light_status = true;
            fetch("http://192.168.1.149:3000/1");
            document.getElementById("light").style.backgroundColor = "#f00";
        }
}