<?php
namespace app\admin\middleware;

use app\admin\service\SrvAuth;

class Auth
{
    public function handle($request, \Closure $next)
    {
        $REQUEST_URI = $_SERVER['REQUEST_URI'];
        $URI = strstr($REQUEST_URI, '/admin');

        if($URI) {
            if(!SrvAuth::checkLogin()) {
                return redirect('/admin/index');
            }
        }
        return $next($request);
    }
}