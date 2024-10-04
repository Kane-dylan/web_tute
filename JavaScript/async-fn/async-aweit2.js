function blogPostData (){
  return new Promise((reject,resolve)=>{
    setTimeout(() => {
      resolve("Blog is posted")
    }, 2000);
  })
}
function blogCommentData (){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("Blog has a new comment")
    }, 3000);
  })
}

async function blogData(){
  try {
    console.log("Fetching blog data...");
    const postData=await blogPostData()
    const commentData=await blogCommentData()
    console.log("Blog posted successful");
    console.log(postData)
    console.log(commentData);
    
  } catch (error) {
    console.log("this blog cannot be posted , check you internet connection & try again later!!!");
    
  }
}

blogData()