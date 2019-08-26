function _sd_split(info = "",hook=""){
    return info != undefined && info.trim()!="" ? info.split(hook).filter(function(entry) { return entry.trim() != ''; }) : []; 
}
function validate_file(This){
    var _sd_length    = This.getAttribute("_sd_length");
    var _sd_min_height= This.getAttribute("_sd_min_height");
    var _sd_min_width = This.getAttribute("_sd_min_width");
    var _sd_height    = This.getAttribute("_sd_height");
    var _sd_width     = This.getAttribute("_sd_width");
    var _sd_size      = This.getAttribute("_sd_size");
    var _sd_type  	  = This.getAttribute("_sd_type"); //"jpg|png|docs|"
    var _sd_message   = "";
	var _sd_type_array = _sd_split(_sd_type,'|');
    
    if(_sd_type_array.length){

        if(This.files.length){
            //console.log(This.files);
            for (x of This.files) {
                var _x_size = Math.round(x.size/1024);
                var _x_name = x.name;
                var _x_type = _sd_split(x.type,"/")[1].toString();
                var _m_type = _sd_split(x.type,"/")[0].toString();
                if(_sd_type_array.includes(_x_type)){
                    
                    if(_sd_size != undefined){
                        if(_sd_size < _x_size){
                        	_throw_message(This,"Size should less then : "+_sd_size);return;
                        }
                    }
                    
                    if( ((_sd_height != undefined && _sd_width != undefined) || (_sd_min_height != undefined && _sd_min_width != undefined)) && _m_type == 'image'){
                        
                        var u   = URL.createObjectURL(x);
                        var img = new Image;
                        img.src = u;
                        img.onload = function(_sd_message){
                        	var img_h = parseInt(img.height);
                            var img_w = parseInt(img.width);
                            if(_sd_height != undefined && _sd_width != undefined){
                                 if(parseInt(_sd_height) < img_h || parseInt(_sd_width) < img_w){
                                 	_throw_message(This,"Dimention should be height : "+_sd_height+", width : "+_sd_width);
                                 }
                            }
                            
                            if(_sd_min_height != undefined && _sd_min_width != undefined){
                               if(parseInt(_sd_min_height) > img_h || parseInt(_sd_min_width) > img_w){
                               		_throw_message(This,"Minimum Dimention should be height : "+_sd_height+", width : "+_sd_width);
                            	}
                            }
                        }
                    }
                    
                }else{
                    _throw_message(This,"File Type is incorrect, it should be : "+_sd_type);
                }
            }
        }

    }else{
        console.log("_sd : _sd_type is not setted");
    }
}
function _throw_message(This,message=""){
	if(message!=""){
        This.value = "";
        alert(message);
    }
}
