function myCtrl($scope, $timeout) {    
    AWS.config.update({
  accessKeyId: 'AKIAJZBKK3KTBVIZWCPA', secretAccessKey: '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'});
    AWS.config.region = "ap-south-1";

var bucket = new AWS.S3({params: {Bucket: 'chintamaninagar.com'}});

    bucket.getObject({Key: 'happy-face.jpg'},function(err,file){

    $timeout(function(){
        $scope.s3url = "data:image/jpeg;base64," + encode(file.Body);
    },1);
});
}

function encode(data)
{
    var str = data.reduce(function(a,b){ return a+String.fromCharCode(b) },'');
    return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
}