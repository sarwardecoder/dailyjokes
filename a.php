<?php
# Write your PHP code from here

// fscanf(STDIN,"%d",$y);
$y = rand(100, 9999);
findLeapYear($y);
function findLeapYear($y)
{
    if ($y % 100 == 0) {
        if ($y % 400 == 0) {
            if ($y % 4 == 0) {
                echo $y . " is a leap year.";
            }
        }
    }else{
        if ($y % 4 == 0) {
            echo $y . " is a leap year.";
        }
    }

}
;

?>