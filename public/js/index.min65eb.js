function hideMatch(a=!0){let t=$("[data-match-timestamp]"),e=moment().format("DD/MM/YYYY");t.map((function(t,d){let i=$(d).data("match-timestamp");if(i){let t=moment.unix(i).format("DD/MM/YYYY");if(e!=t&&a)$(d).remove();else{let a=$(d).find("[data-timestamp]");if(a.length>0){let t=$(a).data("format");$(a).html(moment.unix(i).format(t))}}}})),$(".category").each((function(a,t){$(t).find(".category-row.hide").length==$(t).find(".category-row").length&&$(t).addClass("hide")}))}$(document).ready((function(){checkAccount();let a=moment().startOf("day").add(-3,"day"),t=moment();for(let e=0;e<7;e++){let e=a.add(1,"day"),d=t.format("YYYY-MM-DD")==e.format("YYYY-MM-DD")?"active":"";$('<div class="calendar-item '+d+'" data-time="'+e.unix()+'"> <div class="calendar-day">'+e.format("DD")+'</div> <div class="calendar-day-of-week">'+e.format("ddd")+"</div> </div>").insertBefore("#calendar-minimized .calendar-item:last-child")}a=moment().startOf("day").add(-3,"day");for(let e=0;e<14;e++){let e=a.add(1,"day"),d=t.format("YYYY-MM-DD")==e.format("YYYY-MM-DD")?"active":"";$("#calendar-expanded .bottom").append('<div class="calendar-item active-no-bg '+d+'" data-time="'+e.unix()+'"> <div class="calendar-day">'+e.format("DD")+'</div> <div class="calendar-day-of-week">'+e.format("ddd")+"</div> </div>")}$(document).on("click",".calendar-item:not(.icon)",(function(){let a=$(this).data("time"),t="/home-data?timestamp="+a+"&routeName="+routeName+"&match_type="+matchType;$(".calendar-item").removeClass("active"),$(`.calendar-item:not(.icon)[data-time="${a}"]`).addClass("active"),$('[data-tab="home"]').click(),$.ajax({url:t,type:"GET",success:function(a){$("#categories-container-1").html(a),hideMatch(!1)}})})),$(".tabs-home .tab").on("click",(function(){$(".tabs-home .tab").removeClass("active"),$(this).addClass("active"),"right-now"==$(this).data("tab")?($(".category-row:not(.num_dot)").addClass("hide"),$(".category").each((function(a,t){$(t).find(".category-row.hide").length==$(t).find(".category-row").length&&$(t).addClass("hide")}))):($(".category-row:not(.num_dot)").removeClass("hide"),$(".category").removeClass("hide")),hideMatch(!1)})),hideMatch(),$(".calendar-item.active")[0].click()}));