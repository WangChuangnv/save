window.onload = function(){
        function getTypeELement(es,type){//��ȡָ���ڵ�
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
        function treeMenuNav(){ //���β˵�����
            var as = document.getElementsByTagName("a"),//��ȡ���е�aԪ��
                ai = 0,                            //ѭ��������ʼ����ֵ
                al = as.length,                    //a�ĸ���
                ao = null;//�������ĵ�ǰԪ��

            for(;ai<al;ai++){
                ao = as[ai];
                if(ao.className == "treelcon"){ //�ж��Ƿ������νڵ㱻�����ĵط�
                    ao.onclick = function(){//�󶨵����¼�
                        var iconType = this.innerHTML,//��ȡչʾ����
                            uls = getTypeELement(this.parentNode.parentNode.childNodes,"ul"),
                            uli = 0,          //Ԫ�س�ʼֵ
                            ull = uls.length,//�Ӳ˵�����
                            dis = "block";  //Ĭ����ʾ��չ�����Ӳ˵�
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


