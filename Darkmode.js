javascript: if (typeof all === 'undefined') {let all = [];}all = document.getElementsByTagName('*');for (let i = 0; i < all.length; i++) { if(typeof all[i].style !== 'undefined'){all[i].style.fontFamily = "Lobster";}}document.getElementsByTagName("html")[0].style.filter = "invert()";if (typeof elems === 'undefined') {let elems = [];}elems = document.querySelectorAll(" a, img, video");for (let j = 0 ; j < elems.length; j++) {if((elems[j].nodeName == "A" && (elems[j].style.background != "" || elems[j].style.backgroundImage != "")) || elems[j].nodeName != "A"){elems[j].style.filter = "invert()";}}void 0;
