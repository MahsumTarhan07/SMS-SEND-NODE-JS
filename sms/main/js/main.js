
const numberInput = document.getElementById('phone');
const messageInput = document.getElementById("message");
const button = document.getElementById("button");


button.addEventListener('click', send);

function  send() {
    const number = numberInput.value;
    const message = messageInput.value;

    fetch('/', {
        method: 'post',
        headers: {
            'Centent-type' : 'application/json' 
        },
        body: JSON.stringify({number:number , text: text})
    })
    .then(
        function(res){
            console.log(res);
        }
    ).then(function(err){
        console.log(err);
    })
}
