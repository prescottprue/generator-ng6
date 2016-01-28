import index from './index.html';
import './app/app';

var html = document.createElement('html');
html.innerHTML = index;
var head = html.getElementsByTagName('head')[0].innerHTML;
var body = html.getElementsByTagName('body')[0].innerHTML;

document.head.innerHTML =document.head.innerHTML + head ;
document.body.innerHTML =document.body.innerHTML + body ;
