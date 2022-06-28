<?php
namespace app\index\controller;

use app\index\service\SrvIndex;
use think\Controller;

class CtlIndex extends Controller
{
    protected $srv;
    public function __construct()
    {
        parent::__construct();
        $this->srv = new SrvIndex();
    }

    public function index()
    {
        $out['list'] = $this->srv->getArticle();
        return view('/index', $out);
    }

}
