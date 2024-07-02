const url = 'http://20.244.56.144/test/register';
const data = {
    companyName: 'Kenguva Group of Companies',
    ownerName: 'Manish Kenguva',
    rollNo: '21481A5453',
    ownerEmail: 'vijayakenguva@gmail.com',
    accessCode: 'XmPwdN'
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('Error:', error);
});
