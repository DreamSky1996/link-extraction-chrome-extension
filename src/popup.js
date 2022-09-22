document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.executeScript( null, {"code": 'Array.from(document.getElementsByTagName("a")).map(a => a.href)'}, function(results) {
        var allLinks = results[0];
        var innerHTMLStr = "";
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            if ( element.includes('zoom')) {
                innerHTMLStr += "<p style='color: red;'>" + element + "</p>";
            } else {
                innerHTMLStr += "<p>" + element + "</p>";
            }
            
        }
        var linksDiv = document.getElementById('links');
        linksDiv.innerHTML  = innerHTMLStr;
        
    });
  }, false);