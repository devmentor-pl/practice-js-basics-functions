const time = (new Date()).toLocaleDateString();
console.log(time);
const now = new Date();

function showTime()
{
    console.log( 
        now.getFullYear() + '-',
        now.getMonth() +1 + '-',
        now.getDate() + ' ',
        now.getHours()+ ':',
        now.getMinutes() + ':',
        now.getSeconds() + ''
    )
    
}
showTime();