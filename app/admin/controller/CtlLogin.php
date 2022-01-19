<?php
namespace app\admin\controller;

use app\admin\service\SrvLogin;
use think\Request;

class CtlLogin
{
    public function __construct()
    {
        $this->request = new Request();
        $this->srv = new SrvLogin();
    }

    public function index()
    {
        return view('login/login');
    }

    public function loginAction()
    {
        $data = $this->request->post('data');
        parse_str($data,$_POST);
        $params = [
            'username' => $_POST['username'],
            'password' => $_POST['password'],
        ];

        return $this->srv->loginAction($params);
    }

    public function register()
    {
        return view('login/register');
    }

    public function registerAction()
    {
        $data = $this->request->post('data');
        parse_str($data,$_POST);
        $params = [
            'username' => $_POST['username'],
            'password' => $_POST['password'],
        ];

        return $this->srv->registerAction($params);
    }

    public function logout()
    {
        $this->srv->logout();
        return redirect('/admin/index');
    }
}