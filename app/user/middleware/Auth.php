<?php
namespace app\user\middleware;

use app\user\service\SrvAuth;

class Auth
{
    public function handle($request, \Closure $next)
    {
        $REQUEST_URI = $_SERVER['REQUEST_URI'];
        $URI = strstr($REQUEST_URI, '/admin');

        if($URI) {
            if(!SrvAuth::checkLogin()) {
                return redirect('/admin/login');
            }
        }
        return $next($request);
    }
}