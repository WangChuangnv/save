$(function(){
			
			var mMenu=$("#main_menu");
			var m_top=mMenu.offset().top;
			var lis=mMenu.find("li");
			console.log(lis);
			 lis.mouseover(function(){
				 
				 if(this.className=="no_sub"){
						
					 }else{
						 
						var _top=$(this).offset().top;
						
						$(this).find(".sub_menu").css({
							"top":_top-m_top-1+'px',
							"display":"block"
	               			 });
						$("#border").css({
							"top":_top-m_top,
							"display":"block"
						});
				 	}        
	
			});
			
			lis.mouseout(function(){
				 if(this.className=="no_sub"){
						
					 }else{ 
					 	$(this).find(".sub_menu").css({
	                	 	"display":"none"
	                		});
	                		$("#border").css({
							"display":"none"
						});
					 }
	               
	              
			});
	
	
		});