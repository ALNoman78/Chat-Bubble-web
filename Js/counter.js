let sum = 0;
document.getElementById('add').addEventListener('click', function(){
    const count = document.getElementById('if');
    sum += 1;
    count.innerText = sum;
})
document.getElementById('remove').addEventListener('click', function(){
    sum -= 1;
    const x = document.getElementById('if')
    x.innerText = sum;
})