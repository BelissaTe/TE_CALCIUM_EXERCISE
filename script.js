function st() {
    var a = prompt('Input the first number: ');
    var b = prompt('Input the second number: ');
    var c = prompt('Input the third number: ');
    isNaN(a, b, c);
    if(isNaN(a, b, c))
    {
        alert("Invalid input. Please try again.")
    }else{
        if (a==b && b==c) {
            alert('This triangle is EQUILATERAL.');
        }
        
        else if(a===b||b===c||a===c) {
            alert('This triangle is ISOSCELES.');
        }
        
        else {
            alert('This triangle is SCALENE.');
        }
    }
}

st();