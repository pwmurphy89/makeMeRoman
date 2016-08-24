describe ("Roman Numeral: ", function (){

	describe ("when numeral or remainder is under 3", function(){
		it("should be all I's", function(){
			expect(makeMeRoman(2)).toEqual("II");
			expect(makeMeRoman(3)).toEqual("III");
		});
	});
	describe ("when numeral or remainder is 4", function(){
		it("should include V", function(){
			expect(makeMeRoman(4)).toEqual("IV");
		});
	});
	describe ("when numeral or remainder is 9", function(){
		it("should have IX", function(){
			expect(makeMeRoman(9)).toEqual("IX");
			expect(makeMeRoman(19)).toEqual("XIX");
		});
	});
	describe ("when numeral is divisible by 10", function(){
		it("should have X", function(){
			expect(makeMeRoman(10)).toEqual("X");
			expect(makeMeRoman(29)).toEqual("XXIX");
		});
	});
	describe ("when numeral is divisible by 50", function(){
		it("should have L", function(){
			expect(makeMeRoman(50)).toEqual("L");
			expect(makeMeRoman(59)).toEqual("LIX");
		});
	});
	describe ("when remainder is more than or equal to 40", function(){
		it("should have XL", function(){
			expect(makeMeRoman(40)).toEqual("XL");
			expect(makeMeRoman(49)).toEqual("XLIX");
		});
	});
	describe ("when numeral is divisible by 100", function(){
		it("should have C", function(){
			expect(makeMeRoman(100)).toEqual("C");
			expect(makeMeRoman(209)).toEqual("CCIX");
		});
	});
	describe ("when remainder is more than or equal to 90", function(){
		it("should have XC", function(){
			expect(makeMeRoman(90)).toEqual("XC");
			expect(makeMeRoman(99)).toEqual("XCIX");
		});
	});
	describe ("when numeral is divisible by 500", function(){
		it("should have D", function(){
			expect(makeMeRoman(500)).toEqual("D");
			expect(makeMeRoman(509)).toEqual("DIX");
		});
	});
	describe ("when remainder is more than or equal to 400", function(){
		it("should have CD", function(){
			expect(makeMeRoman(400)).toEqual("CD");
			expect(makeMeRoman(450)).toEqual("CDL");
		});
	});
	describe ("when numeral is divisible by 1000", function(){
		it("should have M", function(){
			expect(makeMeRoman(1000)).toEqual("M");
			expect(makeMeRoman(2500)).toEqual("MMD");
		});
	});
	describe ("when remainder is more than or equal to 900", function(){
		it("should have CM", function(){
			expect(makeMeRoman(900)).toEqual("CM");
			expect(makeMeRoman(1980)).toEqual("MCMLXXX");
		});
	});
});






