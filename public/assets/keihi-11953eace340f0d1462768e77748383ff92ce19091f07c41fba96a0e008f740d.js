$(function(){oKaisha_search_modal=$("#kaisha-table-modal").DataTable({pagingType:"simple_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"}})}),$(function(){var a,i,e,h,t;$("#summary").click(function(){a=0,i=0,e=0,h=0,$(".koutsuhi").each(function(){var a=$(this).val();isNaN(a)||0==a.length||(i+=parseFloat(a))}),$(".nittou").each(function(){var a=$(this).val();isNaN(a)||0==a.length||(e+=parseFloat(a))}),$(".shukuhaku").each(function(){var a=$(this).val();isNaN(a)||0==a.length||(h+=parseFloat(a))}),$(".sonotha").each(function(){var i=$(this).val();isNaN(i)||0==i.length||(a+=parseFloat(i))});var s=$("#keihihead_\u4eee\u6255\u91d1").val(),l=$("#keihihead_\u652f\u7d66\u54c1").val();(isNaN(s)||0==s.length)&&(s=0),(isNaN(l)||0==l.length)&&(l=0);var n=0,o=0,v=0,r=0;$(".check-remove").each(function(){var a=$(this).val();if("1"==a){var i=$(this).closest("tr").find(".koutsuhi").val();isNaN(i)||0==i.length||(o+=parseFloat(i));var i=$(this).closest("tr").find(".nittou").val();isNaN(i)||0==i.length||(v+=parseFloat(i));var i=$(this).closest("tr").find(".shukuhaku").val();isNaN(i)||0==i.length||(r+=parseFloat(i));var i=$(this).closest("tr").find(".sonotha").val();isNaN(i)||0==i.length||(n+=parseFloat(i))}}),i-=o,e-=v,h-=r,a-=n,$("#keihihead_\u4ea4\u901a\u8cbb\u5408\u8a08").val(i),$("#keihihead_\u65e5\u5f53\u5408\u8a08").val(e),$("#keihihead_\u5bbf\u6cca\u8cbb\u5408\u8a08").val(h),$("#keihihead_\u305d\u306e\u4ed6\u5408\u8a08").val(a),$("#keihihead_\u65c5\u8cbb\u5408\u8a08").val(i+e+h),$("#keihihead_\u5408\u8a08").val(i+e+h+a),$("#keihihead_\u904e\u4e0d\u8db3").val(i+e+h+a-s-l),t=$("#keihihead_shinsheino").val(),$(".shinsheino").val(t),line=0,$(".line-no").each(function(){line+=1,$(this).val(line)})})});