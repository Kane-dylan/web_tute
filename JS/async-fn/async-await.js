function userData() {
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve({name:"jack", url:"nnn.jackson.com"})
    }, 3000);
   })
}

async function getUserData(){
  try {
    console.log("Fetching user data.....");
    const fetchUserData=await userData()    
    console.log("user data fetched successfully");
    
    console.log("User data:",fetchUserData);
    
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData()