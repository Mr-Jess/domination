function addImagineUrl(id,url){
    const image = document.querySelector(id)
    image.src = url
}

addImagineUrl('#image-1', 'https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg?pubId=1078702682&videoId=6004956161001')
addImagineUrl('#image-2', 'https://dw8stlw9qt0iz.cloudfront.net/G7E0aSNJuMsOodsc2glkjsR6Wt8=/fit-in/800x450/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/landscape/standard/f83f2ef0-098f-45a4-b14d-d9a39d9b53fa.jpg')
addImagineUrl('#image-3', 'https://www.thoughtco.com/thmb/x6rKrEfzJsiP-wHxgfCEvAwLg4E=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Irritator-58d292465f9b581d72de1f9c.jpg')



