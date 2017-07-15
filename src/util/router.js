/**
 * Created by sens on 2017/7/15.
 */
import data from "../map.json"

let mapRouter = {
    'article': getArticle,
    'index': getIndex,
    '404' : get404
};
window.onhashchange = function () {
    router();
};

export default function router() {
    let temp = location.hash.match(/^#\/(\w+)\/?.*/);
    let path = '';
    let articleNum;
    if(temp instanceof Array){
        path = temp[1];
        if(path.indexOf('article') === 0){
            articleNum = +path.split('article')[1] || 1;
            path = 'article';
        }
    }
    else {
        path = 'index'
    }
    if( mapRouter[path]){
        mapRouter[path](articleNum);
    }
    else {
        mapRouter['404']();
    }
}

function getArticle(num) {
    let fileName = 'article' + num + '.html';
    let ajax = new XMLHttpRequest();
    ajax.open('get',fileName);
    ajax.onload = function () {
        document.getElementById('j-article').innerHTML = ajax.responseText;
    };
    ajax.send();
}
function getIndex() {
    let fileName = 'list.html';
    let ajax = new XMLHttpRequest();
    ajax.open('get',fileName);
    ajax.onload = function () {
        document.getElementById('j-article').innerHTML = ajax.responseText;
    };
    ajax.send();
}
function get404() {

}