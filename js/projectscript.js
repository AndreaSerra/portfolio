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
	var fab = document.getElementById('fab');



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
		setTimeout(function(){navlabel.innerHTML = "open menu"; navlabel.classList.remove('hide'); fab.classList.remove('fab-zindex');}, 600);
		console.log('closed');
	}
	var openMenu = function() {
		fab.classList.add('fab-zindex');
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




// GET IN TOUCH TOGGLE
	var fab = document.getElementById('fab');
	var fabicon = document.getElementById('fabicon');
	var fablabel = document.getElementById('fablabel');
	var contact = document.getElementById('contact');
	var contactovl = document.getElementById('contact-ovl');

	var openFAB = function() {
		contactovl.classList.remove('contact-ovl-bringback');
		contactovl.classList.remove('contact-ovl-hide');
		fab.classList.add('fabopen');
		fablabel.classList.add('fablabelopen');
		fabicon.classList.add('hide');
		setTimeout(function(){
			fabicon.classList.add('fabiconopen');
			contact.classList.remove('hide');
		}, 300);
		setTimeout(function(){
			fabicon.classList.remove('hide');

		}, 400);
		console.log('contact open');
	}
	var closeFAB = function() {
		fabicon.classList.add('hide');
		contact.classList.add('hide');
		setTimeout(function(){
			fablabel.classList.remove('fablabelopen');
			fabicon.classList.remove('fabiconopen');
			fab.classList.remove('fabopen');
			contactovl.classList.add('contact-ovl-hide');
		}, 300);
		setTimeout(function(){

			fabicon.classList.remove('hide');
		}, 400);
		setTimeout(function(){
			contactovl.classList.add('contact-ovl-bringback');
		}, 800);
		console.log('contact closed');
	}

	fab.addEventListener("click", function() {
		//CHIUDI
		if (fab.classList.contains('fabopen')){
			closeFAB();
		}
		//APRI
		else {
			openFAB();
		}

});

	contactovl.addEventListener("click", function() {		//CHIUDI
		if (fab.classList.contains('fabopen')){
			closeFAB();
		}
	});
// GET IN TOUCH TOGGLE




// FOOTER
	window.onscroll = function(ev) {
		console.log('event');
			if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - '100')) {
						fab.classList.add('fabfooter');
						fablabel.classList.add('fablabelfooter');
			}
			else{
				fab.classList.remove('fabfooter');
				fablabel.classList.remove('fablabelfooter');
			}
	};
// FOOTER
