
export default class PostComments{
  
   static postComment = (id,username,comment)=>{
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"item_id":${id},"username":${username},"comment":${comment}}`
      };
      
      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BQIepMoeO6ImEkauJ2th/comments/id', options)
        .then(response => response.json())
   }
    
}

  