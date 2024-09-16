document.getElementById('input_field').addEventListener('keyup', function(event){
    const newVariable = event.target.value;
    const deleteBtn = document.getElementById('delete-btn')
    if (newVariable === 'delete') {
        deleteBtn.removeAttribute('disabled')
    }else{
        deleteBtn.setAttribute('disabled' , true)
    }
})

document.getElementById('delete-btn').addEventListener('click', function(){
    const headingElement = document.getElementById('heading-element')
    headingElement.style.display = 'none';
})