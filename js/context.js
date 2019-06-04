$(function() {
        $.contextMenu({
            selector: '.context-menu-one', 
            callback: function(key, options) {
              let m = 'quit clicked!'
							alert(m);
              location.href = './index.html'; 
            },
            items: {
							"quit": {name: "Quit", icon: function(){
                    return 'context-menu-icon context-menu-icon-quit';
              }},
            }
        });
    });

