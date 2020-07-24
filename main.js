var element = document.body;
                $("input").click (function dark() {
                    if ($("body").hasClass('dark-mode')){
                         $("body").removeClass("dark-mode");
                         $("body").addClass("light-mode");
                         document.getElementById("text").innerHTML = "<h2>Let there be Light!</h2>";
                    }
                    else {
                   $("body").addClass("dark-mode");
                    $("body").removeClass("light-mode");
                    document.getElementById("text").innerHTML = "<h1>Tick Tock!</h1><p>You're now in 1987.</p>";
                    }
                });