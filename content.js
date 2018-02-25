document.addEventListener('keydown', handleKeyDown, false);
/*
If modifier is held, updates tabs with number labels
when it's released, rename back to original
*/
function handleKeyDown()
{
    if (!modifierIsDown(event))
    {
        return;
    }
    chrome.extension.sendMessage(1);
    if
}

function modifierIsDown(event)
{
    //returns true once, until modifier is released
    return activeModifiers(event) == expectedModifiers();
}

function modifierRelease(event)
{

}

function expectedModifiers()
{
    if (navigator.platform.indexOf("Mac") === 0)
    {  // OS X
        return 'Ctrl';
    }
    else if (navigator.platform.indexOf("Win") === 0)
    {  // Windows
        return 'Alt';
    }
    else
    {  // Linux
        return 'Meta';
    }
}

function activeModifiers(event)
{
    var modifiers = [];
    if (event.shiftKey) modifiers.push('Shift');
    if (event.ctrlKey) modifiers.push('Ctrl');
    if (event.altKey) modifiers.push('Alt');
    if (event.metaKey) modifiers.push('Meta');
    //return modifiers.join('+');
    return modifiers.join();
}
