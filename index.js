
let list = document.getElementById('list')
let dob = document.getElementById("dob")
let address = document.getElementById('Address')
let allargy = document.getElementById('allargy')
let comment = document.getElementById('comment')
// fetch request 
 let request = async()=>{
     let req = await fetch('http://localhost:3000/patient')
     let res = await req.json()
     console.log(res)
     res.forEach(element => {
         let li = document.createElement('li')
         let dltbtn = document.createElement('button')
         dltbtn.innerHTML="Delete"
         li.innerHTML = element.name
         
         list.appendChild(li)
         li.addEventListener('click',()=>{
             dob.innerHTML = element.DOB
             address.innerHTML=element.address
             allargy.innerHTML = element.allergy
             comment.innerHTML = element.comment

         })



     });
     let newName = document.getElementById('new-name')
     let age = document.getElementById('age')
     let address1 = document.getElementById('address')
     let allargy1 = document.getElementById('allergy')
     let newComment = document.getElementById('commentForm')


     document.getElementById("new-patient").addEventListener('submit', (e)=>{
        e.preventDefault()
        let newPatient = {
            name:newName.value,
            DOB:age.value,
            address:address1.value,
            allergy1:allargy.value,
            comment:newComment.value,
        }
        handlePatient(newPatient)
       // renderPatient(newPatient)
    })


 }

 const handlePatient = async(newPatient)=>{
    let req1 = await fetch('http://localhost:3000/patient',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(newPatient),
    })
    let res1 = req1.json()
    console.log(res1)
    
}
 request()