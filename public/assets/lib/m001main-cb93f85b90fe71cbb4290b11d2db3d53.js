function dropdown_tani_select(){$("#tani_select li").click(function(){$("#header_tani").val($(this).text())})}function retrieve_hinme(){var e=$("#header_hinme").val();jQuery.ajax({url:"getAjax",data:{id:"header_hinme",hinme_code:e},type:"POST",success:function(e){$("#header_hinme_name").attr("value",e.hinme_name);for(var t=e.dropdown,a=0;10>a;a++)$(".flag").remove();for(var a=0;a<t.length;a++)$("#tani_select").append("<li class = 'flag'><a href='#'>"+t[a]+"</a></li>"),dropdown_tani_select()},failure:function(){console.log("Unsuccessful")}})}var pw_selected_hinme;$(document).ready(function(){oTable=$("#example").DataTable({scrollY:200,scrollCollapse:!0,oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"},deferRender:!0,dom:"frtiS"}),$("#example tbody").on("click","tr",function(){var e=oTable.row(this).data();console.log(e[0]),$("#selected_hinme_code").attr("value",e[0]),$(this).hasClass("selected")?($(this).removeClass("selected"),$(this).removeClass("success")):(oTable.$("tr.selected").removeClass("selected"),oTable.$("tr.success").removeClass("success"),$(this).addClass("selected"),$(this).addClass("success"))}),$("#header_kozo").keydown(function(e){if(9==e.keyCode&&!e.shiftKey){var t=$("#header_kozo").val();jQuery.ajax({url:"getAjax",data:{id:"header_kozo",kozo_code:t},type:"POST",success:function(e){$("#header_kozo_name").attr("value",e.kozo_name)},failure:function(){console.log("Unsuccessful")}})}}),$("#header_hinme").keydown(function(e){9!=e.keyCode&&13!=e.keyCode||e.shiftKey||retrieve_hinme()}),dropdown_tani_select()}),$(function(){$("#datetimepicker5").datetimepicker({pickTime:!1,language:"ja-JA"})}),$(function(){$("#tree_update").click(function(){$("#selected_button").attr("value","tree_update")}),$("#search").click(function(){$("#selected_button").attr("value","search")}),$("#cancel").click(function(){$("#selected_button").attr("value","cancel")}),$("#close").click(function(){$("#selected_button").attr("value","close")}),$("#new").click(function(){$("#selected_button").attr("value","new")}),$("#msg_ok").click(function(){$("#msgbox").modal("hide"),window.location.replace("/main001/index")}),$("#hinme_search_ok").click(function(){$("#pw_hin").modal("hide"),$("#header_hinme").attr("value",pw_selected_hinme),retrieve_hinme()}),$("#pw_hinme_search").click(function(){$("#selected_button").attr("value","pw_hinme_search")})}),$(function(){retrieve_hinme()}),$(function(){$("input[maxlength]").maxlength()}),$(function(){pw_hinme_table=$("#pw_hinme_table").DataTable({pagingType:"full",scrollCollapse:!0,oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"}}),$("#pw_hinme_table tbody").on("click","tr",function(){var e=pw_hinme_table.row(this).data();pw_selected_hinme=e[0],$(this).hasClass("selected")?($(this).removeClass("selected"),$(this).removeClass("success")):(pw_hinme_table.$("tr.selected").removeClass("selected"),pw_hinme_table.$("tr.success").removeClass("success"),$(this).addClass("selected"),$(this).addClass("success"))})}),$(function(){var e=$("#check_flag").attr("value");"1"==e&&$("#pw_hin").modal("show")});