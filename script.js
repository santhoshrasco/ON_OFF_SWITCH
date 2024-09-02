function switchoff(){
document.getElementById("bulbImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
document.getElementById("catImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
document.getElementById("switchStatus").textContent="Switched off"
document.getElementById("offswitch").style.backgroundColor="#cbd2d9";
document.getElementById("onswitch").style.backgroundColor="#22c55e";
}





function switchon(){
document.getElementById("bulbImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
document.getElementById("catImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
document.getElementById("switchStatus").textContent="Switched On";
document.getElementById("offswitch").style.backgroundColor="#e12d39";
document.getElementById("onswitch").style.backgroundColor="#cbd2d9";
}