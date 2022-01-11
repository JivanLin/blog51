<?php
namespace app\admin\controller;

class Index
{
    public function console(){
        return view('/console');
    }

    public function index()
    {
        return view('/index');
    }
}
