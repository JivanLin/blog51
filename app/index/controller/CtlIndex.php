<?php
namespace app\index\controller;

use app\index\model\ModIndex;
use think\Controller;
use think\Request;

class CtlIndex extends Controller
{
    protected $mod;
    public function __construct()
    {
        parent::__construct();
        $this->mod = new ModIndex();
    }

    public function index()
    {
        $out['list'] = $this->mod->getEssayList();
        return view('/index', $out);
    }

    public function essay()
    {
        $id = $this->request->get('id',0);
        if($id) {
            $out['data'] = $this->mod->getEssay($id);
            $out['__title__'] = $out['data']['title'];
            $out['__link__'] =  $_SERVER['HTTP_REFERER'];
            return view('/essay', $out);
        }
        return fail('留条命~~');
    }

}
