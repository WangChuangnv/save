window.onload = function(){
        function getTypeELement(es,type){
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
        function treeMenuNav(){
            var as = document.getElementsByTagName("a"),
                ai = 0,
                al = as.length,
                ao = null;

            for(;ai<al;ai++){
                ao = as[ai];
                if(ao.className == "treelcon"){
                    ao.onclick = function(){
                        var iconType = this.innerHTML,
                            uls = getTypeELement(this.parentNode.parentNode.childNodes,"ul"),
                            uli = 0,
                            ull = uls.length,
                            dis = "block";
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


    /*tab*/
    function Tab(){
        var lists= document.getElementsByClassName('list_tab');

        console.log(lists);
        for(var i= 0;i<lists.length;i++){
            (function(i){
                var bodys = lists[i].getElementsByClassName('list_tab_body');
                var tabs = lists[i].getElementsByTagName('li');
                console.log(tabs);
               for(var k=0;k<tabs.length;k++){
                   (function(k){

                    tabs[k].onclick=function(){
                        var index = parseInt(tabs[k].getAttribute('index'));

                        for(var m=0;m<tabs.length;m++){
                            if(tabs[m].className=="click_state"){
                                tabs[m].className='';
                            }
                        }
                        for(var n=0;n<bodys.length;n++){
                            if(bodys[n].className=="list_tab_body show"){
                                bodys[n].className='list_tab_body';
                            }
                        }

                       tabs[index - 1].className ='click_state';
                        bodys[index - 1].className ='list_tab_body show';
                     };

                   }(k))
               }

            }(i))
        }


    }



    Tab();
    };


