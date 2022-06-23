  $(function () {
    if (!sessionStorage.ttoken || sessionStorage.ttoken === null) {
        location.href = "secondpage.html";
});
    
	var linkl = crossroads.addRoute('foo.php{?query}', function (){
		sessionStorage.clear();
        location.href = "secondpage.html";
    });
    // query strings are decoded into objects
	});
	
	.$ajax({
		type: post,
		url: https://kerbau.odaje.biz/getstaff.php,
		data: datalist,
		cache: false.
		success: function(datareceived){
			var newData = JSON.parse(newdata);
			var lastIndex = myData.length - 1;
            var htmlText = "";
            if (myData[lastIndex].status === 1) {
                for (var i = 0; i < lastIndex; i++) {
                    htmlText = htmlText +    
                }
                $("#accordionExample").html(htmlText);
            }
			
			//instructions to execute when the ajax call is succeeds
		},
		error:function(){
			//instructions to execute when the ajax call is failed
		}
	});
	
	$('#maintable tbody').html(htmlText) 

  });
});
</script>