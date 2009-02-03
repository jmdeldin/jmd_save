jmd_save.main = function()
{
    var isMod = 0; // if a modifier key has been pressed
    var mod = 18; // alt key
    if (/Mac/.test(navigator.userAgent))
        mod = 17; // ctrl key
    document.onkeydown = function(e)
    {
        if (e.which === mod)
            isMod = 1;
        if (e.which === 83 && isMod === 1)
        {
            jmd_save.submit();
            return false;
        }
    };
    // cleanup
    document.onkeyup = function(e)
    {
        if (e.which === mod)
            isMod = 0;
    };
}();

/**
 * Checks whether an item is in an array.
 *
 * @param int|string needle
 * @param array      haystack
 */
jmd_save.inArray = function(needle, haystack)
{
    for (var i = 0; i < haystack.length; i++)
    {
        if (haystack[i] === needle)
            return 1;
    }
    return 0;
};

/**
 * Submits the main-editing form for a given event.
 */
jmd_save.submit = function()
{
    // if there's no step and it's not one of the nostep events,
    // and if it's a *save step, exit.
    if (!jmd_save.page.step &&
        !jmd_save.inArray(jmd_save.page.event, jmd_save.page.nostep) &&
        jmd_save.page.step.search('/save/') === -1)
        return false;
    switch (jmd_save.page.event)
    {
        case 'admin':
            return jmd_save.getForm('edit').submit();
            break;

        case 'article':
            if (jmd_save.page.step === 'edit')
                return document.article.save.click();
            return document.article.publish.click();
            break;

        case 'css':
            return jmd_save.getForm('css').submit();
            break;

        case 'category':
        case 'discuss':
        case 'link':
            return jmd_save.getForm('edit').submit();
            break;

        case 'file':
            return jmd_save.getForm('file-status').submit();
            break;

        case 'form':
            return jmd_save.getForm('form').save.click();
            break;

        case 'image':
            return jmd_save.getForm('image-name', 1).submit();
            break;

        case 'js':
            return jmd_save.getForm('js').submit();
            break;

        case 'page':
            return jmd_save.getForm('html', 1).submit();
            break;

        case 'prefs':
            if (jmd_save.page.step !== 'list_languages')
                return jmd_save.getForm('list').Submit.click();
            break;
        default:
    }
};

/**
 * Returns the parent/grandparent form element of an ID.
 *
 * @param string childId
 * @param bool   isGrandchild
 */
jmd_save.getForm = function(childId, isGrandchild)
{
    isGrandchild = (typeof(isGrandchild) === 'undefined') ? 0 : 1;
    var child = document.getElementById(childId);
    if (child)
    {
        var form = child.parentNode;
        if (isGrandchild)
            return form.parentNode;
        return form;
    }
};

