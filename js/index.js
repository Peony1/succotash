


var addItem = $('.addItem');
var container = $('section .container');

// 未完成列表
var todoList = $('.todoList');

var inputVal;
var inputText;//列表框

// 未完成列表数量
var todoNum = $('.todo span');
var num1;
num1 = Number(todoNum.innerText);
// 已完成列表属两个
var doneNum = $('.done span');
var num2;
// 列表添加事件
addItem.addEventListener('keydown',function(e){
	if(e.keyCode == 13){
		num1 = Number(todoNum.innerText);
		inputVal = addItem.value;
		var li = document.createElement('li');
		li.innerHTML = `<input type="checkbox" name="" flag="false">
						<input type="text" name="" value="${inputVal}">
						<a href="javascript:;">
							<img src="img/del.png" class="del">
						</a>
						`;
		todoList.appendChild(li);
		todoNum.innerHTML = ++num1;
		addItem.value = "";
	}
})
//删除
var doneList = $('.doneList');
container.onclick = function(e){
	num2 = Number(doneNum.innerText);
	if(e.target.classList.contains('del')){
		e.target.parentNode.parentNode.remove();
		if(e.target.parentNode.classList.contains('todo')){
			todoNum.innerText = --num1;
		}else{
			doneNum.innerText = --num2;
		}
	}
	if(e.target.getAttribute('flag')=='false'){
		doneList.appendChild(e.target.parentNode);
		e.target.setAttribute('flag','true');
		doneNum.innerText = ++num2;
		todoNum.innerText = --num1;
		e.target.parentNode.lastElementChild.className = "done";
	}else if(e.target.getAttribute('flag')=='true'){
		todoList.appendChild(e.target.parentNode);
		e.target.setAttribute('flag','false');
		doneNum.innerText = --num2;
		todoNum.innerText = ++num1;
		e.target.parentNode.lastElementChild.className = "todo";
	}
}
// 清除所有的列表
var clear = $('.clear');
clear.onclick = function(){
	todoList.innerHTML="";
	doneList.innerHTML="";
	doneNum.innerText = 0;
	todoNum.innerText = 0;
}

