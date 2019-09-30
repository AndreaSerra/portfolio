// JS andreaserra.xyz //
// MENU TOGGLE
	var header = document.getElementById('header');
	var headerbackground = document.getElementById('header-background');
	var headerovl = document.getElementById('header-ovl');
	var navbutton= document.getElementById('navbutton');
	var navlabel = document.getElementById('navlabel');
	var hamb1 = document.getElementById('hamb1');
	var hamb2 = document.getElementById('hamb2');
	var hamb3 = document.getElementById('hamb3');
	var navlist = document.getElementById('navlist');
	var menulink1 = document.getElementById('menulink1');
	var menulink2 = document.getElementById('menulink2');
	var menulink3 = document.getElementById('menulink3');
	var menulink4 = document.getElementById('menulink4');



	var closeMenu = function() {
		headerbackground.classList.remove('header-background-open');
		header.classList.remove('headeropen');
		headerovl.classList.add('header-ovl-hide');
		hamb1.classList.remove('hamb-x1');
		hamb2.classList.remove('hamb-x2');
		hamb3.classList.remove('hamb-x3');
		navlist.classList.add('hide');
		menulink1.classList.add('hide');
		menulink2.classList.add('hide');
		menulink3.classList.add('hide');
		menulink4.classList.add('hide');
		navlabel.classList.add('hide');
		setTimeout(function(){navlabel.innerHTML = "open menu"; navlabel.classList.remove('hide');}, 600);
		console.log('closed');
	}
	var openMenu = function() {
		setTimeout(function(){
		headerbackground.classList.add('header-background-open');
		header.classList.add('headeropen');
		headerovl.classList.remove('header-ovl-hide');
		hamb1.classList.add('hamb-x1');
		hamb2.classList.add('hamb-x2');
		hamb3.classList.add('hamb-x3');
		navlabel.classList.add('hide');
	}, 100);
		setTimeout(function(){
			navlabel.innerHTML = "close menu";
			navlabel.classList.remove('hide');
			navlist.classList.remove('hide');
			menulink1.classList.remove('hide');
			menulink2.classList.remove('hide');
			menulink3.classList.remove('hide');
			menulink4.classList.remove('hide');
			}, 600);
		console.log('open');
	}
	navbutton.addEventListener("click", function() {
		//CHIUDI
		if (header.classList.contains('headeropen')){
			closeMenu();
		}
		//APRI
		else {
			openMenu();
		}

	});

	headerovl.addEventListener("click", function() {
		//CHIUDI
		if (header.classList.contains('headeropen')){
			closeMenu();
		}

	});
// MENU TOGGLE
