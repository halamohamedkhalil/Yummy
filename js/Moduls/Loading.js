export function Loading(){
    function hide(){
        $("body").css("overflow", "visible");
        $(".loading").fadeOut(300);
    }
    function show(){
        $("body").css("overflow", "hidden");
        $(".loading").fadeIn(300);
    }
    function hideInner(){
        $("body").css("overflow", "visible");
        $(".innerLoading").fadeOut(300);
    }
    function showInner(){
        $("body").css("overflow", "hidden");
        $(".innerLoading").fadeIn(300);

    }
    return {hide,show,hideInner,showInner}
}