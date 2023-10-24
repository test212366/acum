function Accumulator(startingValue) {
	this.read = function () {
		return prompt('everyNum', '')
	}
	this.value = function () {
		+startingValue + +this.read
	}
}




let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению


alert(accumulator.value); // выведет сумму этих значений