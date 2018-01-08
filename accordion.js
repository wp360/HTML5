(function($){
    $.fn.accordion = function(options){
        var settings = $.extend({},$.fn.accordion.defaults,options);
        this.find("h3")
            .addClass("accordion-header")
            .next()
            .addClass("accordion-panel")
            .slideUp();
        var $this = this;
        this.on("click",".accordion-header",function(e){
            var next = $(e.target).next();
            var isActive = next.attr("data-active");
            if(settings.distinct){
                $this.find("[data-active]")
                    .removeAttr("data-active")
                    .slideToggle();
            }
            next.attr("data-active",true)
                .slideToggle();
        });
        return this;
    };
    $.fn.accordion.defaults = {
        distinct: false
    };
}(jQuery));