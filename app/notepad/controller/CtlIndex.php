<?php
namespace app\notepad\controller;

use think\Request;
use app\notepad\model\ModIndex;
class CtlIndex
{
    public function __construct()
    {
        $this->request = new Request();
        $this->mod = new ModIndex();
    }

    public function index()
    {
        $list = $this->mod->noteList();
        $pattern = '/<p(.*?)>(.*?)<\/p>/i';
        foreach ($list as $k => $v) {
            $str = '';
            preg_match($pattern,$list[$k]['content'],$str);
            $list[$k]['content'] = $str[0];
            $list[$k]['create_time'] = date('Y-m-d', $v['create_time']);
        }
        $out['list'] = $list;
        return view('/index', $out);
    }

    public function noteDetails()
    {
        $params['id'] = $this->request->param('id');
        $out = $this->mod->noteDetails($params);
        $out['data']['create_time'] = date('Y-m-d H:i:s', $out['data']['create_time']);
        return view('/details', $out);
    }

}
