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
        $data = $this->srv->getArticleList();
        $out['list'] = $data['list'];
        $out['page'] = $data['page'];
        return view('/index/index', $out);
    }

    public function details()
    {
        $id = $this->request->get('id');
        $out['data'] = $this->srv->getArticle($id);
        $out['__title__'] = $out['data']['title'];

        return view('/index/details', $out);
    }

}
