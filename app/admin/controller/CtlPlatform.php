<?php
namespace app\admin\controller;

use app\admin\model\ModPlatform;
use app\admin\service\SrvPlatform;
use think\Controller;

class CtlPlatform extends Controller
{
    protected $middleware = ['admin'];
    public $mod;
    public $srv;

    public function __construct()
    {
        parent::__construct();
        $this->mod = new ModPlatform();
        $this->srv = new SrvPlatform();
    }

    public function essay()
    {
        return view('platform/essay');
    }

    public function essayList()
    {
        $params = [
            'page' => $this->request->param('page',1),
            'limit' => $this->request->param('limit',15),
        ];
        return $this->srv->essayList($params);
    }

    public function essayEdit()
    {
        $params['id'] = $this->request->param('id', 0);
        $out['data'] = '';
        if($params['id']) {
            $out['data'] = $this->srv->getEssay($params);
        }
        return view('platform/essayEdit', $out);
    }

    public function essayTags()
    {
        $tags = $this->mod->getEssayTags();
        return success($tags);
    }

    public function essayEditAction()
    {
        $params = $this->request->post();
        $ret = $this->srv->essayEditAction($params);
        if($ret) {
            return success('','操作完成！');
        }
        return fail('操作失败！');
    }


}