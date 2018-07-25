function initDragAndDrop(empty, fill){
	fill = document.querySelectorAll(fill);
	empties = document.querySelectorAll(empty);
	var currentitem = null; var prevPos = null; child = null;

	fill.forEach(function(element){
		element.addEventListener('dragstart', dragStart);
		element.addEventListener('dragend', dragEnd);
		element.addEventListener('dragover', dragElementOver);
	});

	function dragElementOver(){
		child = this;
	}

	for (const empty of empties){
		empty.addEventListener('dragover', dragOver);
		empty.addEventListener('dragenter', dragEnter);
		empty.addEventListener('dragleave', dragLeave);
		empty.addEventListener('drop', dragDrop);
	}

	function dragStart(){
		this.className += ' hold';
		setTimeout( () => (this.className = 'invisible'), 0);
		currentitem = this;
		prevPos = this.parentNode;
	}

	function dragEnd(){
		this.className = 'fill'; child = null; child = null;
	}

	function dragOver(e){
		e.preventDefault();
	}

	function dragEnter(e){
		e.preventDefault();
		this.className += ' hovered';
	}

	function dragLeave(){
		this.className = 'empty';
	}

	function dragDrop(){
		this.className = 'empty';
		if(this.childNodes[0] && child != null){
			this.append(currentitem);
			prevPos.append(child); child = null;
		}
		else{
			this.append(currentitem); child = null;
		}
		
	}

}


