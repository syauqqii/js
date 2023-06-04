// bypass by ./0xd1m5
function bypassLink(){
	let jumlah_link = document.querySelector("ul.details-box__list").childElementCount;
	// ganti '#' menjadi '.'
	let base_link   = "https://www#cgtrader#com";
	
	console.log(`\n\n\n [#] Bypass Countdown LINK by ./0xd1m5 @(${base_link})\n\n\n\n`)

	if(jumlah_link > 1){
		for(let i=0; i<jumlah_link; i++){
			// console.log(` [LINK DOWNLOAD] ${document.querySelector("ul.details-box__list").childNodes[i].childNodes[0].textContent}: ${base_link}${document.querySelector("ul.details-box__list").childNodes[i].childNodes[1].childNodes[1].getAttribute("href")}`);	
			let url = `${base_link}${document.querySelector("ul.details-box__list").childNodes[i].childNodes[1].childNodes[1].getAttribute("href")}`
			window.open(url, '_blank');
		}
	} else {
		// console.log(` [LINK DOWNLOAD] ${document.querySelector("ul.details-box__list").childNodes[0].childNodes[0].textContent}: ${base_link}${document.querySelector("ul.details-box__list").childNodes[0].childNodes[1].childNodes[1].getAttribute("href")}`);		
		let url = `${base_link}${document.querySelector("ul.details-box__list").childNodes[0].childNodes[1].childNodes[1].getAttribute("href")}`
		window.open(url, '_blank');
	}
};

clear();
bypassLink();
