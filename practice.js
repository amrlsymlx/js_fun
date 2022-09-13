const name = 'Sara';
const age = '30';
const job = 'Actor';
const city = 'Kuala Lumpur';
let output;

//Without template literals
output = '<ul>'+
'<li>Name: '+name+'</li>'+
'<li>Age: '+age+'</li>'+
'<li>Job: '+job+'</li>'+
'<li>City: '+city+'</li>'+
'</ul>';

// template literals
output = `<ul>
<li>Name: ${name} </li>
<li>Age: ${age} </li>
<li>Job: ${job} </li>
<li>City: ${city} </li>
</ul>`;


document.body.innerHTML = output;
// console.log(output);