// alert("all of your straight blind eyes, wide on my plastic toys :]")

const add = function(numerals)
{
    document.getElementById('display').value += numerals;
};

const reset = function()
{

    document.getElementById('display').value = "";
};

const resultado = function()
{

    var result = document.getElementById('display').value = eval(display.value);

};

const clockMenu = function()
{
    dwn = document.getElementById("clk-menu");
    dwn.classList.toggle("clockMenu")
    dwn.classList.remove("closeMenu")

    var hr, min, sec;

    var d = new Date;
    sec = d.getSeconds();
    min = d.getMinutes();
    hr = d.getHours();

    if(hr<10)
    {
        hr = "0" + hr;
    }
    else
    {
        hr = "" + hr;
    }

    if(min<10)
    {
        min = "0" + min;
    }
    else
    {
        min = "" + min;
    }

    if(sec<10)
    {
        sec = "0" + sec;
    }
    else
    {
        sec = "" + sec;
    }

    document.getElementById("hrs").innerHTML = hr;
    document.getElementById("mins").innerHTML = min;
    document.getElementById("secs").innerHTML = sec;

    var day, month;

    switch(d.getDay())
    {
        case 1: day = "mon";
            break;
        case 2: day = "tue";
            break;
        case 3: day = "wed";
            break;
        case 4: day = "thur";
            break;
        case 5: day = "fri";
            break;
        case 6: day = "sat";
            break;
        case 0: day = "sun";
            break;
    }

    switch(d.getMonth())
    {
        case 0: month = "jan";
            break;
        case 1: month = "feb";
            break;
        case 2: month = "mar";
            break;
        case 3: month = "apr";
            break;
        case 4: month = "may";
            break;
        case 5: month = "jun";
            break;
        case 6: month = "jul";
            break;
        case 7: month = "aug";
            break;
        case 8: month = "sep";
            break;
        case 9: month = "oct";
            break;
        case 10: month = "nov";
            break;
        case 11: month = "dec";
            break;
    }
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    document.getElementById("date").innerHTML = d.getDate();
}


const closeMenu = function()
{
    dwn = document.getElementById("clk-menu");
    dwn.classList.toggle("closeMenu")
    dwn.classList.remove("clockMenu")
}