<?php
namespace app\user\service;

use app\user\model\ModArticle;

class SrvArticle
{
    public function __construct()
    {
        $this->mod = new ModArticle();
    }

    public function listJson($params)
    {
        if ($params['page'] < 0) {
            $params['page'] = 1;
        }
        !$params['limit'] && $params['limit'] = 15;

        return $this->mod->listJson($params);
    }

    public function getArticle($id)
    {
        return $this->mod->getArticle($id);
    }

    public function addAction($data)
    {
        if (!$data['title'] || !$data['content']) {
            return fail('缺少必要参数');
        }

        $res = $this->mod->addAction($data);
        if ($res !== false) {
            return success('', '提交成功');
        }
        return fail('提交失败');
    }

    public function updateStatus($id, $opt)
    {
        $update = [];
        $where = ['id' => $id];
        if ($opt == 0) {
            $update = ['status' => 1];
        }
        if ($opt == 1) {
            $update = ['status' => 2];
        }
        $res = $this->mod->updateStatus($update, $where);
        if ($res) {
            return success('', '成功');
        }
        return fail('失败');
    }

}