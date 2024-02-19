<?php
/* Proverka na sesiski broj i printanje na userot i paswordot
session_start();
echo session_id() . '<br>';
print_r($_SESSION['LOGIN']);
*/
session_start();
if (isset($_SESSION['LOGIN']) == $_SESSION['LOGIN']) {
    echo "LOGIN";
}
exit();
