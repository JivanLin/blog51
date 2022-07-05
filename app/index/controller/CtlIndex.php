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
        $out['list'] = $this->srv->getArticleList();
        return view('/index', $out);
    }

    public function details()
    {
        $id = $this->request->get('id');
        $out['data'] = $this->srv->getArticle($id);
        $out['__title__'] = $out['data']['title'];
        $out['__link__'] = 'http://www.blog51.com/index/index/details?id='.$id;

        return view('/details', $out);
    }

}
