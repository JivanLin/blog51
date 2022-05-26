<?php
namespace app\admin\controller;

use app\admin\model\ModPlatform;
use app\admin\service\SrvPlatform;

class CtlPlatform extends CtlIndex
{
    public $mod;
    public $srv;

    public function __construct()
    {
        $this->mod = new ModPlatform();
        $this->srv = new SrvPlatform();
    }

}