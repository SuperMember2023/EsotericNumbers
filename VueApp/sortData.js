function getData (key) {
	return data[key];
}

function getChunGuaData (key) {
	return chunGua[key];
}

function get64Data() {
	return data;
}

function getGuaGong(data)
{
	if(data[3] != '八纯卦')
	{
		return data[4];
	}
	return ""
}

function getGuaGongWuXin(data)
{
	if(data[3] != '八纯卦')
	{
		return wuxing[chuGuaWuXin[data[4]][0]];
	}
	else
	{
		return wuxing[data[4]];
	}
}

function getFuYao(data,gua,jinfangFuYao)
{
	let shigua = data[3]
	if(!jinfangFuYao)
	{
		if(shigua != '八纯卦')
		{
			// gua = gua.replace(/2/g,'0');
			// gua = gua.replace(/3/g,'1');
			// let waigua = gua.substring(0,3)
			// let neigua = gua.substring(3,6)
			
			// let waiguafuyao = chuGuaFuYao[waigua]
			// let neiguafuyao = chuGuaFuYao[neigua]
			// console.log(waiguafuyao)
			// console.log(neiguafuyao)
			// return [waiguafuyao[0],waiguafuyao[1],waiguafuyao[2],neiguafuyao[3],neiguafuyao[4],neiguafuyao[5]]
			return chuGuaWuXin[data[4]][1];
		}
		else
		{
			return [];
		}
	}
	else
	{
		let fudaodata = undefined;
		gua = gua.replace(/2/g,'0');
		gua = gua.replace(/3/g,'1');
		
		let waigua = gua.substring(0,3)
		let neigua = gua.substring(3,6)
		let bengong  = undefined
		let neiguafuyao = undefined
		let waiguafuyao = undefined
		let strAry = undefined
		let newgua = undefined
		switch(shigua)
		{
			case '一世卦':
			case '二世卦':
			case '三世卦':	
				bengong = chuGuaWuXin[data[4]][1]
				// neiguafuyao = chuGuaFuYao[chuGuaFuYaoMap[neigua]]
				waiguafuyao = chuGuaFuYao[chuGuaFuYaoMap[waigua]]
				fudaodata = [waiguafuyao[0],waiguafuyao[1],waiguafuyao[2],bengong[3],bengong[4],bengong[5]]
				break
			case '四世卦':
			case '五世卦':
				bengong = chuGuaWuXin[data[4]][1]
				neiguafuyao = chuGuaFuYao[chuGuaFuYaoMap[neigua]]
				// waiguafuyao = chuGuaFuYao[chuGuaFuYaoMap[waigua]]
				fudaodata = [bengong[0],bengong[1],bengong[2],neiguafuyao[3],neiguafuyao[4],neiguafuyao[5]]
				break
			case '八纯卦':
				fudaodata =  chuGuaFuYao[chuGuaFuYaoMap[waigua]];
				break;
			case '游魂卦':
				strAry = gua.split('');
				strAry[2] = strAry[2] == '0'?'1':'0';
				newgua = strAry.join('');
				waigua = newgua.substring(0,3)
				neigua = newgua.substring(3,6)
				bengong = chuGuaWuXin[data[4]][1]
				//waiguafuyao = chuGuaFuYao[chuGuaFuYaoMap[waigua]]
				waiguafuyao = chuGuaFuYao[waigua]
				fudaodata = [waiguafuyao[0],waiguafuyao[1],waiguafuyao[2],bengong[3],bengong[4],bengong[5]]
				break;
			case '归魂卦':
				strAry = gua.split('');
				strAry[3] = strAry[3] == '0'?'1':'0';
				strAry[4] = strAry[4] == '0'?'1':'0';
				strAry[5] = strAry[5] == '0'?'1':'0';
				newgua = strAry.join('');
				bengong = chuGuaWuXin[data[4]][1]
				waigua = newgua.substring(0,3)
				neigua = newgua.substring(3,6)
				console.log(newgua)
				neiguafuyao = chuGuaFuYao[neigua]
				fudaodata = [bengong[0],bengong[1],bengong[2],neiguafuyao[3],neiguafuyao[4],neiguafuyao[5]]
				break;
		}
		return fudaodata;
	}
	
	return [];
}

function getZhuGuaNajia(userArr)
{
	let waigua = userArr.substring(0,3);
	let neigua = userArr.substring(3);
	let neichungua = neigua + neigua;
	let waichungua = waigua + waigua;
	
	waichungua = waichungua.replace(/2/g,'0');
	waichungua = waichungua.replace(/3/g,'1');
	neichungua = neichungua.replace(/3/g,'1');
	neichungua = neichungua.replace(/2/g,'0');
	
	let targetNeiChunGua = this.getChunGuaData(neichungua);
	let targetWaiChunGua = this.getChunGuaData(waichungua);
	
	let orderChunGua = waichungua + neichungua;
	
	let najia = []
	najia[0] = targetWaiChunGua[2][0];
	najia[1] = targetWaiChunGua[2][1];
	najia[2] = targetWaiChunGua[2][2];
	najia[3] = targetNeiChunGua[2][3];
	najia[4] = targetNeiChunGua[2][4];
	najia[5] = targetNeiChunGua[2][5];
	
	return najia;
}

function getZhuGuaData(userArr)
{	
	userArr = userArr.replace(/2/g,'0');
	userArr = userArr.replace(/3/g,'1');
	return userArr;
}


function getBianGuaData(userArr)
{	
	userArr = userArr.replace(/2/g,'1');
	userArr = userArr.replace(/3/g,'0');		
	return userArr;
}


function getBianGuaNajia(userArr)
{
	let waigua = userArr.substring(0,3);
	let neigua = userArr.substring(3);
	let neichungua = neigua + neigua;
	let waichungua = waigua + waigua;
	
	waichungua = waichungua.replace(/2/g,'1');
	waichungua = waichungua.replace(/3/g,'0');
	neichungua = neichungua.replace(/3/g,'0');
	neichungua = neichungua.replace(/2/g,'1');
	
	let targetNeiChunGua = this.getChunGuaData(neichungua);
	let targetWaiChunGua = this.getChunGuaData(waichungua);
	
	let orderChunGua = waichungua + neichungua;
	
	let najia = []
	najia[0] = targetWaiChunGua[2][0];
	najia[1] = targetWaiChunGua[2][1];
	najia[2] = targetWaiChunGua[2][2];
	najia[3] = targetNeiChunGua[2][3];
	najia[4] = targetNeiChunGua[2][4];
	najia[5] = targetNeiChunGua[2][5];
	
	return najia;
}

let liuShenData=
{
	'甲':['玄武','白虎','腾蛇','勾陈','朱雀','青龙'],
	'乙':['玄武','白虎','腾蛇','勾陈','朱雀','青龙'],
	'丙':['青龙','玄武','白虎','腾蛇','勾陈','朱雀'],
	'丁':['青龙','玄武','白虎','腾蛇','勾陈','朱雀'],
	'戊':['朱雀','青龙','玄武','白虎','腾蛇','勾陈'],
	'己':['勾陈','朱雀','青龙','玄武','白虎','腾蛇'],
	'庚':['腾蛇','勾陈','朱雀','青龙','玄武','白虎'],
	'辛':['腾蛇','勾陈','朱雀','青龙','玄武','白虎'],
	'壬':['白虎','腾蛇','勾陈','朱雀','青龙','玄武'],
	'癸':['白虎','腾蛇','勾陈','朱雀','青龙','玄武']
}

let tianGanShenSha=
{
	//贵人 文昌 
	'甲':['丑未','巳'],
	'乙':['子申','午'],
	'丙':['亥酉','申'],
	'丁':['子申','酉'],
	'戊':['丑未','申'],
	'己':['子申','酉'],
	'庚':['丑未','亥'],
	'辛':['午寅','子'],
	'壬':['卯巳','寅'],
	'癸':['卯巳','卯']
}

let dizhiShenSha = 
{
	//天喜
	'子':['酉'],
	'丑':['申'],
	'寅':['未'],
	'卯':['午'],
	'辰':['巳'],
	'巳':['辰'],
	'午':['卯'],
	'未':['寅'],
	'申':['丑'],
	'酉':['子'],
	'戌':['亥'],
	'亥':['戌']
}

function getDiZhiShenSha(tianGan)
{
	return dizhiShenSha[tianGan]
}

function getTianGanShenSha(tianGan)
{
	return tianGanShenSha[tianGan]
}

function getLiuShen(tianGan)
{
	return liuShenData[tianGan]
}

let jiaZiWuxin = 
{
	'子':['水',2],
	'丑':['土',4],
	'寅':['木',1],
	'卯':['木',1],
	'辰':['土',4],
	'巳':['火',3],
	'午':['火',3],
	'未':['土',4],
	'申':['金',0],
	'酉':['金',0],
	'戌':['土',4],
	'亥':['水',2]
}

let wuxing = {
    //金、木、水、火、土
	'金':['兄弟','妻财','子孙','官鬼','父母'],
	'木':['官鬼','兄弟','父母','子孙','妻财'],
	'水':['父母','子孙','兄弟','妻财','官鬼'],
	'火':['妻财','父母','官鬼','兄弟','子孙'],
	'土':['子孙','官鬼','妻财','父母','兄弟'],
}

let chunGua = {
	'111111':['乾为天',"金",['壬戌土','壬申金','壬午火','甲辰土','甲寅木','甲子水']],
	'000000':['坤为地',"土",['癸酉金','癸亥水','癸丑土','乙卯木','乙巳火','乙未土']],
	'101101':['离为火',"火",['己巳火','己未土','己酉金','己亥水','己丑土','己卯木']],
	'010010':['坎为水',"水",['戊子水','戊戌土','戊申金','戊午火','戊辰土','戊寅木']],
	'100100':['艮为山',"土",['丙寅木','丙子水','丙戌土','丙申金','丙午火','丙辰土']],
	'011011':['兑为泽',"金",['丁未土','丁酉金','丁亥水','丁丑土','丁卯木','丁巳火']],
	'110110':['巽为风',"木",['辛卯木','辛巳火','辛未士','辛酉金','辛亥水','辛丑土']],
	'001001':['震为雷',"木",['庚戌土','庚申金','庚午火','庚辰土','庚寅木','庚子水']],
};

let chuGuaWuXin = 
{
	'乾':['金',['壬戌土','壬申金','壬午火','甲辰土','甲寅木','甲子水']],
	'坤':['土',['癸酉金','癸亥水','癸丑土','乙卯木','乙巳火','乙未土']],
	'坎':['水',['戊子水','戊戌土','戊申金','戊午火','戊辰土','戊寅木']],
	'离':['火',['己巳火','己未土','己酉金','己亥水','己丑土','己卯木']],
	'震':['木',['庚戌土','庚申金','庚午火','庚辰土','庚寅木','庚子水']],
	'艮':['土',['丙寅木','丙子水','丙戌土','丙申金','丙午火','丙辰土']],
	'巽':['木',['辛卯木','辛巳火','辛未士','辛酉金','辛亥水','辛丑土']],
	'兑':['金',['丁未土','丁酉金','丁亥水','丁丑土','丁卯木','丁巳火']]
}

let chuGuaFuYao = 
{
	'111':['壬戌土','壬申金','壬午火','甲辰土','甲寅木','甲子水'],
	'000':['癸酉金','癸亥水','癸丑土','乙卯木','乙巳火','乙未土'],
	'010':['戊子水','戊戌土','戊申金','戊午火','戊辰土','戊寅木'],
	'101':['己巳火','己未土','己酉金','己亥水','己丑土','己卯木'],
	'001':['庚戌土','庚申金','庚午火','庚辰土','庚寅木','庚子水'],
	'100':['丙寅木','丙子水','丙戌土','丙申金','丙午火','丙辰土'],
	'110':['辛卯木','辛巳火','辛未士','辛酉金','辛亥水','辛丑土'],
	'011':['丁未土','丁酉金','丁亥水','丁丑土','丁卯木','丁巳火']
}

let chuGuaFuYaoMap = 
{
	'111':'000',
	'000':'111',
	'010':'101',
	'101':'010',
	'001':'110',
	'100':'011',
	'110':'001',
	'011':'100'
}

let data = {
	  '111111': ['1', '乾为天','乾', '八纯卦','金','111111'],
	  '000000': ['2', '坤为地','坤', '八纯卦','土','000000'],
	  '010001': ['3', '水雷屯','屯', '二世卦','坎','010001'],
	  '100010': ['4', '山水蒙','蒙', '四世卦','离','100010'],
	  '010111': ['5', '水天需','需', '游魂卦','坤','010111'],
	  '111010': ['6', '天水讼','讼', '游魂卦','离','111010'],			  
	  '000010': ['7', '地水师','师', '归魂卦','坎','000010'],
	  '010000': ['8', '水地比','比', '归魂卦','坤','010000'],
	  '110111': ['9', '风天小畜','小畜','一世卦','巽','110111'],
	  '111011': ['10', '天泽履','履','五世卦','艮','111011'],
	  '000111': ['11', '地天泰','泰','三世卦','坤','000111'],
	  '111000': ['12', '天地否','否','三世卦','乾','111000'],
	  '111101': ['13', '天火同人','同人','归魂卦','离','111101'],
	  '101111': ['14', '火天大有','大有','归魂卦','乾','101111'],
	  '000100': ['15', '地山谦','谦','五世卦','兑','000100'],
	  '001000': ['16', '雷地豫','豫','一世卦','震','001000'],
	  '011001': ['17', '泽雷随','随','归魂卦','震','011001'],
	  '100110': ['18', '山风蛊','蛊','归魂卦','巽','100110'],
	  '000011': ['19', '地泽临','临', '二世卦','坤','000011'],
	  '110000': ['20', '风地观','观','四世卦','乾','110000'],
	  '101001': ['21', '火雷噬嗑','噬嗑','五世卦','巽','101001'],
	  '100101': ['22', '山火贲','贲', '一世卦','艮','100101'],
	  '100000': ['23', '山地剥','剥', '五世卦','乾','100000'],
	  '000001': ['24', '地雷复','复','一世卦','坤','000001'],
	  '111001': ['25', '天雷无妄','无妄','四世卦','巽','111001'],
	  '100111': ['26', '山天大畜','大畜', '二世卦','艮','100111'],
	  '100001': ['27', '山雷颐','颐', '游魂卦','巽','100001'],
	  '011110': ['28', '泽风大过','大过','游魂卦','震','011110'],
	  '010010': ['29', '坎为水','坎','八纯卦','水','010010'],
	  '101101': ['30', '离为火','离','八纯卦','火','101101'],            
	  '011100': ['31', '泽山咸','咸','三世卦','兑','011100'],             
	  '001110': ['32', '雷风恒','恒','三世卦','震','001110'],
	  '111100': ['33', '天山遁','遁','二世卦','乾','111100'],
	  '001111': ['34', '雷天大壮','大壮','四世卦','坤','001111'],
	  '101000': ['35', '火地晋','晋','游魂卦','乾','101000'],
	  '000101': ['36', '地火明夷','明夷', '游魂卦','坎','000101'],
	  '110101': ['37', '风火家人','家人', '二世卦','巽','110101'],
	  '101011': ['38', '火泽睽','睽','四世卦','艮','101011'],
	  '010100': ['39', '水山蹇','蹇','四世卦','兑','010100'],
	  '001010': ['40', '雷水解','解','二世卦','震','001010'],
	  '100011': ['41', '山泽损','损','三世卦','艮','100011'],
	  '110001': ['42', '风雷益','益','三世卦','巽','110001'],
	  '011111': ['43', '泽天夬','夬','五世卦','坤','011111'],
	  '111110': ['44', '风天姤','姤','一世卦','乾','111110'],
	  '011000': ['45', '泽地萃','萃','二世卦','兑','011000'],
	  '000110': ['46', '地风升','升','四世卦','震','000110'],
	  '011010': ['47', '泽水困','困','一世卦','兑','011010'],
	  '010110': ['48', '水风井','井','五世卦','震','010110'],
	  '011101': ['49', '泽火革','革','四世卦','坎','011101'],
	  '101110': ['50', '火风鼎','鼎','二世卦','离','101110'],
	  '001001': ['51', '震为雷','震','八纯卦','木','001001'],
	  '100100': ['52', '艮为山','艮','八纯卦','土','100100'],
	  '110100': ['53', '风山渐','渐','归魂卦','艮','110100'],
	  '001011': ['54', '雷泽归妹','归妹','归魂卦','兑','001011'],
	  '001101': ['55', '雷火丰','丰','五世卦','坎','001101'],
	  '101100': ['56', '火山旅','旅','一世卦','离','101100'],
	  '110110': ['57', '巽为风','巽','八纯卦','木','110110'],
	  '011011': ['58', '兑为泽','兑', '八纯卦','金','011011'],
	  '110010': ['59', '风水涣','涣', '五世卦','离','110010'],
	  '010011': ['60', '水泽节','节', '一世卦','坎','010011'],
	  '110011': ['61', '风泽中孚','中孚', '游魂卦','艮','110011'],
	  '001100': ['62', '雷山小过','小过','游魂卦','兑','001100'],
	  '010101': ['63', '水火既济','既济','三世卦','坎','010101'],
	  '101010': ['64', '火水未济','未济', '三世卦','离','101010']
}

function getWuXingIndex(dizhi)
{
	return  jiaZiWuxin[dizhi]
}

function getShiYing(zhushiyin)
{
	let data = [];
	if(zhushiyin == '一世卦')
	{
		data=['','','应','','','世']
	}else if(zhushiyin == '二世卦')
	{
		data=['','应','','','世','']
	}else if(zhushiyin == '三世卦'|| zhushiyin == '归魂卦')
	{
		
		data=['应','','','世','','']
	}else if(zhushiyin == '四世卦'|| zhushiyin == '游魂卦')
	{
		data=['','','世','','','应']
	}else if(zhushiyin == '五世卦')
	{
		data=['','世','','','应','']
	}
	else if(zhushiyin == '八纯卦')
	{
		data=['世','','','应','','']
	}
	return  data;
}

// const gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
// const zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
// const nayin = [
//   "海中金", "炉中火", "大林木", "路旁土", "剑锋金", "山头火", "涧下水", "城墙土",
//   "白蜡金", "杨柳木", "泉中水", "屋上土", "霹雳火", "松柏木", "长流水", "沙中金",
//   "山下火", "平地木", "壁上土", "金箔金", "覆灯火", "天河水", "大驿土", "钗钏金",
//   "桑柘木", "大溪水", "沙中土", "天上火", "石榴木", "大海水", "钗钏金", "城头土",
//   "狗头金", "葡萄木", "野鸡土", "溪边土", "灯笼火", "白猿木", "泉中水", "屋下土",
//   "泉中金", "砂石金", "天上火", "石榴木", "大海水", "钗钏金", "城头土", "狗头金",
//   "葡萄木", "野鸡土", "溪边水", "灯笼火", "白猿木", "泉中水", "屋下土", "山下火",
// ];
const nayinDic = {
  '甲子':"海中金", 
  '乙丑':"海中金", 
  '丙寅':"炉中火",
  '丁卯':"炉中火",
  '戊辰':"大林木",
  '己巳':"大林木",
  '庚午':"路旁土", 
  '辛未':"路旁土", 
  '壬申':"剑锋金", 
  '癸酉':"剑锋金", 
  '甲戌':"山头火", 
  '乙亥':"山头火", 
  '丙子':"涧下水", 
  '丁丑':"涧下水", 
  '戊寅':"城墙土",
  '己卯':"城墙土",
  '庚辰':"白蜡金", 
  '辛巳':"白蜡金", 
  '壬午':"杨柳木", 
  '癸未':"杨柳木", 
  '甲申':"泉中水",
  '乙酉':"泉中水",
  '丙戌':"屋上土", 
  '丁亥':"屋上土", 
  '戊子':"霹雳火",
  '己丑':"霹雳火",
  '庚寅':"松柏木",
  '辛卯':"松柏木",
  '壬辰':"长流水",
  '癸巳':"长流水",
  '甲午':"沙中金",
  '乙未':"沙中金",
  '丙申':"山下火", 
  '丁酉':"山下火", 
  '戊戌':"平地木", 
  '己亥':"平地木", 
  '庚子':"壁上土",
  '辛丑':"壁上土",
  '壬寅':"金箔金",
  '癸卯':"金箔金",
  '甲辰':"覆灯火",
  '乙巳':"覆灯火",
  '丙午':"天河水", 
  '丁未':"天河水", 
  '戊申':"大驿土", 
  '己酉':"大驿土", 
  '庚戌':"钗钏金",
  '辛亥':"钗钏金",
  '壬子':"桑柘木", 
  '癸丑':"桑柘木", 
  '甲寅':"大溪水", 
  '乙卯':"大溪水", 
  '丙辰':"沙中土", 
  '丁巳':"沙中土", 
  '戊午':"天上火", 
  '己未':"天上火", 
  '庚申':"石榴木", 
  '辛酉':"石榴木", 
  '壬戌':"大海水", 
  '癸亥':"大海水"
  // "钗钏金",
  // "城头土",
  // "狗头金", "葡萄木", "野鸡土", "溪边土", "灯笼火", "白猿木", "泉中水", "屋下土",
  // "泉中金", "砂石金", "天上火", "石榴木", "大海水", "钗钏金", "城头土", "狗头金",
  // "葡萄木", "野鸡土", "溪边水", "灯笼火", "白猿木", "泉中水", "屋下土", "山下火",
};

function getNayin(ganzhi) {
  //const index = ((gan.indexOf(gan[0]) * 10 + zhi.indexOf(zhi[0])) + 28) % 60;
  return nayinDic[ganzhi];
}

export default {
  getData,
  getChunGuaData,
  getBianGuaNajia,
  getZhuGuaNajia,
  getZhuGuaData,
  getBianGuaData,
  get64Data,
  getShiYing,
  getGuaGong,
  getGuaGongWuXin,
  getWuXingIndex,
  getFuYao,
  getLiuShen,
  getTianGanShenSha,
  getDiZhiShenSha,
  getNayin
}
