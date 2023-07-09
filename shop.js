function print_help() {
	var number = "Телефон:89278729169"
	var mail = "Почта:shirtcat@mail.ru"
	var telegram = "Телеграм:shirt.cat"
	alert(number + '\n' + mail + '\n' + telegram)
}
function calculator() {
	var num1 = parseFloat(prompt('Введите первое число:'));
	var num2 = parseFloat(prompt('Введите второе число:'));
	var plus = num1+num2;
	var minus = num1-num2;
	var dl = num1/num2;
	var um = num1*num2;

	alert('Сложение: ' + num1 + '+' + num2 + '=' + plus)
	alert('Вычитание: ' + num1 + '-' + num2 + '=' + minus)
	alert('Деление: ' + num1 + ':' + num2 + '=' + dl)
	alert('Умножение: ' + num1 + '*' + num2 + '=' + um)
}
function note() {
	var text = prompt('Введите текст');
	var l = text.length;
	var n = 2;
	var index = text[n];
	var p = text[text.length];
	var last = text[text.length-1];
	var q = text[text.length-2];

	alert('Длина строки: ' + l);
	alert('Индекс: ' + n + ' ' + index);
	alert('Последний символ: ' + last);
	alert('Предпоследний символ: ' + q);
}
function stroka() {
	var text = prompt('Введите текст');
	var text = text.replace('город','корова');
	alert(text);
	var podstroka = prompt('Введите подстроку');
	var podstroka = podstroka.toLowerCase();
	var stroka = text.indexOf(podstroka);

	alert('Индекс подстроки ' + stroka);
	let big = prompt('Заглавные буквы');
	alert(big.toUpperCase());
}
function blue() {
	var r = document.getElementById('rec');
	r.style.color = "blue";
}
function black() {
	var r = document.getElementById('rec');
	r.style.color = "black";
}
function btn_on() {
	var b = document.getElementById('cheep');
	b.style.padding = "10px";
	b.style.color = "white";
	b.style.backgroundColor = "PaleVioletRed";
	b.style.borderRadius = "5px";
}
function btn_off() {
	var b = document.getElementById('cheep');
	b.style.padding = "5px";
	b.style.color = "black";
	b.style.backgroundColor = "Plum";
	b.style.borderRadius = "0px";
}
function change_style() {
	c = document.getElementById('send');
	if (window.getComputedStyle(c).backgroundColor=="rgb(219, 112, 147)")
	{
		c.style.backgroundColor="rgb(102, 205, 170)";
	}
	else
		c.style.backgroundColor="rgb(219, 112, 147)"
}
