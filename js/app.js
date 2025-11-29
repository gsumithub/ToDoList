let userToDoList=[]


    let errorElement=document.querySelector(".error")
    let form=document.querySelector("form")
    form.addEventListener("submit",(event)=>{

        event.preventDefault() //preventing the default behaviour of form(submit and reload)

       let userValue=event.target.userToDo.value; 

       let checkmyTODO=userToDoList.find((v)=>v.title.toLowerCase()==userValue.toLowerCase())

       if(userValue==""){
            errorElement.innerHTML="Please fill The Value";
       }
       else if(checkmyTODO){
              errorElement.innerHTML="Your Item added in Todo List";
       }
       else{
            let obj={
                title:userValue,
                isStatus:false
             }
             userToDoList.push(obj)
             errorElement.style.color="green"
             errorElement.innerHTML="Your Item added ";

             displayData()
             event.target.reset()
       }
       
       
      setTimeout(()=>{
            errorElement.innerHTML=''
            errorElement.style.color=""
       },2000)


        
    })



    let ulElement=document.querySelector("ul")

    let displayData=()=>{

        let liItems='' 
        userToDoList.forEach(
            (obj,index)=>{
                liItems+=`<li> <span style="text-decoration: ${obj.isStatus ? 'line-through' : ''} " data-id="${index}"> ${(index+1)+"->"}  ${obj.title} </span> <button data-id="${index}" >Delete</button></li>`
                
            }
        )

        ulElement.innerHTML=liItems

    }

    ulElement.addEventListener("click",(e)=>{
      if(e.target.tagName=="BUTTON"){
        if(confirm("Are you sure want to delete?")){
             let delIndex=e.target.getAttribute("data-id") //0
              userToDoList.splice(delIndex,1) 
               
             displayData()
            //  function showMessage(text, color) {
            //     errorElement.innerHTML = text;
            //     errorElement.style.color = color;

            //     setTimeout(() => {
            //         errorElement.innerHTML = "";
            //         errorElement.style.color = "";
            //     }, 2000);
            // }
            
        }
        
      }

       if(e.target.tagName=="SPAN"){
        if(confirm("Are you sure want to change Status?")){
             let delIndex=e.target.getAttribute("data-id") //0
            
             userToDoList[delIndex].isStatus=  ! userToDoList[delIndex].isStatus
             displayData()
        }
        
      }
        
    })