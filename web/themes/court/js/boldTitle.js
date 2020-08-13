function boldTitle() {
	let tags = document.getElementsByClassName('tags');

	for(let i = 0; i < tags.length; i++){
		if(tags[i].innerText.indexOf('重要') !== -1){
			tags[i].previousElementSibling.classList.add('font-weight-bold');
		}
	}
}

boldTitle();
