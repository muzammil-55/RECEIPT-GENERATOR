const date = document.getElementById("date");
const item = document.getElementById("item");
const  quantity = document.getElementById("quantity")
const price = document.getElementById("price");
const submit = document.getElementById("submit");
const getdata =document.getElementById("here");
const clear =document.getElementById("clear");

submit.addEventListener("click", function(){
    const dateValue=date.value;
    const itemValue=item.value;
    const quantityValue=quantity.value;
    const priceValue=price.value;
    if(dateValue ==="" ||quantityValue==="" || itemValue ==="" || priceValue ===""){
        alert("enter the values");
        return;
    }
    const newEntrydiv=document.createElement('div');
    newEntrydiv.classList.add("data-entry");

    const datePara =document.createElement('p');
    datePara.textContent=`Date:${dateValue}`;

    

    const itemPara =document.createElement('p');
    itemPara.textContent=`Item:${itemValue}`;

    const quantityPara =document.createElement('p');
    quantityPara.textContent=`Quantity:${quantityValue}`;

    const pricePara =document.createElement('p');
    pricePara.textContent=`Price:${priceValue}`;

    if(here.querySelector('p').textContent==='No data entered yet.'){
        here.innerHTML='';
    }
    newEntrydiv.appendChild(datePara);
    newEntrydiv.appendChild(itemPara);
    newEntrydiv.appendChild(quantityPara);
    newEntrydiv.appendChild(pricePara);
    here.appendChild(newEntrydiv);

    date.value = '';
    item.value = '';
    quantity.value='';
    price.value = '';
});

clear.addEventListener("click", function(){
    here.innerHTML='<p>No data entered yet.</p>';
    date.value = '';
    item.value = '';
    quantity.value='';
    price.value = '';
});

