What's that?
---------------------

Just needed a way to send to the server window.onerror logs, and sometimes another kind of data ;)

Usage
------
  
  Settings:
    



    remoteDebugger.settings = {

        version: 0.2,

        remoteUrl: "http://my.remote.debugging.endpoint.local/",

        method: "xhr",
        // script, xhr { jsonp }
        enableOnError: true,

        JQUERY_PATH: "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"


    };


  Log:



      remoteDebugger.log(message, line)


  Start:


      remoteDebugger.start()


      Just if you wanna start the window.onerror event if enabled... Ah! Also loads jQuery if needed :P


      Enjoy! ;)