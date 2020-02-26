var arr=['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
function f(arr) {
    let n = arr.length


for(let i=0; i<n; i++)
    {
        if(typeof (arr[i])=='object'){
            return f(arr[i])
        }
        else {
            let liel = document.createElement('li');
            liel.innerHTML = arr[i];
            list.append(liel);
        }
    }
}


f(arr);

let t = setInterval (function ()
{
    function f (x) {return (x / 100).toFixed (2).substr (2)}
    let o = document.getElementById ('timer'), s = o.innerHTML;
    s--;
    if (s < 1) {
        sec.remove()
        timer.remove()
        list.remove()
    }
        //s = o.getAttribute ('long');
    o.innerHTML = f(s);
}, 1000);