
// 数据
 	// var data = [{title:'hello',type:true},{title:'hi',type:false}];
 	// localStorage.setItem('todoList',JSON.stringify(data));
 	var data = JSON.parse(localStorage.getItem('todoList'))||[];

 	var todoList = document.querySelector('.todoList');
 	var doneList = document.querySelector('.doneList');

 	var toNum = document.querySelector('.todo span');
 	var doNum = document.querySelector('.done span');
 	load();
 	// 渲染页面
 	function load(){
 		var todoStr = "",doneStr = "",todoNum=0,doneNum=0;
	 	for(let i=data.length-1;i>=0;i--){
	 		if(!data[i].type){
	 			todoNum++;
	 			todoStr+=`<li index="${i}">
						<input type="checkbox" name="">
						<p class="title">${data[i].title}</p>
						<a href="javascript:;" class="todo">
							<img src="img/del.png" class="del">
						</a>
						</li>`;
	 			
	 		}else{
	 			doneNum++;
	 			doneStr+=`<li index="${i}">
						<input type="checkbox" name="" checked = "checked">
						<p class="title">${data[i].title}</p>
						<a href="javascript:;" class="todo">
							<img src="img/del.png" class="del">
						</a>
						</li>`;
	 		}
	 	}
	 	todoList.innerHTML = todoStr;
	 	toNum.innerHTML = todoNum;
	 	doneList.innerHTML = doneStr;
	 	doNum.innerHTML = doneNum;
 	}
 	  
 	// 添加input
 	var addItem = document.querySelector('.addItem');
 	addItem.addEventListener('keydown',addList);
 	addItem.addEventListener('blur',addList);

 	function addList(ev){
 		if(ev.keyCode == 13||ev.type=="blur"){
 			if(addItem.value){
 				data.push({title:addItem.value,type:false});
	 			reload();
	 			load();
	 			addItem.value = "";
 			}
 		}
 	}
 	// 点击复选框改变列表位置
 	var container = document.querySelector('section .container');

 	container.addEventListener('click',function(e){
 		if(e.target.type == "checkbox"){
 			var index1 = e.target.parentNode.getAttribute('index');
 			if(data[index1].type){
 				data[index1].type = false;
 			}else{
 				data[index1].type = true;
 			}
 			reload();
 			load();
 		}
 		if(e.target.classList.contains('del')){ 
 			var index2 = e.target.parentNode.parentNode.getAttribute('index');
 			data.splice(index2,1);
 			reload();
 			load();
 		}
 	})
 	container.addEventListener('dblclick',function(e){
 		if(e.target.nodeName = 'P'){
 			e.target.focus();
 			e.target.setAttribute('contenteditable',true);
 			e.target.addEventListener('change',change);
 			e.target.addEventListener('blur',change);
 		}
 		function change(){
 			var index3 = e.target.parentNode.getAttribute('index');
 			data[index3].title = e.target.innerHTML;
 			e.target.setAttribute('contenteditable',false);
 			reload();
 			load();
 		}
 	})

 	// localStorage赋值
 	function reload(){
 		localStorage.setItem('todoList',JSON.stringify(data));
 	}
 	// 删除全部
 	var clear = document.querySelector('.clear');
 	clear.onclick = function(){
 		data = [];
 		reload();
 		load();
 	}