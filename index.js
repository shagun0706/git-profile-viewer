let button=document.querySelector('#btn');

async function fetching(username){
    let response=await fetch(`https://api.github.com/users/${username}`);
    let result=await response.json();
    // console.log(result)
    let seconddiv=document.querySelector('.middle');
    // seconddiv.style.backgroundColor = "aqua";


    seconddiv.innerHTML=`
       
        <div class="firstpart">
            <div class="circle">
                <img src=${result.avatar_url} alt="image">
            </div>
            <div class="part1">
                <p>${result.name}</p>
            <p>${result.bio}</p>
            </div>
          
        </div>

        <div class="secondpart">
         <div class="spart1">
             <div class="sp1">
            <p>follower</p>
            <p>${result.followers}</p>
           </div>
           <div class="sp2">
             <p>following</p>
            <p>${result.following}</p>
           </div>
           <div class="sp3">
             <p>repo</p>
            <p>${result.public_repos}</p>
           </div>
         </div >
         <div class="footer">
          <a href="${result.html_url}" target="_blank">
            <button class="fb" >View Profile</button>
            </a>
         </div>
        
           </div>

    `
}

function clicking(){
    let tasktext=document.querySelector("#username");
    // console.log(tasktext.value);
     let userid=tasktext.value;
     fetching(userid);


}
button.addEventListener("click",clicking);
// let button2=document.querySelector(".fb");
// button2.addEventListener("click",newpage);


// function newpage(){
//     document.open()
//     let para=document.createElement('p');
//         para.textContent="hello ,You are on right path";
//         fetching();
  
// }




