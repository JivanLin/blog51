<?php
namespace app\admin\controller;

use app\admin\model\ModNotepad;
use think\Request;

class CtlNotepad
{
    public $request;

    public function __construct()
    {
        $this->request = new Request();
        $this->mod = new ModNotepad();
    }

    public function index()
    {
        return view('notepad/index');
    }

    public function notepadList()
    {
        $params = [
            'page' => $this->request->param('page', 1),
            'limit' => $this->request->param('limit', 15),
        ];
        $list = $this->mod->notepadList($params);
        return $list;
    }

    public function addNotepad()
    {
        $params['id'] = $this->request->param('id', 0);
        $out['data'] = '';
        if($params['id']) {
            $out['data'] = $this->mod->getNotepad($params);
        }
        return view('notepad/addNotepad', $out);
    }

    public function addNotepadAction()
    {
        $params = $this->request->post();
        $ret = $this->mod->addNotepadAction($params);
        if($ret) {
            return success('','操作完成');
        }
        return fail('操作失败！');
    }

    public function delNotepad()
    {
        $params['id'] = $this->request->post('id');
        $ret = $this->mod->delNotepad($params);
        if($ret) {
            return success('','删除成功！');
        }
        return fail('删除失败！');
    }

}
