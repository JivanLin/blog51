<?php
namespace app\admin\controller;

use app\admin\service\SrvLogin;
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
        $out['user'] = SrvLogin::get_cookie('user', true);
        return view('/index', $out);
    }
}
