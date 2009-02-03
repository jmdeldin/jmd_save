<?php
/**
 * @name         jmd_save
 * @description  Provides Ctrl+s saving of fields.
 * @author       Jon-Michael Deldin
 * @author_uri   http://jmdeldin.com
 * @version      0.1
 * @type         3
 * @order        5
 */

if (txpinterface === 'admin')
    register_callback('jmd_save', 'admin_side', 'body_end');

/**
 * Inserts JS.
 */
function jmd_save()
{
    $js = <<<EOD
var jmd_save = {};
jmd_save.page = {
    'event': '{$GLOBALS['event']}',
    'step': '{$GLOBALS['step']}',
    'nostep': ['admin', 'css', 'js', 'link', 'page', 'prefs']
};
//inc <save.js>
EOD;
    echo tag($js, 'script', ' type="text/javascript"');
}

