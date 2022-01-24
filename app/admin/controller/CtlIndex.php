<?php
namespace app\admin\controller;

use app\admin\service\SrvAuth;
use think\Controller;

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
        $out['__menu__'] = SrvAuth::getNav();
        return view('/index', $out);
    }
}
