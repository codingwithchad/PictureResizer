//URLurl: 'https://gbb8xz2947.execute-api.us-east-1.amazonaws.com/example_test'
/*
'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
//curl --request POST https://gbb8xz2947.execute-api.us-east-1.amazonaws.com/example_test/headersresource -H "Content-Type: application/json" -H "header1: API Gateway and AWS Lambda" -X POST -d "{\"API_body\": \"This is the body\"}" 
*/
//https://nodejs.org/api/http.html

//http://www.codedodle.com/2016/10/nodejs-image-uploader-using-express-and.html

//try this
//https://code.tutsplus.com/tutorials/uploading-files-with-ajax--net-21077
//https://github.com/krisgholson/serverless-thumbnail

$(document).ready(function(){
    $( '#uploadForm').submit(function( event ){
        event.preventDefault();

        let myData = $('#uploadForm').serializeArray();
        
        
        let fileData = $('#picfile')[0].files[0];
        if(fileData.length === 0 || fileData.length >= 2){
            alert("must upload 1 image");
        }
        console.log(fileData);
        
        let base64 = previewFile(fileData);
        console.log(base64);

        let acceptType = {
            binary : ["image/png", "image/jpeg", "image/gif"]
        };
        fileData.coachid = myData[0].value;
        //console.log(fileData);

              
       
        
        $.ajax({
            url : '',//https://gbb8xz2947.execute-api.us-east-1.amazonaws.com/coach_pic',
            Accept: "image/png", 
            type: 'post',
            processData: false,
            data: fileData, 
            headers: {
               'Content-Type': 'image/png', 
               
            },
            contentType: false, 
            xhr : function(){
                let xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', function(event){
                    let progressBar = $('.progress-bar');

                    if(event.lengthComputable){
                        let percent = (event.loaded / event.total) * 100;
                        progressBar.width(percent + '%');
                        if(percent === 100){
                            progressBar.removeClass('active');
                        }
                    }
                });
                return xhr;
            }
            
            
        }).done(isSuccess).fail(function (xhr, status){
            console.log("status: " + status);
        });
        function isSuccess(data){
                       //console.log("data: " + data);
            //$('#response').append('<p> uploaded picture for coach ID: ' + data.value + '</p>');
    }
    })
});

function previewFile(file) {
  
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    //preview.src = reader.result;
  }, false);

  if (file) {
    return reader.readAsDataURL(file);
  }
}




    







 

