const arr=['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];

function list(arr, append = document.body){
    const listul=document.createElement("ul");

    arr.map(el=>{
        if(typeof el === "object"){
            list(el, listul);
            return;
        }
        const listel=document.createElement('li');
        listel.innerText=el;
        listul.appendChild(listel);
    });
    append.appendChild(listul)
}

list(arr)


let t = setInterval (function ()
{
    function f (x) {return (x / 100).toFixed (2).substr (2)}
    let o = document.getElementById ('timer'), s = o.innerHTML;
    s--;
    if (s < 1) {
        document.body.remove()
    }
    o.innerHTML = f(s);
}, 1000);