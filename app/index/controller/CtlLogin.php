<?php
namespace app\index\controller;

class CtlLogin
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