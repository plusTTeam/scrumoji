!function(){var a=document.getElementById("scrumoji-list");a.addEventListener("click",function(b){console.log("hey", b.target);
  if(b.target.closest(".scrumoji").contains(b.target))
  {console.log("match");b.target.classList.add("active"),b.target.classList.remove("active");var c=new NotificationFx({message:"<p>Hey! scrumoji copied to the clipboard 😜</p>",layout:"growl",effect:"scale",type:"notice",onClose:function(){a.disabled=!1}});c.show(),this.disabled=!0}}
)}();
