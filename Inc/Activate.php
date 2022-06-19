<?php
/**
 * 
 */
namespace Inc;

class Activate{

    public static function activate(){ //make it static so I can call it direct on a function
        flush_rewrite_rules();
    }
}
