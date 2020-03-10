const arr=['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];

function list(arr){

    let listt = arr.map(el => `<li>${el}</li>`)
    listt = `<ul>${listt.join("")}</ul>`
    document.body.innerHTML +=listt
}


list(arr)


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
    o.innerHTML = f(s);
}, 1000);