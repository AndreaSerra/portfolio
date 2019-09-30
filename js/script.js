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



// SCROLLDOWN
var arrow = document.getElementById('arrowicon');

	arrow.addEventListener("click", function() {
		document.getElementById('scroll').scrollIntoView({behavior: "smooth", block: "start"});
		console.log('scroll');
	});
// SCROLLDOWN



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



// ACCORDION
	var accordion1 = document.getElementById('accordion1');
	var label1 = document.getElementById('readmore-label1');
	var ico1 = document.getElementById('readmore-ico1');
	var text1 = document.getElementById('accordion-text1');
	var accordion2 = document.getElementById('accordion2');
	var label2 = document.getElementById('readmore-label2');
	var ico2 = document.getElementById('readmore-ico2');
	var text2 = document.getElementById('accordion-text2');
	var accordion3 = document.getElementById('accordion3');
	var label3 = document.getElementById('readmore-label3');
	var ico3 = document.getElementById('readmore-ico3');
	var text3 = document.getElementById('accordion-text3');

	var closeAccordion1 = function() {
		accordion1.classList.remove('accordion-open');
		label1.classList.add('hide');
		text1.classList.add('hide');
		ico1.classList.remove('ico-x');
		setTimeout(function(){label1.innerHTML = "read more"; label1.classList.remove('hide');}, 600);
		console.log('accordion closed');
	}
  var openAccordion1 = function() {
		//document.getElementById('subtl1').scrollIntoView({behavior: "smooth"});
		accordion1.classList.add('accordion-open');
		label1.classList.add('hide');
		ico1.classList.add('ico-x');
		setTimeout(function(){label1.innerHTML = "show less"; label1.classList.remove('hide'); text1.classList.remove('hide');}, 600);
		console.log('accordion open');
	}

	var closeAccordion2 = function() {
		accordion2.classList.remove('accordion-open');
		label2.classList.add('hide');
		text2.classList.add('hide');
		ico2.classList.remove('ico-x');
		setTimeout(function(){label2.innerHTML = "read more"; label2.classList.remove('hide');}, 600);
		console.log('accordion closed');
	}
  var openAccordion2 = function() {
		//accordion1.scrollIntoView({behavior: "smooth"});
		accordion2.classList.add('accordion-open');
		label2.classList.add('hide');
		ico2.classList.add('ico-x');
		setTimeout(function(){label2.innerHTML = "show less"; label2.classList.remove('hide'); text2.classList.remove('hide');}, 600);
		console.log('accordion open');
	}

	var closeAccordion3 = function() {
		accordion3.classList.remove('accordion-open');
		label3.classList.add('hide');
		text3.classList.add('hide');
		ico3.classList.remove('ico-x');
		setTimeout(function(){label3.innerHTML = "read more"; label3.classList.remove('hide');}, 600);
		console.log('accordion closed');
	}
  var openAccordion3 = function() {
		//accordion2.scrollIntoView({behavior: "smooth"});
		accordion3.classList.add('accordion-open');
		label3.classList.add('hide');
		ico3.classList.add('ico-x');
		setTimeout(function(){label3.innerHTML = "show less"; label3.classList.remove('hide'); text3.classList.remove('hide');}, 600);
		console.log('accordion open');
	}

	accordion1.addEventListener("click", function() {
		//CHIUDI
		if (accordion1.classList.contains('accordion-open')){
			closeAccordion1();
		}
		//APRI
		else {
			openAccordion1();
		}

		//CHIUDI 2 se aperto
		if (accordion2.classList.contains('accordion-open')){
			setTimeout(function(){
				closeAccordion2();
			}, 1200);
		}
		//CHIUDI 3 se aperto
		if (accordion3.classList.contains('accordion-open')){
			setTimeout(function(){
				closeAccordion3();
			}, 1200);
		}
	});

	accordion2.addEventListener("click", function() {
		//CHIUDI
		if (accordion2.classList.contains('accordion-open')){
			closeAccordion2();
		}
		//APRI
		else {
			openAccordion2();
		}

		//CHIUDI 1 se aperto
		if (accordion1.classList.contains('accordion-open')){
			setTimeout(function(){
				closeAccordion1();
			}, 700);
			setTimeout(function(){
				document.getElementById('subtl1').scrollIntoView({behavior: "smooth", block: "start"});
			}, 1400);
		}
		//CHIUDI 3 se aperto
		if (accordion3.classList.contains('accordion-open')){
			setTimeout(function(){
				closeAccordion3();
			}, 1200);
		}
	});

	accordion3.addEventListener("click", function() {
		//CHIUDI
		if (accordion3.classList.contains('accordion-open')){
			closeAccordion3();
		}
		//APRI
		else {
			openAccordion3();
		}

		//CHIUDI 1 se aperto
		if (accordion1.classList.contains('accordion-open')){
			setTimeout(function(){
				closeAccordion1();
			}, 700);
			setTimeout(function(){
				accordion1.scrollIntoView({behavior: "smooth", block: "start"});
			}, 1400);
			//document.getElementById('subtl1').scrollIntoView({behavior: "smooth", block: "start"});
		}
		//CHIUDI 2 se aperto
		if (accordion2.classList.contains('accordion-open')){
			setTimeout(function(){
				closeAccordion2();
			}, 700);
			setTimeout(function(){
				accordion2.scrollIntoView({behavior: "smooth", block: "start"});
			}, 1400);
		}
	});
// ACCORDION


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
