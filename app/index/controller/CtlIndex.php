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
        print_r($out);
        return view('/index', $out);
    }

    public function essay()
    {
        $id = $this->request->get('id',0);
        if($id) {
            $out['data'] = $this->srv->getEssay($id);
            $out['__title__'] = $out['data']['title'];
            $out['__link__'] =  $_SERVER['HTTP_REFERER'];
            return view('/essay', $out);
        }
        return fail('留条命~~');
    }

}
