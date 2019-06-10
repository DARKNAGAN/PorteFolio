var takeScreenShot = function() {
    html2canvas(document.getElementById("cv"), {
        onrendered: function (canvas) {
            var tempcanvas=document.createElement('canvas');
			tempcanvas.width=1300;
            tempcanvas.height=2000;
            var context=tempcanvas.getContext('2d');
			context.drawImage(canvas,370,100,1200,1930,20,0,1300,2030);
            //context.drawImage(canvas,0,0,1920,2380,50,0,1920,2380);
            var link=document.createElement("a");
            link.href=tempcanvas.toDataURL('image/png');   //function blocks CORS
           // link.download = 'CV.jpg';
            //link.click();
        var imgData = link.href
		var doc = new jsPDF();
		doc.addImage(imgData, 'PNG', 0, 0, 210, 300)

    doc.save('CV_CUNAT-BRULE_Christian.pdf');
	
		}
    });
}

