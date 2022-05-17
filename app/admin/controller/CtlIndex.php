<?php
namespace app\admin\controller;

use think\Controller;
use app\admin\service\SrvAuth;

class CtlIndex extends Controller
{
    protected $middleware = ['admin'];

    public function console(){
        return view('/console');
    }

    public function index()
    {
        $out['__title__'] = '后台管理';
        $out['user'] = SrvAuth::get_cookie('user', true);

        $top = SrvAuth::getNavTop();
        $top_first = array_keys($top);
        $out['__top__'] = $top;
        $out['__top_this__'] = $top_first[0];

        $menu = SrvAuth::getNavMenu();
        $out['__menu__'] = json_encode($menu);

        return view('/index', $out);
    }

}
