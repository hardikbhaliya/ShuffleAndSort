let shuffleAndSort = () => {
    
    const setClassAndText = [{ text:1, class: 'colorGroup1' }, { text:2, class: 'colorGroup2' }, { text:3, class: 'colorGroup3' }, { text:4, class: 'colorGroup2' }, { text:5, class: 'colorGroup3' }, { text:6, class: 'colorGroup4' }, { text: 7, class: 'colorGroup4' },{ text:8, class: 'colorGroup1' }, { text:9, class: 'colorGroup3' }];

	let shuffle = () => {
		let counter = setClassAndText.length;
		while (counter > 0) {
			let index = Math.floor(Math.random() * counter);
			counter--;		// Decrement counter by 1
			[setClassAndText[counter], setClassAndText[index]] = [setClassAndText[index], setClassAndText[counter]];	// Swap the last element
		}
		render(setClassAndText);
	}

	let sort = () => {
		setClassAndText.sort((x, y) => {
			return x.text - y.text;
		});
		render(setClassAndText);
	}

	let render = (setClassAndText) =>	{
		document.getElementById('shuffle').innerHTML = '';
		for(var i = 0; i < setClassAndText.length; i++) {
			var card = document.createElement("div");
			var value = document.createElement("div");
			card.className = "col-md-4 col-xs-12 col-sm-4 square card "+ setClassAndText[i].class;
			value.className = "value";
			value.innerHTML = setClassAndText[i].text;
			card.appendChild(value);
			document.getElementById("shuffle").appendChild(card);
		}
	}
	return { shuffle, sort }
}

var shuffleAndSortObject = shuffleAndSort();

let load = () => {
    shuffleAndSortObject.sort();
}

window.onload = load;