var arr=['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
function f(arr) {


for(let i=0; i<6; i++)
    {
        let liel=document.createElement('li');
        liel.innerHTML = arr[i];
        list.append(liel);
    }
}
f(arr);