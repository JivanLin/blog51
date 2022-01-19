<?php
namespace app\admin\middleware;

use app\admin\service\SrvLogin;

class Auth
{
    public function handle($request, \Closure $next)
    {
        $REQUEST_URI = $_SERVER['REQUEST_URI'];
        $URI = strstr($REQUEST_URI, '/admin');

        if($URI) {
            if(!SrvLogin::checkLogin()) {
                return redirect('/admin/login');
            }
        }
        return $next($request);
    }
}