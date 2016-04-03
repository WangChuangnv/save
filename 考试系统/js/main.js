window.onload = function(){
        function getTypeELement(es,type){//获取指定节点
            var esLen = es.length,
                i = 0,
                eArr = [],
                esl = null;
            for(;i<esLen;i++){
                esl = es[i];
                if(esl.nodeName.replace("#","").toLocaleLowerCase()==type){
                    eArr.push(esl);
                }
            }
            return eArr;
        }
        function treeMenuNav(){ //树形菜单导航
            var as = document.getElementsByTagName("a"),//获取所有的a元素
                ai = 0,                            //循环变量初始引导值
                al = as.length,                    //a的个数
                ao = null;//被遍历的当前元素

            for(;ai<al;ai++){
                ao = as[ai];
                if(ao.className == "treelcon"){ //判断是否是树形节点被单击的地方
                    ao.onclick = function(){//绑定单击事件
                        var iconType = this.innerHTML,//获取展示类型
                            uls = getTypeELement(this.parentNode.parentNode.childNodes,"ul"),
                            uli = 0,          //元素初始值
                            ull = uls.length,//子菜单个数
                            dis = "block";  //默认显示（展开）子菜单
                        if(iconType == "-"){
                            this.innerHTML = "+";
                            dis="none";
                        }
                        else{
                            this.innerHTML="-";
                        }
                        for(;uli<ull;uli++){
                            uls[uli].style.display = dis;
                        }
                    }
                }
            }
        }
        treeMenuNav();
    };


