
    // 兼容获取滚动条
	function getScroll(){
		if(document.body.scrollTop != 0){
			return document.body; 
		}else{
			return document.documentElement;
		}
	}
    // 兼容性添加事件
   function myAddEvent(tag,event,fn,flag=true){
        if(tag.addEventListener){
           return tag.addEventListener(event,fn,flag);
        }else{
           return tag.attachEvent(event,fn,flag);
        }
     }
    // 删除节点
    function myRemoveChild(tag){
        tag.parentNode.removeChild(tag);
    }
    // 添加节点a到b节点之前
    function myInsertBefore(a,b){
        b.parentNode.insertBefore(a,b); 
    }
    // 添加节点a到b节点后面
    function myInsertAfter(a,b){
        // 如果b是最后一个节点
        if(b.nextSibling==null){
            b.parentNode.appendChild(a);
        }else{
            b.parentNode.insertBefore(a,b.nextSibling);
        }
    }
    // 用选择器获取单个元素元素
    function $(el){
        return document.querySelector(el);
    }
