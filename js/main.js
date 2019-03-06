document.getElementById('send').addEventListener('click', function () {
    let inputProduct = document.getElementById('product').value;
    let inputAmount = document.getElementById('amount').value;
    let inputChoice = document.getElementById('choice').value;
    let list = document.querySelector('ol');


    let createListsElement = document.createElement('li');
    createListsElement.setAttribute('class', 'liclass');
    let btn1 = document.createElement('button');
    let textBtn1 = document.createTextNode('X');
    btn1.appendChild(textBtn1);
    btn1.setAttribute('class', 'btnclass');

   createListsElement.innerText = inputProduct + ", " + "amount" + " :" + inputAmount + " " + inputChoice;
   createListsElement.appendChild(btn1);

    list.appendChild(createListsElement);
    

    let showAmount = document.getElementById('show');
    let olNumer = document.querySelector('ol');

    showAmount.value = olNumer.childNodes.length;


//remove one element list
    $(document).ready(function () {
        $('.btnclass').on('click', function () {
            $(this).parent().remove();
             showAmount.value = olNumer.childNodes.length

        })
    
    })


})

//remove all list

$(document).ready(function(){
    $("#delete").click(function(){
        $("li").remove();
        $('#show').val('');
    });
});