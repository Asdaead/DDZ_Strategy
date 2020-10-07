var rusLittle = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var rusBig = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
var numbers = "0123456789";
var engLittle = "abcdefghijklmnopqrstuvwxyz";
var engBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Decrypt(line)
{
	var cryptline = "";
	for (var i = 0; i < line.length ; i++) {
		if (CheckSymbol(line[i], rusLittle) >= 0) {
			var index = CheckSymbol(line[i], rusLittle);
			cryptline += GetSymbol(index, rusLittle);
		}
		else if (CheckSymbol(line[i], rusBig) >= 0) {
			var index = CheckSymbol(line[i], rusBig);
			cryptline += GetSymbol(index, rusBig);
		}
		else if (CheckSymbol(line[i], numbers) >= 0) {
			var index = CheckSymbol(line[i], numbers);
			cryptline += GetSymbol(index, numbers);
		}
		else if (CheckSymbol(line[i], engLittle) >= 0) {
			var index = CheckSymbol(line[i], engLittle);
			cryptline += GetSymbol(index, engLittle);
		}
		else if (CheckSymbol(line[i], engBig) >= 0) {
			var index = CheckSymbol(line[i], engBig);
			cryptline += GetSymbol(index, engBig);
		}
		else { cryptline += line[i];}
	}
	alert(cryptline);
	return cryptline;
}
function GetSymbol(index, line)
{
	if (index - 4 > 0) { return line[index - 4];}
	else { return line[line.length + index - 4];}
}
function CheckSymbol(char, line)
{
	for (var i = line.length - 1; i >= 0; i--) {
		if (line[i] == char) { return i; }
	}
	return -1;
}