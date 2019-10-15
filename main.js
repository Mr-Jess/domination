function imageSourceToAdd(id,url){
    const newImage = document.querySelector(id)
    newImage.src = url
}

const newUrl = 'https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg?pubId=1078702682&videoId=6004956161001'
imageSource('#image-1',newUrl);
const newUrl2 = ""
imageSource('#image-2',newUrl);
const newUrl3 = ""
imageSource('#image-3',newUrl);
