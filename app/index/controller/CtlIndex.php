<?php
namespace app\index\controller;

use app\index\model\ModIndex;
use think\Request;

class CtlIndex
{
    public function __construct()
    {
        $this->mod = new ModIndex();
    }

    public function index()
    {
        return view('/index');
    }

}
