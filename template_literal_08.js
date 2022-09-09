const name = 'sara';
const age = 30;
const job = 'actor';
const city = 'Kuala Lumpur';

let output;

// without template literals
output = '<ul>'+
'<li>Name:'+name+'</li>'+
'<li>Age: '+age+ '</li>'+
'<li>Job: '+job+'</li>'+
'<li>City: '+city+'</li>'+
'</ul>';

output =`<ul>
<li>Name: &{name}</li>
<li>Age: &{age}</li>
<li>Job: &{job}</li>
<li>City: &{city}</li>
</ul>`;






document.body,innerHTML=output;