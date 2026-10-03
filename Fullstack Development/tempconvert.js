//Convert Tempreture C to F and F to C


function celciusToFahrenheit(celcius)
{
return celcius*9/5+32;
}

function fahrenheitTocelcius(fahrenheit)
{
    return (fahrenheit-32)*5/9;
}

function convertTempreture(temp,unit)
{
    if(unit=='c')
    {
        return celciusToFahrenheit(temp) +" F";
    }
    else if(unit=='f')
    {
        return fahrenheitTocelcius(temp) +" C";

    }
    else
    {
        return 'invalid input ,please enter valid unit'
    }
}

console.log(convertTempreture(100,'c'));
console.log(convertTempreture(312,'f'));