
chrome.runtime.onMessage.addListener(handleRequest);

/*
function handleRequest(index, sender, sendResponse) {
  sendResponse(); // Close connection.

  withBookmarksBar(function(bookmarks_bar) {
    var item = bookmarks_bar.children[index-1];
    if (item && item.url) {

      chrome.tabs.update(undefined, {url: item.url});
    }
  });
}*/


function withBookmarksBar(callback)
{
    chrome.bookmarks.getTree(function(array)
    {
        var bookmarks_bar = array[0].children[0];
        callback(bookmarks_bar);
    });
}

function handleRequest()
{
    withBookmarksBar(function(bookmarks_bar)
    {
        for(var i=0; i<bookmarks_bar.length; i++)
        {

        }
    });
}
