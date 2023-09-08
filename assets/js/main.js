const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);

xhr.onload = function() {
    if(xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.responseText);
        console.log(res)
    }else{
        console.error('Error!', xhr.status);
    }
}

xhr.onerror = function() {
    console.error('Req Error!');
}

xhr.send();