function imageSourceToAdd(id,url){
    const newImage = document.querySelector(id)
    newImage.src = url
}

const newUrl = 'https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg?pubId=1078702682&videoId=6004956161001'
imageSource('#image-1', newUrl);
const newUrl2 = "https://images-na.ssl-images-amazon.com/images/I/71Ls63RJxeL._SL1500_.jpg"
imageSource('#image-2', newUrl);
const newUrl3 = "https://dw8stlw9qt0iz.cloudfront.net/G7E0aSNJuMsOodsc2glkjsR6Wt8=/fit-in/800x450/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/landscape/standard/f83f2ef0-098f-45a4-b14d-d9a39d9b53fa.jpg"
imageSource('#image-3', newUrl);


