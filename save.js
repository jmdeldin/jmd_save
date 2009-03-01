var jmd_save = {};
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
 * Submits the main-editing form.
 */
jmd_save.submit = function()
{
    var btn = $('.publish');
    if (btn.length > 0)
        return btn[0].click();
};

