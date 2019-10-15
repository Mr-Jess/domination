//1
function addImagineUrl(id,url){
    const image = document.querySelector(id);
    image.src = url;
}

addImagineUrl('#image-1', 'https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg?pubId=1078702682&videoId=6004956161001');
addImagineUrl('#image-2', 'https://dw8stlw9qt0iz.cloudfront.net/G7E0aSNJuMsOodsc2glkjsR6Wt8=/fit-in/800x450/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/landscape/standard/f83f2ef0-098f-45a4-b14d-d9a39d9b53fa.jpg');
addImagineUrl('#image-3', 'https://www.thoughtco.com/thmb/x6rKrEfzJsiP-wHxgfCEvAwLg4E=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Irritator-58d292465f9b581d72de1f9c.jpg');

//2
function strikeThroughFirstItem() {
    const firstItem = document.querySelector('ul#arguments > li:first-child');
    firstItem.style.textDecoration = 'line-through';
}
strikeThroughFirstItem();

//3
function removeLastLi() {
    const lastLi = document.querySelector('ul > li:last-child');
    lastLi.remove();
    //BELOW EXAMPLES OF OTHER WAYS TO WRITE THIS EXERCISE;
    //const argumentsList = document.querySelector('ul#arguments').lastElementChild.childElementCount.toString();
    //const lastLi = argumentsList.lastElementChild;
    //const lastLi = Document.querySelector('ul#arguments');
}
removeLastLi();

//4
function addArgument(element) {
    //Quicker way = document.querySelector('ul#arguments')
    const arguments = document.querySelector('ul#arguments');
    arguments.appendChild(element);
}

//5
const newImage = document.createElement('img');
newImage.src = 'https://www.thoughtco.com/thmb/x6rKrEfzJsiP-wHxgfCEvAwLg4E=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Irritator-58d292465f9b581d72de1f9c.jpg';
newImage.style.height = '60px';

addArgument(newImage);

//6
function makeSmall(image) {
    image.style.height = '30px';
}

const image1 = document.querySelector('#image-1');
makeSmall(image1);

//7
function makeInvisible(element) {
    element.className = 'invisible';
}
const disappearingTextFelid = document.querySelector('input');
makeInvisible(disappearingTextFelid);

//8
function changeFontSize(element, fontSize) {
    element.style.fontSize = 'fontSize';
}
const thing2 = document.querySelector('#thing-2');
changeFontSize(thing2, '5px');

//9
function makeToDo(toDoText) {
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoText;
    return newToDo;
}
const newToDo = makeToDo('hello');
addToArgumentsList(newToDo);

//10
function makeHeader(text, size) {
    const header = document.createElement('h' + size.toString);
    header.innerText = text;
    return header;
}
