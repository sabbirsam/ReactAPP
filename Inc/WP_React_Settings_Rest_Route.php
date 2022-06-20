<?php

namespace Inc;
class WP_React_Settings_Rest_Route{

    public  function __construct(){
        add_action("rest_api_init", array($this, 'create_rest_route'));
    }

    public function create_rest_route(){
        register_rest_route( 'react_app/v1', '/settings', [
            'methods'=>'GET',
            'callback'=>[$this, 'get_settings'],
            'permission_callback'=>[$this, 'get_settings_permission']
        ] );

        register_rest_route( 'react_app/v1', '/settings', [
            'methods'=>'POST',
            'callback'=>[$this, 'save_settings'],
            'permission_callback'=>[$this, 'save_settings_permission']
        ] );

    }

    public function get_settings(){

        $email = get_option('react_app_email');
        $name = get_option('react_app_name');
        $pass = get_option('react_app_pass');

        $response = [
            'email' => $email,
            'name' =>  $name,
            'pass'=> $pass
        ];


        return rest_ensure_response($response);
    }

    public function get_settings_permission(){
        return true;
    }

    public function save_settings( $req ){

        $email = sanitize_text_field( $req['email']);
        $name =  sanitize_text_field( $req['name']);
        $pass =  $req['pass'];

        update_option('react_app_email', $email);
        update_option('react_app_name', $name);
        update_option('react_app_pass', $pass);
        
        return rest_ensure_response("Success from save_settings");
    }

    public function save_settings_permission(){
       return true;
    }



}
