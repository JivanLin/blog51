<?php
namespace app\user\model;

use think\Db;

class ModLogin
{
    public function getLoginInfo($user)
    {
        return Db::name('admin')->where('user','=',$user)->find();
    }

    public function registerAction($data)
    {
        return Db::name('admin')->insert($data);
    }
}
