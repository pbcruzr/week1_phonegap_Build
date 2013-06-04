var abs_path = $(location).attr('href'); //Absolute page of current page
var current_page = abs_path.substring(abs_path.lastIndexOf('/')); // Current page file name with extention
var current_page_title = current_page.substring(1,current_page.lastIndexOf('.')); // Current page file name without extention



var STICKIES = (function () {
    var initStickies = function initStickies() {
        $("<div />", {
            /*text : "Add note",*/
            "class" : "add-sticky",
            click : function () { createSticky(); }
        }).insertBefore('#notes-button');
        initStickies = null;
    },
    openStickies = function openStickies() {
        initStickies && initStickies();
        for (var i = 0; i < localStorage.length; i++) {
            if(JSON.parse(localStorage.getItem(localStorage.key(i))).id.search(current_page_title) != -1)
                createSticky(JSON.parse(localStorage.getItem(localStorage.key(i)))); 
        }
    },
    createSticky = function createSticky(data) {
        var time_now = new Date().getTime();
        data = data || { id : current_page_title + "_" +time_now, top : (200 + $(window).scrollTop()) + "px", left : "40px", text : "Note Here" }

        return $("<div />", {
            "class" : "sticky",
            'id' : data.id
             })
            .prepend($("<div />", { "class" : "sticky-header"} )
                .append($("<span />", {
                    "class" : "sticky-status",
                    click : saveSticky
                }))
                .append($("<span />", {
                    "class" : "close-sticky",
                    //text : "",
                    click : function () { deleteSticky($(this).parents(".sticky").attr("id")); }
                }))
				.append($("<span />", {
                    "class" : "photo-sticky",
					click: capturePhoto
                }))
				.append($("<span />", {
                    "class" : "photo-refresh",
					click: deletePhoto
                }))
				
				.append($("<img />", {
                    "id" : "thumbnail",
					"width": "186px"
					
					
					
					
                }))
            )
            .append($("<div />", {
                html : data.text,
                contentEditable : true,
                "class" : "sticky-content",
                keypress : markUnsaved
            }))
        .draggable({
            handle : "div.sticky-header",
            stack : ".sticky",
            start : markUnsaved,
            stop  : saveSticky,
			containment: "#container",
			cursor : "move",
         })
        .css({
            position: "absolute",
            "top" : data.top,
            "left": data.left
        })
        .focusout(saveSticky)
        .appendTo('body');
    },
	


	
capturePhoto = function capturePhoto() {
	try {
		navigator.camera.getPicture(
			onSuccess,
			onFail,
			{
				quality: 50,
				destinationType: Camera.DestinationType.DATA_URL,
				sourceType : Camera.PictureSourceType.CAMERA, 
  				allowEdit : true,
  				encodingType: Camera.EncodingType.JPEG
				

			}
		);
	} catch(e) {
		console.log(e);
	}
}

function onSuccess(imageData) {
	var thumbnail = document.getElementById('thumbnail');
	thumbnail.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
	alert('Failed because:' + message);
};



 

 

//enlargeImage = function enlargeImage() {
	//alert('pop-up');
//},

deletePhoto = function deletePhoto() {
			
			localStorage.removeItem("thumbnail.src");
			$("#thumbnail").fadeOut(200, function () { $(this).remove(); });
			$("span.photo-refresh").after('<img style="width: 180px;" id="thumbnail">')
			
    },



    deleteSticky = function deleteSticky(id) {
			localStorage.removeItem("sticky-" + id);
			$("#" + id).fadeOut(200, function () { $(this).remove(); });
    },
	
    saveSticky = function saveSticky() {
        var that = $(this),  sticky = (that.hasClass("sticky-status") || that.hasClass("sticky-content")) ? that.parents('div.sticky'): that,
                obj = {
                    id  : sticky.attr("id"),
                    top : sticky.css("top"),
                    left: sticky.css("left"),
                    text: sticky.children(".sticky-content").html()                }
        localStorage.setItem("sticky-" + obj.id, JSON.stringify(obj));
        sticky.find(".sticky-status").text("saved");
    },
    markUnsaved = function markUnsaved() {
        var that = $(this), sticky = that.hasClass("sticky-content") ? that.parents("div.sticky") : that;
        sticky.find(".sticky-status").text("unsaved");
    }
    return {
        open   : openStickies,
        init   : initStickies,
        "new"  : createSticky,
        remove : deleteSticky
    };
}());

  