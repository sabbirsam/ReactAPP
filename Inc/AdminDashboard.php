<?php

namespace Inc;

class AdminDashboard{
    function __construct(){
        add_action("admin_menu", array($this, 'add_admin_pages'));
    }

    public function add_admin_pages(){
        add_menu_page( 
            'React-Form', //page title
            'React-Form',  //menus title
            'manage_options', //capa
            'react_form', //slug
            array($this, 'form_pages'),//function 
            'dashicons-buddicons-replies',
                90 );
    }
  
    public function form_pages()
    {
        require_once plugin_dir_path(__FILE__).'../template/dashboard.php';
    }

}