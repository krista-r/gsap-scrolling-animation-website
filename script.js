gsap.set('.text:not(:first-child)', { autoAlpha: 0 });

	var number = 0;
	var ableToScroll = true;

	function scrollUp( pNumber )
	{
		ableToScroll = false;
		setTimeout( function(){
			ableToScroll = true;
		}, 500 );

		var tlUp = gsap.timeline({});
		tlUp.fromTo(`div[data-slide="${pNumber}"]`, 1, { autoAlpha: 0, y: 30 }, {  autoAlpha: 1, y: 0,  ease: "sine.inOut" }, 0);
		tlUp.to(`div[data-slide="${pNumber+1}"]`, 1, { autoAlpha: 0, y: -30,  ease: "sine.inOut" }, 0);
	}

	function scrollDown( pNumber )
	{
		ableToScroll = false;
		setTimeout( function(){
			ableToScroll = true;
		}, 500 );

		var tlDown = gsap.timeline({});
		tlDown.to(`div[data-slide="${pNumber-1}"]`, 1, { autoAlpha: 0, y: 30,  ease: "sine.inOut" }, 0);
		tlDown.fromTo(`div[data-slide="${pNumber}"]`, 1, { autoAlpha: 0, y: -30 }, { autoAlpha: 1, y: 0,  eae: "sine.inOut" }, 0);
	}

	window.addEventListener('wheel', function(e){
		if( !ableToScroll )
		{
			return;
		}

		if(e.deltaY === 1 && number < 4){

			number++;

			scrollDown( number );

		}else if(e.deltaY === -1 && number > 0){

			number--;

			scrollUp( number );
		}

		var pageNumber = number + 1;
		document.getElementById("currentNumber").innerHTML = '<p>' + pageNumber + '/5</p>';
	});

