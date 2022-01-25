<?php
namespace app\admin\service;

use app\admin\model\ModLogin;
define("COOKIE_ADMIN_DOMAIN",$_SERVER['SERVER_NAME']);
class SrvAuth
{
    public static $id = '';
    public static $user = '';
    public static $nick = '';
    public static $LOGIN_KEY = 'PIOdSJ-SwedJ1HDB-Q2WWOE-NX442V3PP2';

    public function __construct()
    {
        $this->mod = new ModLogin();
    }

    /**
     * 检查是否登录
     * @return bool
     */
    public static function checkLogin(){
        self::$id = self::get_cookie('id',false);
        self::$user = self::get_cookie('user',false);
        self::$nick = self::get_cookie('nick',false);
        $time = self::get_cookie('time',false);
        $auth = self::get_cookie('auth',false);
        $_auth = self::getCookieSign(self::$id,self::$user,self::$nick,$time);
        if($_auth === $auth){
            return true;
        }else{
            self::logout();
            return false;
        }
    }

    public function loginAction($params)
    {
        if(!$params['username'] || !$params['password']) {
            return fail('用户名或密码不能为空！');
        }
        $info = $this->mod->getLoginInfo($params['username']);
        if(!$info) {
            return fail('用户名不存在，请先注册！');
        }
        if(self::signPwd($params['username'],$params['password'],$info['salt']) === strtolower($info['pwd'])){
            $time = time();
            self::set_cookie($info['id'],$info['user'],$info['nick'],$time);
            //更新用户登录数据 如ip/最后登录时间等
            //...
            return success('','登陆成功');
        }
        return fail('用户名或密码错误！');
    }

    public function registerAction($params)
    {
        if(!$params['username']) {
            return fail('用户名不能为空！');
        } else {
            //检查用户是否存在
        }
        if(!$params['password']) {
            return fail('密码不能为空！');
        } else {
            //验证密码可用性
            //if(preg_match('/[a-zA-Z]/',$params['password'])==0){
            //    return fail('密码必须包含字母');
            //}
            //if(preg_match('/[0-9]/',$params['password'])==0){
            //    return fail('密码必须包含数字');
            //}
            if(strlen($params['password']) < 6){
                return fail('密码不能低于6位！');
            }
        }

        $salt = self::getSalt(10);
        $params['password'] = self::signPwd($params['username'],$params['password'],$salt);

        $data = [
            'user' => $params['username'],
            'pwd' => $params['password'],
            'salt' => $salt,
            'create_time' => time(),
        ];
        $ret = $this->mod->registerAction($data);

        if($ret) {
            return success('','注册成功！');
        }
        return fail('注册失败！');
    }

    /**
     * salt盐度与用户密码加密机制 获取salt盐度
     * @param $len
     * @return false|string
     */
    public static function getSalt($len)
    {
        if($len > 32){
            $len = 32;
        }
        return substr(md5(microtime(true) . mt_rand(100000, 999999)), 0, $len);
    }

    /**
     * salt盐度与用户密码加密机制 生成密码签名
     * @param $username
     * @param $password
     * @param $salt
     * @return string
     */
    public static function signPwd($username, $password, $salt)
    {
        return strtolower(md5($password.$username.$salt.$password.'LWJ'));
    }

    /**
     * cookie网页缓存 PHP/setcookie函数
     * @param $id
     * @param $user
     * @param $nick
     * @param $ntime
     * @param string $keep
     */
    public static function set_cookie($id, $user, $nick, $ntime, $keep = '')
    {
        $time = 0;
        if($keep == 'on'){
            $time = time()+86400/2+3600*4;
        }
        $auth = self::getCookieSign($id,$user,$nick,$ntime); //用于中间件验证用户是否登录

        //setcookie(name,value,expire,path,domain,secure);
        //名称(必需),值(必需),有效期(可选),服务器路径(可选),域名(可选),规定是否通过安全的 HTTPS 连接来传输 cookie(可选)
        setcookie('id', $id, $time, '/', COOKIE_ADMIN_DOMAIN);
        setcookie('user', $user, $time, '/', COOKIE_ADMIN_DOMAIN);
        setcookie('nick', $nick, $time, '/', COOKIE_ADMIN_DOMAIN);
        setcookie('time', $ntime, $time, '/', COOKIE_ADMIN_DOMAIN);
        setcookie('auth', $auth, $time, '/', COOKIE_ADMIN_DOMAIN);
    }

    public static function getCookieSign($id,$user,$nick,$ntime){
        return md5($id.$user.self::$LOGIN_KEY.$nick.$ntime);
    }

    /**
     * cookie网页缓存获取
     * @param $cookie_name
     * @param bool $safe
     * @return mixed|string
     */
    public static function get_cookie($cookie_name,$safe=true){
        //tp框架未定义数组做判断
        if(!isset($_COOKIE[$cookie_name])) {
            return '';
        }

        $value = $_COOKIE[$cookie_name];
        if($value){
            if($safe){ //安全机制 放xss注入
                clean_xss($value);
            }
            return $value;
        }
        return '';
    }


    public static function logout()
    {
        setcookie('id', '', 0, '/',COOKIE_ADMIN_DOMAIN);
        setcookie('user', '', 0, '/',COOKIE_ADMIN_DOMAIN);
        setcookie('nick', '', 0, '/',COOKIE_ADMIN_DOMAIN);
        setcookie('time', '', 0, '/',COOKIE_ADMIN_DOMAIN);
        self::$id = '';
        self::$user = '';
        self::$nick = '';
    }

    public static function getNav()
    {
        return array(
            array(
                'title' => '随笔日志',
                'icon' => 'stack-exchange',
                'href' => '',
                'spread' => true,
                'children' => array(
                    array(
                        'title' => '日记列表单',
                        'icon' => 'book',
                        'href' => '/admin/platform/essay',
                        'spread' => false,
                    ),
                    array(
                        'title' => '日记评论表',
                        'icon' => 'book',
                        'href' => '',
                        'spread' => false,
                    ),
                )
            ),
            array(
                'title' => '个人记事本',
                'icon' => 'stack-exchange',
                'href' => '',
                'spread' => false,
                'children' => array(
                    array(
                        'title' => '日记列表单',
                        'icon' => 'book',
                        'href' => '/admin/notepad/index',
                        'spread' => false,
                    ),
                )
            ),
            array(
                'title' => '博客交互',
                'icon' => 'stack-exchange',
                'href' => '',
                'spread' => false,
                'children' => array(
                    array(
                        'title' => '文章发表',
                        'icon' => 'book',
                        'href' => '/admin/article/index',
                        'spread' => false,
                    ),
                )
            ),
        );
    }

}