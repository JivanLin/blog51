<?php
namespace app\blog\controller;

use think\Controller;
use think\Db;

class Index extends Controller
{
    public function index()
    {
        return view('/index');
    }

    public function getUser()
    {
        $data = Db::query('select * from `user`');
        return json($data);
    }

}
