 const apikey =`bf906c1a8254bd26fdca08a3fd8de6ef`;

 //local storage

 function storeData( key,data) {
    if (localStorage.getItem(key) ===null){
        localStorage.setItem(key, json.stringify(data));
    }
 }