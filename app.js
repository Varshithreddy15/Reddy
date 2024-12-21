let fname = Event.target.first_name.value;
let lname = Event.target.last_name.value;
let age = Event.target.age.value;


if(fname==''){
   alert('please enter first name');
   return
}
if(lname==''){
    alert('please enter last name');
    return
 }
 if(age==''){
    alert('please enter age');
    return
 }
 console.log(fname,lname,age);
 FormData.reset()
})