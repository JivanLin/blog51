<?php
namespace app\index\controller;

class Login
{
    public function index()
    {
        return view('login/login');
    }

    public function login()
    {
        $data = $_POST;
        return json($data);
    }

}