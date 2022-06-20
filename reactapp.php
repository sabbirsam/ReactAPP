<?php
/*
Plugin Name: React APP
Plugin URI: http://wppool.dev
Description: React plugin for lerning.
Version: 1.0.0
Author: WPPOOL
Author URI: http://wppool.dev
Requires at least: 5.0
Requires PHP:      5.4
License:           GPL-2.0+
License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
Text Domain: react_app
*/

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');

if (file_exists(dirname(__FILE__).'/vendor/autoload.php')) {
    require_once dirname(__FILE__).'/vendor/autoload.php';
}

use Inc\Activate;
use Inc\Deactivate;
use Inc\Enqueue;
use Inc\AdminDashboard;
use Inc\BaseController;
use Inc\WP_React_Settings_Rest_Route;

if(!class_exists('ReactForm')){
    class ReactForm{
        public $react_app_load_base;
        public function __construct(){
            $this->includes();
            $this->react_app_load_base = plugin_basename(__FILE__); 
        }

        function register(){
            add_action("plugins_loaded", array( $this, 'react_app_load' )); 
        }
        function react_app_load(){
            load_plugin_textdomain('react_app', false,dirname(__FILE__)."languages");
        }
        /**
         * Classes 
         */
        public function includes() {
            new AdminDashboard(); 
            
            $enqueue=new Enqueue();
            $enqueue->register();

            new BaseController();

            new WP_React_Settings_Rest_Route();
        }
        function activate(){   
            Activate::activate();
        }
        function deactivate(){ 
            Deactivate::deactivate(); 
        }
    }
    $reactForm = new ReactForm;
    $reactForm ->register();
    
    register_activation_hook (__FILE__, array( $reactForm, 'activate' ) );
    register_deactivation_hook (__FILE__, array( $reactForm, 'deactivate' ) );

}