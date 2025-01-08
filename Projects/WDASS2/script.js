document.getElementById("news1").addEventListener("click",function () {
    let hide = document.getElementById("hidden1")
    if(hide.classList.contains("hide")){
        hide.classList.remove("hide")
        document.getElementById("news-img1").style.display ="none"
        document.getElementById("news-title1").style.display = "none";
    }
    else{
        hide.classList.add("hide")
        document.getElementById("news-img1").style.display = "block";
        document.getElementById("news-title1").style.display = "flex"
    } 
})

document.getElementById("news2").addEventListener("click",function () {
    let hide = document.getElementById("hidden2")
    if(hide.classList.contains("hide")){
        hide.classList.remove("hide")
        document.getElementById("news-img2").style.display ="none"
        document.getElementById("news-title2").style.display = "none";
    }
    else{
        hide.classList.add("hide")
        document.getElementById("news-img2").style.display = "block";
        document.getElementById("news-title2").style.display = "flex"
    } 
})

document.getElementById("news3").addEventListener("click",function () {
    let hide = document.getElementById("hidden3")
    if(hide.classList.contains("hide")){
        hide.classList.remove("hide")
        document.getElementById("news-img3").style.display ="none"
        document.getElementById("news-title3").style.display = "none";
    }
    else{
        hide.classList.add("hide")
        document.getElementById("news-img3").style.display = "block";
        document.getElementById("news-title3").style.display = "flex"
    } 
})

document.getElementById("submit").addEventListener("click",function(){
    if(document.getElementById("fname").value != "" && document.getElementById("lname").value != "" && document.getElementById("email").value != ""){
    alert("Thank you for your feedback")
    document.reload()
}
})

document.getElementById("cntus").addEventListener("click",function(){
    document.getElementById("form").classList.remove("hide")
    document.getElementById("cntus").classList.add("hide")
})