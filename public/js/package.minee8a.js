var paymentLoaded=!1,total=0,package_id=null,planId=null,paddleId=null;addEventListener("message",(function(a){try{const e=JSON.parse(a.data);"payment-success"==e.event?$('<form action="'+e.data.url+'" method="POST"></form>').appendTo($(document.body)).submit():"change-height"==e.event?($("#payment").css("height",e.data.height+50),paymentLoaded=!0,$(".loading-iframe").remove(),sendEventToIframe("#payment","click-item-package",{total:total,package_id:package_id,planId:planId,paddleId:paddleId})):"reload-page"==e.event&&location.reload()}catch(a){}}),!1),$(document).ready((function(){checkAccount(),$(".item-package").on("click",(async function(){if(total=$(this).attr("data-order-total"),package_id=$(this).attr("data-id"),planId=$(this).attr("data-plan-id"),paddleId=$(this).attr("data-product-id"),package_id){if($(".item-package").removeClass("active"),$(this).addClass("active"),0==firstScroll){if(!user_info||!user_info.id)return void(location.href="/signin");document.querySelector("#payment").scrollIntoView({behavior:"smooth"})}else firstScroll=!1;sendEventToIframe("#payment","click-item-package",{total:total,package_id:package_id,planId:planId,paddleId:paddleId})}})),window.innerWidth<1030?$(".mobile-plan-container .item-package.active").click():$(".table-container .item-package.active").click()}));