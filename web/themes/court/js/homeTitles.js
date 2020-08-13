function newBadge() {
	let date = document.getElementsByClassName('date');
	let now = new Date;
	let badge = document.createElement('span');
	badge.className = "badge badge-danger new-icon";
	badge.innerText = "NEW";
	for(let i = 0; i < date.length; i++){
		let then = new Date(date[i].innerText.trim());
		let hours = (now - then) / 3600000;
		console.log(now);
		console.log(then);
		console.log(hours);
		console.log(date[i]);
		if(hours < 48){
			date[i].parentNode.appendChild(badge.cloneNode(true));
		}
	}
}

function boldTitle() {
	let tags = document.getElementsByClassName('tags');

	for(let i = 0; i < tags.length; i++){
		if(tags[i].innerText.indexOf('重要') !== -1){
			tags[i].previousElementSibling.classList.add('font-weight-bold');
		}
	}
}


window.onload = function(){
  boldTitle();
  newBadge();
};
