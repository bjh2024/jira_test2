document.querySelectorAll(".role_input_item .role_input_lnb_item").forEach(function(item, idx){
	item.addEventListener("mousedown", function(e){
		const img = this.children[0]
		const span = this.children[1];
		
		const parentTag = e.target.closest(".role_input_item").children;
		console.log(document.querySelectorAll(".role_projct_item")[1]);
		parentTag[0].setAttribute("src", img.getAttribute("src"));
		parentTag[2].placeholder = span.innerText;
		
		switch(span.innerText){
			case "프로젝트":
				document.querySelectorAll(".role_projct_item")[idx].classList.add("show");
				break;
		}
		
	})
});