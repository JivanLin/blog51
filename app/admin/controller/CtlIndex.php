<?php
namespace app\admin\controller;

class CtlIndex
{
    public function console(){
        return view('/console');
    }

    public function index()
    {
        return view('/index');
    }
}
