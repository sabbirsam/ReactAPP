<?php

namespace Inc;
use \Inc\BaseController;

class Enqueue extends BaseController{

    function register(){
        add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue' ) ); 
        // add_action( 'wp_enqueue_scripts', array( $this, 'public_enqueue' ) ); 
    }

    public function admin_enqueue(){
        wp_enqueue_script( 'react-app-main-bundle', $this->plugin_url . 'dist/bundle.js',array('jquery','wp-element'),wp_rand(),true );
        wp_localize_script( 'wp-react-kickoff', 'appLocalizer',[
            'apiUrl' => home_url('/wp-json'),
            'nonce'=> wp_create_nonce( 'wp_rest'),
         ] );
        
         wp_enqueue_style( 'react_form_admin_css',  $this->plugin_url .'assets/admin/react-admin.css');
    }

    // public function public_enqueue(){ }

}