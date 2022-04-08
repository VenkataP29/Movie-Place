const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

//console.log(arrows);
//console.log(movieLists);

arrows.forEach((arrow,index) => {
		const itemNumber = movieLists[index].querySelectorAll("img").length;
		let countClicker =0;
		arrow.addEventListener("click",()=>{
		const ratio = Math.floor(window.innerWidth/270);
		countClicker++;
		if(itemNumber - (4+countClicker) + (4 - ratio) >= 0){
			movieLists[index].style.transform = `translateX(${movieLists[index].computedStyleMap().get("transform")[0].x.value-300}px)`;
		}
		else{
			movieLists[index].style.transform = `translateX(0)`;
			countClicker=0;
		}
	});
	//console.log(movieLists[index].computedStyleMap().get("transform")[0].x.value);
	//console.log(movieLists[index].querySelectorAll('img').length);
	console.log(window.innerWidth/270);
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.sidebar-menu-item,.toggle");

ball.addEventListener("click",()=>{
	items.forEach(item => {
		item.classList.toggle("active");
	})
	ball.classList.toggle("active");
});

