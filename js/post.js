var j="editButton";
var numberOfLikes=0;
function edit_and_save(){
    var postArea=document.getElementById('postContent');
    if(j=="editButton"){
        j="saveButton";
        postArea.contentEditable="true";
        postArea.style.border="2px solid lightblue";  
        document.getElementById('buttonText').innerHTML="Save";
        document.getElementById('buttonSymbol').setAttribute('class','fa fa-save');
    }
    else if(j=="saveButton"){
        j="editButton";
        postArea.contentEditable="false";
        postArea.style.border="0px solid lightblue";  
        document.getElementById('buttonText').innerHTML="Edit";
        document.getElementById('buttonSymbol').setAttribute('class','fa fa-edit');
    }
}

function likeUpdate(){
    var j=document.getElementById('likeButtonText');
    if(numberOfLikes==0){
        numberOfLikes++;
        j.innerHTML='Liked!';
        document.getElementById('like-updation').innerHTML="1 person likes this!";
    }
    else if(numberOfLikes>0){
        numberOfLikes++;
        j.innerHTML='Liked!';
        document.getElementById('like-updation').innerHTML= numberOfLikes+" people have liked this!";
    }
}

function addComment(taken_comment){
    var commentData=taken_comment.value;
    taken_comment.value="";
    var commentToBeAdded=document.createElement('div');
    commentToBeAdded.setAttribute('class','comment');
    commentToBeAdded.innerHTML=commentData;
    document.getElementById('commentBox').appendChild(commentToBeAdded);
}