/*开起进度条*/
NProgress.start();

/*结束进度条*/
NProgress.done();

$(document).ajaxStart(function(){
  NProgress.start();
});
$(document).ajaxStop(function(){
  NProgress.done();
});

//如果不是登陆页，发送ajax请求，查询用户状态，如果没有登陆，就拦截
// if(location.href.indexOf("login.html")===-1){
//   $.ajax({
//     type:"get",
//     url:"/employee/checkRootLogin",
//     dataType:"json",
//     success:function(info){
//       if(info.success){
//         console.log("用户已登陆");
//       }
//       if(info.error === 400){
//         location.href="login.html";
//       }
//     }
//   });
// }

$(function(){
// 1.分类管理的切换功能
  $(".nav .category").click(function(){
    $(".child").stop().slideToggle();
  });
// 2.左侧侧边栏切换功能
  $(".lt_main .icon_menu").click(function(){
    console.log("cccc");
    $(".lt_aside,.lt_main,.lt_topbar").stop().toggleClass("hidemenu");
    // $(".lt_aside").stop().toggleClass("hidemenu");
  });
// 3.点击退出按钮，弹出模态框
  $(".lt_main .icon_logout").click(function(){
    $("#logoutModal").modal("show");
  });
  // 4.模态框点击退出按钮，退出模态框
  $(".logoutBtn").click(function(){
    $.ajax({
      type:"get",
      url:"/employee/employeeLogout",
      success:function(info){
        // console.log("响应成功");
        location.href="login.html";
      }
    });
  });
});

