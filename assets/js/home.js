// =========
//          for aos initialization ==============================//



// ========
//          show sub skill division =============================//
// showSubSkillsDivision = () =>{
//     if(document.getElementsByClassName('skill-name-head')[0].classList.contains('collapsable-bar-active')==true){
//         var showDiv = document.getElementsByClassName('sub-skills-division');
//         showDiv[0].style.display="none"
//         var addActive = document.getElementsByClassName('skill-name-head');
//         addActive[0].classList.remove('collapsable-bar-active')
//         var toggleDataHidden = document.getElementsByClassName('toggle-data-hidden');
//         toggleDataHidden[0].classList.add('fa-angle-down')
//         console.log(toggleDataHidden[0].classList,"kmskmksksmkmsl")
//         toggleDataHidden[0].classList.remove('fa-angle-up')
//     }
//     else(document.getElementsByClassName('skill-name-head')[0].classList.contains('collapsable-bar-active')==false)
//     {
//     var showDiv = document.getElementsByClassName('sub-skills-division');
//     showDiv[0].style.display="block"
//     var addActive = document.getElementsByClassName('skill-name-head');
//     addActive[0].classList.add('collapsable-bar-active')
//     var toggleDataHidden = document.getElementsByClassName('toggle-data-hidden');
//     console.log(toggleDataHidden[0].classList,"kmskmksksmkmsl")
//     toggleDataHidden[0].classList.remove('fa-angle-down')
//     toggleDataHidden[0].classList.add('fa-angle-up')
//     }
// }
showSubSkillsDivision = () => {

    if(
        document.getElementsByClassName('sub-skills-division')[0].style.display=="block"
    ){
        var showDiv = document.getElementsByClassName('sub-skills-division');
        showDiv[0].style.display="none"
        var addActive = document.getElementsByClassName('skill-name-head');
        addActive[0].classList.remove('collapsable-bar-active')
        var toggleDataHidden = document.getElementsByClassName('toggle-data-hidden');
        toggleDataHidden[0].classList.add('fa-angle-down')
        console.log(toggleDataHidden[0].classList,"kmskmksksmkmsl")
        toggleDataHidden[0].classList.remove('fa-angle-up')
    }
    if(
        document.getElementsByClassName('sub-skills-division')[0].style.display=="none" || 
        document.getElementsByClassName('sub-skills-division')[0].style.display==""
    ){  
        alert(document.getElementsByClassName('sub-skills-division')[0].style.display)
        var showDiv = document.getElementsByClassName('sub-skills-division');
        showDiv[0].style.display="block"
        var addActive = document.getElementsByClassName('skill-name-head');
        addActive[0].classList.add('collapsable-bar-active')
        var toggleDataHidden = document.getElementsByClassName('toggle-data-hidden');
        console.log(toggleDataHidden[0].classList,"kmskmksksmkmsl")
        toggleDataHidden[0].classList.remove('fa-angle-down')
        toggleDataHidden[0].classList.add('fa-angle-up')
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}