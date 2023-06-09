import Echo from 'laravel-echo';
import './bootstrap';




const channel = Echo.channel('public.playground.1');


console.log('adsasddsad');

channel.subscribed(()=>{

    console.log('subscribed !!!');

})