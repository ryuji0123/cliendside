var alpha = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

var kc_ref = new Array(65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90);
var arr = {};
var cnt_lim;
var cnt;
var prob_lim;
var prob_cnt;
var is_completed;

function game(pokemon_json)
{
	for( let i = 0; i < 151; i++ ) {
		arr[i] = pokemon_json[i].name.english;
	}
	arr[121] = 'Mr_Mime';
	is_completed = false;
	prob_cnt = 0;
	while ( ( !prob_lim ) || !( prob_lim > 0 && prob_lim < 152)  ) {
		prob_lim = prompt('問題数を決めてください(1~151)');
	}
	let id = Math.floor(Math.random() * 150);
	change_problem(arr[id].replace(/[\'♀♂]/,''), id);
}

function change_problem(name, id)
{
	let img = document.getElementById('pokemon_img');
	img.src = './pokemon/images/' + ('00'+String(id+1)).slice(-3) + name + '.png';
	let text = $('#text');
	text.html('');
	name = name.replace(/[_]/ ,'');
	for ( let i = 0; i < name.length; i++ ) {
		let elem = document.createElement('span');
		elem.id = 'char_' + String(i);
		elem.innerHTML = name[i];
		text.append(elem);
	};
	cnt_lim = name.length;
	cnt = 0;
}

function typeGame(evt)
{
	if ( is_completed ) return;
	let kc;
	if ( document.getElementById('text') ) {
		kc = event.keyCode;
		let curchar = $('#text').children()[cnt];
		if ( alpha[kc_ref.indexOf(kc)] == curchar.innerHTML.toUpperCase() ) {
			curchar.style.color = '#dddddd';
			cnt++;
			if ( cnt == cnt_lim ) {
				prob_cnt++;
				if ( prob_cnt == prob_lim ) {
					alert('クリアー！');
					is_completed = true;
					setTimeout(function(){
						location.href = './index.html';
					}, 1000);
				} else {
					let id = Math.floor(Math.random() * 150);
					change_problem(arr[id].replace(/[\'♀♂]/,''), id);
				}
			}
		}
	} 
}
