<?php
namespace app\user\controller;

use think\Controller;
use app\user\service\SrvAuth;

class CtlIndex extends Controller
{
    protected $middleware = ['user'];

    public function console(){
        return view('/console');
    }

    public function index()
    {
        $out['__title__'] = '后台管理';
        $out['user'] = SrvAuth::get_cookie('user', true);

        $menu = SrvAuth::getNavMenu();
        $out['__menu__'] = json_encode($menu);

        return view('/index', $out);
    }

}
