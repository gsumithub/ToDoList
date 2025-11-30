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
              errorElement.innerHTML="This Item is already added in the List";
              errorElement.style.color="red";
       }
       else{
            let obj={
                title:userValue,
                isStatus:false
             }
             userToDoList.push(obj)
             errorElement.style.color="green"
             errorElement.innerHTML="Item Added Successfully to the List";

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
                liItems+=`<li> <span style="cursor:pointer; text-decoration: ${obj.isStatus ? 'line-through' : ''} " data-id="${index}" title="Click to change status" > ${(index+1)+"."}  ${obj.title} </span> <button data-id="${index}" >Delete</button></li>`
                
            }
        )

        ulElement.innerHTML=liItems

    }

    ulElement.addEventListener("click",(e)=>{
      if(e.target.tagName=="BUTTON"){
        if(confirm("Are you sure want to delete?")){
            console.log(errorElement);
            
              
              
               
             let delIndex=e.target.getAttribute("data-id") //0
              userToDoList.splice(delIndex,1) 
               
             displayData()
            errorElement.style.color="Orange"
            errorElement.innerHTML="Item Deleted Successfully from the List";
            setTimeout(()=>{
                errorElement.innerHTML=''
                errorElement.style.color=""
           },2000)
               
            
            
        }
        
      }

       if(e.target.tagName=="SPAN"){
        if(confirm("Are you sure want to change this item's status?")){
             let delIndex=e.target.getAttribute("data-id") //0
            
             userToDoList[delIndex].isStatus=  ! userToDoList[delIndex].isStatus
             displayData()
        }
        
      }
        
    })
