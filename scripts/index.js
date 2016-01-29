window.onload = function(){
//1.写一个函数在控制台中输出10行*;
//*
// var fn1= function(){
// 	for (var i = 0; i < 5; i++) {
// 	var heihei =' ';
// 	for (var j = 0; j < i+1; j++) {
// 		heihei += '*';
// 	}
// 		console.log(heihei);
// 		console.log(' ');
// }
// };
// fn1();

//2写一个函数让他在页面中输出金字塔
// var fn2 = function(){
// 	for (var i = 0; i < 5; i++) {
// 	for (var k = 0; k < 4-i; k++) {
// 		document.write('&nbsp');
// 	}
// 	for (var j = 0; j < i*2+1; j++) {
// 	document.write('* ');
// 	}
// 	document.write('<br>');
// }
// };fn2();

//3.写一个函数 在页面中用定位创建28个元素
// 28个元素都是用定位 摆成金字塔 
document.onselectstart =function(){return false;};
var bb = document.getElementById('big'),
	zhe = document.getElementById('zhezhao'),
	zhao = document.getElementById('zhezhao1'),
	b1 = document.getElementById('b1'),
	b2 = document.getElementById('b2'),
	yuan = document.getElementById('yuan');
var fn3 = function(){
	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < i+1; j++) {
			var xiao = document.createElement('div');
			xiao.setAttribute('class','xiao');
			xiao.setAttribute('id', i+' '+j);
			xiao.style.top = 40*i+'px';
			xiao.style.left = 77.5*(6-i)+155*j+'px';
			xiao.style.webkitTransition = 'all 1s ease';
			bb.appendChild(xiao);
		}
	}
	for (var i = 0; i < 24; i++) {
		var xiao1 = document.createElement('div');
		xiao1.setAttribute('class','xiao1');
		xiao1.style.webkitTransition = 'all 1s ease';
		xiao1.setAttribute('id',7+''+i);
		yuan.appendChild(xiao1);
	}
	var tupian = document.getElementsByClassName('xiao');
	 	var ttt = 0;
	 var haha = setInterval(function(){
		tupian[ttt].style.webkitTransform = 'rotateY(0deg)';
		ttt++;
		if (ttt >tupian.length-1) {clearInterval(haha);houlai();houlai1();houlai2();}
	 },100);
};
fn3();
var zuo = document.getElementById("zuo1");
var you = document.getElementById("you1");
//4.事件委托
var first='',second='';
var previous = null;
var houlai = function(){
	bb.onclick = function(e){
	var cc = e.target;
	if (e.target == this) {return;}
	var dd = cc.getAttribute('id'); 		
	if(dd=="zuo"||dd=="you"){
		yuan.children.style.webkitTransform = 'scale(1,1)';  		
		yuan1.children.style.webkitTransform = 'scale(1,1)';
		return;
	}
	var x = Number(dd[0]);
	var y = Number(dd[2]);
	var nx = document.getElementById((x+1)+' '+y);
	var ny = document.getElementById((x+1)+' '+(y+1));
	if(nx||ny){return;}
	if (previous!==null){
		previous.style.webkitTransform = 'none';
		first=previous.innerHTML;
	}
	second = cc.innerHTML; 	
	cc.style.webkitTransform = 'scale(1.1,1.1)';
	if(Number(second)==13){
			cc.parentElement.removeChild(cc);
		}else if(Number(first)+Number(second)==13){
			previous.parentElement.removeChild(previous);
			cc.parentElement.removeChild(cc);
			cc=null;first = null;
		}

	// if (second=='13') {
	// 	if (cc.parentElement==bb) {bb.removeChild(cc)};
	// 	if (cc.parentElement==yuan) {yuan.removeChild(cc)};
	// 	if (cc.parentElement==yuan1) {yuan1.removeChild(cc)};
	// }
	// else if (Number(first)+Number(second)==13) {
	// 	if (cc.parentElement==bb) {bb.removeChild(cc);};
	// 	if (cc.parentElement==yuan) {yuan.removeChild(cc);};
	// 	if (cc.parentElement==yuan1) {yuan1.removeChild(cc);};
	// 	if (previous.parentElement==bb) {bb.removeChild(previous);};
	// 	if (previous.parentElement==yuan) {yuan.removeChild(previous);};
	// 	if (previous.parentElement==yuan1) {yuan1.removeChild(previous);};
	// 	cc=null;first = null;
	// }
	if (bb.children.length==4&&yuan.children.length==0&&yuan1.children.length==0) {
		zhao.style.display = 'block';
		zhao.style.zIndex = '100';
		b2.onclick = function(){window.location.reload();};
	};
	previous = cc;
};
};
//5.
// var dict = {1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
//写一个函数生成一个随机数组,长度为13,[1~13的随机数];
//把这个数组遍历 按我们的规则输出数字
// var arr = [];
// var shuzu = function(){
// 	for (var i = 0; i < 13; i++) {
// 		var shu = Math.floor(Math.random()*13)+1;
// 		arr.push(shu);
// 	}
// 	console.log(arr);
// 	for (var i = 0; i < arr.length; i++) {
// 	console.log(dict[arr[i]]);
// 	}
// };
// shuzu();
// }
//6.写一个函数 生成一个乱序的扑克牌
//['rd','bk','fk','mh']
// var poker = [
// 	{huase:'rd',number:'8'},
// 	{huase:'bk',number:'8'},
// 	{huase:'fk',number:'8'},
// 	{huase:'mh',number:'8'},
// ];
var dict = {1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
var huase =['rd','bk','fk','mh'];
var arr1 = [],hs,nu;
var zidian = {};
var  poke = function(){
	while(arr1.length!==52) {
		hs = huase[Math.floor(Math.random()*4)];
		nu = dict[Math.floor(Math.random()*13)+1];
		var pai = {huase:hs,number:nu};
		if (!zidian[hs+nu]) {
			arr1.push(pai);
			zidian[hs+nu]=true;
		}
	}
	return arr1;
};
var poker = poke();
var poker1 = poker.splice(0,28);
var poker2 = poker;
// poker.length = 28;
var zhangshu = 0;
var bianse = function(){
	var bianse1 = setInterval( function(){
		var els = document.getElementsByClassName('xiao');
		els[zhangshu].innerHTML=poker1[zhangshu].number;
		if (els[zhangshu].innerHTML=='A') {els[zhangshu].innerHTML='1'};	
		if (els[zhangshu].innerHTML=='J') {els[zhangshu].innerHTML='11'};	
		if (els[zhangshu].innerHTML=='Q') {els[zhangshu].innerHTML='12'};	
		if (els[zhangshu].innerHTML=='K') {els[zhangshu].innerHTML='13'};	
		var aa =poker1[zhangshu].huase+poker1[zhangshu].number;
		els[zhangshu].style.backgroundImage = 'url(./images/'+aa+'.png)';
		zhangshu++;
		if (zhangshu==28) {clearInterval(bianse1);};
	},100);
};
setTimeout(bianse(),100);

var els1 = document.getElementsByClassName('xiao1');
for (var i = 0; i < els1.length; i++) {
els1[i].innerHTML=poker2[i].number;	
if (els1[i].innerHTML=='A') {els1[i].innerHTML='1'};	
if (els1[i].innerHTML=='J') {els1[i].innerHTML='11'};	
if (els1[i].innerHTML=='Q') {els1[i].innerHTML='12'};	
if (els1[i].innerHTML=='K') {els1[i].innerHTML='13'};	

var bbb =poker2[i].huase+poker2[i].number;
els1[i].style.backgroundImage = 'url(./images/'+bbb+'.png)';
}

var  yuan1= document.getElementById('yuan1');
var shang = document.getElementById('zuo');
var xia = document.getElementById('you');

var houlai1 = function(){shang.onclick = function(){
	if(yuan.children.length){yuan1.appendChild(yuan.removeChild(yuan.lastElementChild));}
		return;
	};
};
var ii =0;
var houlai2 = function(){xia.onclick = function(){
	if (yuan.children.length==0) {
		var ee = yuan1.children.length;
		if(ii<3){
			for (var i = 0; i < ee; i++) {
				yuan.appendChild(yuan1.removeChild(yuan1.lastElementChild));
			}
			ii++;
		}else{zhe.style.display = 'block';
			zhe.style.zIndex = '100';
			b1.onclick = function(){window.location.reload();};
		}
	}
};


};



















}































