$("#feedbackbutton").click(function() {
	var message = $("#messagebox").val();

	$.ajax({
	  type: "POST",
	  url: "https://mandrillapp.com/api/1.0/messages/send.json",
	  data: {
	    "key": "cVyH6dktBNIpjAev7pvaww",
	    "message": {
	      "from_email": "psefeedback@gmail.com",
	      "to": [
	          {
	            "email": "nkasala@psegammazeta.org",
	            "name": "RECIPIENT NAME (OPTIONAL)",
	            "type": "to"
	          }
	        ],
	      "autotext": "true",
	      "subject": "PSE Anonymous Feedback",
	      "html": message
	    }
	  }
	 });
});