$(document).ready(function ($) {
    $('.count').counterUp({
        delay: 10,
        time: 3000
    });
});
mybutton=document.getElementById("myBtn");
window.onscroll=function(){scrollFunction()};
function scrollFunction(){
  if (document.body.scrollTop>100 || document.documentElement.scrollTop>100) {
    mybutton.style.display="block";
  }
  else{
    mybutton.style.display="none";
  }
}
//  When the user click n the button, scroll to the top of the document
function topFunction(){
  document.body.scrollTop=0; //for safari
  document.documentElement.scrollTop=0;
}


// init();
// function init(){
//   var url="https://api.covid19api.com/world/total";
//   var data="";
//   $.get(url,function(data){
//     data=`
//     <td style="background:yellow;">${data.TotalConfirmed}</td>
//     <td style="background:green">${data.TotalRecovered}</td>
//     <td style="background:red">${data.TotalDeaths}</td>
//     `
//    $("#data").html(data);
//   });
// };
// function refreshData(){
//   clearData()
//   init()
// }
// function clearData(){
//   $("#data").empty();
// };
function fetch(){
  $.get("https://api.covid19api.com/summary",
  function (data){
      console.log(data['Countries'].length);
      console.log(data);
      var tbval=document.getElementById("tbval");
      for(var i=1;i<(data['Countries'].length);i++){
          var x=tbval.insertRow();
          x.insertCell(0);
          tbval.rows[i].cells[0].innerHTML=data['Countries'][i-1]['Country'];
          tbval.rows[i].cells[0].style.background="#7a4a91";
          tbval.rows[i].cells[0].style.color="#fff";
          x.insertCell(1);
          tbval.rows[i].cells[1].innerHTML=data['Countries'][i-1]['TotalConfirmed'];
          tbval.rows[i].cells[1].style.background="yellow";
          x.insertCell(2);
          tbval.rows[i].cells[2].innerHTML=data['Countries'][i-1]['TotalRecovered'];
          tbval.rows[i].cells[2].style.background="green";
          x.insertCell(3);
          tbval.rows[i].cells[3].innerHTML=data['Countries'][i-1]['TotalDeaths'];
          tbval.rows[i].cells[3].style.background="red";
          x.insertCell(4);
          tbval.rows[i].cells[4].innerHTML=data['Countries'][i-1]['NewConfirmed'];
          tbval.rows[i].cells[4].style.background="yellow";
          x.insertCell(5);
          tbval.rows[i].cells[5].innerHTML=data['Countries'][i-1]['NewRecovered'];
          tbval.rows[i].cells[5].style.background="green";
          x.insertCell(6);
          tbval.rows[i].cells[6].innerHTML=data['Countries'][i-1]['NewDeaths'];
          tbval.rows[i].cells[6].style.background="red";
      }
  }
  );
}
// Form validation

function validation() {
  var username=document.getElementById("username").value;
  var email=document.getElementById("email").value;
  var number=document.getElementById("number").value;
  if(username==""){
      document.getElementById('name').innerHTML="**Please fill the username field";
      return false;
  };
  if((username.length<=2) ||(username.length>20)){
      document.getElementById("name").innerHTML="**Username should we between 2 and 20";
      return false;
  };
  if (!isNaN(username)) {
      document.getElementById("name").innerHTML="** Only characters are allowed";
      return false;   
  };  
  if(email==""){
      document.getElementById('emailId').innerHTML="**Please fill the Email Id field";
      return false;
  };
  if(email.indexOf('@')<=0){
      document.getElementById("emailId").innerHTML="** invalid position of @ ";
      return false;
  };
  if ((email.charAt(email.length-4) !='.' ) && (email.charAt(email.length-3)!='.')) {
      document.getElementById("emailId").innerHTML="** Invalid domain name";
      return false;
      
  };
  if(number==""){
      document.getElementById('phone').innerHTML="**Please fill the mobile number field";
      return false;
  };
  if (isNaN(number)) {
      document.getElementById("phone").innerHTML="** Only No.are allowed";
      return false;
      
  };
  if (number.length!=10) {
      document.getElementById("phone").innerHTML="** Mobile no should be 10 digits ";
      return false;
  };
};

