function selectFileImage(fileObj) {
	//loading.gif
	// $(".upload_show li").eq(nowNum).find('img').attr('src','img/up.gif');

	var file = fileObj.files['0'];
	var file_len = fileObj.files.length;
	// alert(fileObj.files.length);
	for (var i = 0; i < file_len; i++) {
		FileImageControl(fileObj.files[i]);
		// console.log(fileObj.files[i]);
	}
	//图片方向角 added by lzk
	var Orientation = null;

}
var ImageFile = [];
function FileImageControl(file){
	if (file) {
		//console.log("正在上传,请稍后...");
		var rFilter = /^(image\/jpeg|image\/png)$/i; // 检查图片格式
		if (!rFilter.test(file.type)) {
			//showMyTips("请选择jpeg、png格式的图片", false);
			return;
		}
		// var URL = URL || webkitURL;
		//获取照片方向角属性，用户旋转控制
		EXIF.getData(file, function() {
		   // alert(EXIF.pretty(this));
		    EXIF.getAllTags(this); 
		    //alert(EXIF.getTag(this, 'Orientation')); 
		    Orientation = EXIF.getTag(this, 'Orientation');
		    //return;
		});
		
		var oReader = new FileReader();
		var expectWidth,expectHeight;
		oReader.onload = function(e) {
			//var blob = URL.createObjectURL(file);
			//_compress(blob, file, basePath);
			var image = new Image();
			image.src = e.target.result;
			// console.log(image.src);
			image.onload = function() {
				var expectWidth = this.naturalWidth;
				var expectHeight = this.naturalHeight;
				//alert(expectWidth+'###'+expectHeight)
				if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 223) {
					expectWidth = 223;
					expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
				} else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 370) {
					expectHeight = 370;
					expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
				}
				var canvas = document.createElement("canvas");
				var ctx = canvas.getContext("2d");
				canvas.width = expectWidth;
				canvas.height = expectHeight;
				// alert(canvas.width+';'+canvas.height);
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
				var base64 = null;
				base64 = canvas.toDataURL("image/jpeg", 0.6);
				//修复ios
				if (navigator.userAgent.match(/iphone/i)) {
					// console.log('iphone');
					//alert(expectWidth + ',' + expectHeight);
					//如果方向角不为1，都需要进行旋转 added by lzk
					if(Orientation != "" && Orientation != 1){
						// alert('旋转处理');
						switch(Orientation){
						 	case 6://需要顺时针（向左）90度旋转
						 		//alert('需要顺时针（向左）90度旋转');
						 		
						 		rotateImg(this,'left',canvas,expectWidth,expectHeight);
						 		break;
						 	case 8://需要逆时针（向右）90度旋转
						 		//alert('需要顺时针（向右）90度旋转');
						 		rotateImg(this,'right',canvas,expectWidth,expectHeight);
						 		break;
						 	case 3://需要180度旋转
						 		//alert('需要180度旋转');
								rotateImg(this,'right',canvas,expectWidth,expectHeight);//转两次
								rotateImg(this,'right',canvas,expectWidth,expectHeight);
								break;
						}		
					}
					
					/*var mpImg = new MegaPixImage(image);
					mpImg.render(canvas, {
						maxWidth: 800,
						maxHeight: 1200,
						quality: 0.6,
						orientation: 8
					});*/
					base64 = canvas.toDataURL("image/jpeg", 0.6);
				}else if (navigator.userAgent.match(/Android/i)) {// 修复android
					//var encoder = new JPEGEncoder();
					base64 = canvas.toDataURL("image/jpeg", 0.6);
					//base64 = encoder.encode(ctx.getImageData(0, 0, expectWidth, expectHeight), 80);
				}else{
					//alert(Orientation);
					if(Orientation != "" && Orientation != 1){
						//alert('旋转处理');
						switch(Orientation){
						 	case 6://需要顺时针（向左）90度旋转
						 		// alert('需要顺时针（向左）90度旋转');
						 		rotateImg(this,'left',canvas,expectWidth,expectHeight);
						 		break;
						 	case 8://需要逆时针（向右）90度旋转
						 		// alert('需要顺时针（向右）90度旋转');
						 		rotateImg(this,'right',canvas,expectWidth,expectHeight);
						 		break;
						 	case 3://需要180度旋转
						 		// alert('需要180度旋转');
								rotateImg(this,'right',canvas,expectWidth,expectHeight);//转两次
								rotateImg(this,'right',canvas,expectWidth,expectHeight);
								break;
						}		
					}
					
					base64 = canvas.toDataURL("image/jpeg", 0.6);
				}
				//uploadImage(base64);

				// console.log(base64);
				//执行操作
				ImageFile[0]=base64;
				//$("#picImg").attr("src",ImageFile[0]);
				//$(".btn_upload>img").attr("src",ImageFile[0]);
				//$(".p3").show().find("img").attr("src",ImageFile[0])
				if(uploadSecFunc) uploadSecFunc(ImageFile,expectWidth,expectHeight);
			};
		};
		oReader.readAsDataURL(file);
	}
}

//对图片旋转处理 added by lzk
function rotateImg(img, direction,canvas,expectWidth,expectHeight) {  
		//alert(img);
        //最小与最大旋转方向，图片旋转4次后回到原方向  
        var min_step = 0;  
        var max_step = 3;  
        //var img = document.getElementById(pid);  
        if (img == null) return;  
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错  
        var width = expectWidth;//img.width; //
        var height = expectHeight;// img.height;//
        // alert(width+';'+height);
        //var step = img.getAttribute('step');  
        var step = 2;  
        if (step == null) {  
            step = min_step;  
        }  
        if (direction == 'right') {  
            step++;  
            //旋转到原位置，即超过最大值  
            step > max_step && (step = min_step);  
        } else {  
            step--;  
            step < min_step && (step = max_step);  
        }  
        //img.setAttribute('step', step);  
        /*var canvas = document.getElementById('pic_' + pid);  
        if (canvas == null) {  
            img.style.display = 'none';  
            canvas = document.createElement('canvas');  
            canvas.setAttribute('id', 'pic_' + pid);  
            img.parentNode.appendChild(canvas);  
        }  */
        //旋转角度以弧度值为参数  
        var degree = step * 90 * Math.PI / 180;  
        var ctx = canvas.getContext('2d');  
        switch (step) {  
            case 0:  
                canvas.width = width;  
                canvas.height = height;  
                ctx.drawImage(img, 0, 0, expectWidth, expectHeight);  
                break;  
            case 1:  
                canvas.width = height;  
                canvas.height = width;  
                ctx.rotate(degree);  
                ctx.drawImage(img, 0, -height, expectWidth, expectHeight);  
                break;  
            case 2:  
                canvas.width = width;  
                canvas.height = height;  
                ctx.rotate(degree);  
                ctx.drawImage(img, -width, -height, expectWidth, expectHeight);  
                break;  
            case 3:  
                canvas.width = height;  
                canvas.height = width;  
                ctx.rotate(degree);  
                ctx.drawImage(img, -width, 0, expectWidth, expectHeight);  
                break;  
        }  
    }  