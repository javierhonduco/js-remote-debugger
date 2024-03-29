
		var ISALREADYSTARTED = false;
		var remoteDebugger = {};

		remoteDebugger.settings = {

		    version: 0.2,

		    remoteUrl: "http://my.remote.debugging.endpoint.local/",

		    method: "xhr",
		    // script, xhr { jsonp }, nolocal,#here
		    enableOnError: true,

		    JQUERY_PATH: "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"


		};



		remoteDebugger.log = function(message, breakpoint) {

		    if (!ISALREADYSTARTED) {
		        remoteDebugger.start();

		    }
		    
		    if (remoteDebugger.settings.method !== "xhr"){
		    
		    
		        var wrapper = document.getElementsByTagName("head")[0];
		        var script_itself = document.createElement(remoteDebugger.settings.method );
		        script_itself.setAttribute("src", remoteDebugger.settings.remoteUrl + "Error: %s at line %s", (message, breakpoint));

		    
		    } else {

		    	setTimeout(function(){ // Handle with a callbak...

					$.ajax({  //  REMEMBER: REQUEST MUST COMPLISH SAME ORIGIN RULES
			          url: remoteDebugger.settings.remoteUrl + "?=error: "+message+" &line=" + breakpoint
			        })
			        .done(function() { 
			          c.log("Good for you");

			        })



		    	},1000)
		     

		       
		    }
		        
		        



		};


		remoteDebugger.start = function() {

		     ISALREADYSTARTED = true;

		    if (remoteDebugger.settings.enableOnError) {
		        window.onerror = function(msg, line) {
		            remoteDebugger.log(msg, line);

		        };


		    }

		    if (remoteDebugger.settings.method == "xhr" && typeof jQuery == "undefined") {
		        var wrapper = document.getElementsByTagName("head")[0];
		        var script_itself = document.createElement("script");
		        script_itself.setAttribute("type", "text/javascript");
		        script_itself.setAttribute("src", remoteDebugger.settings.JQUERY_PATH);
		        script_itself.setAttribute("async");


		        wrapper.appendChild(script_itself);
		    }


		};
